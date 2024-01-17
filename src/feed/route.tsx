import { FunctionalComponent } from 'preact';
import { useState, useEffect } from 'preact/hooks'; 
import { fetchData } from './api';
import { Feed } from './feed';

interface Item {
	name: string,
	id: number
};

export const FeedRoute: FunctionalComponent<{}> = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    if (items.length === 0) {
      loadData();
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [isLoading]);

  const loadData = async (): Promise<void> => {
      setIsLoading(true);
      const data: Array<Item> | Error = await fetchData();
      if (data && data instanceof Array) {
        setItems(items.concat(...data));
        setError(null);
      } else {
        const _error = data as Error;
        setError(_error.message);
      }
      setIsLoading(false);
  };

  const DEBOUNCE = 1500;

  const handleScroll = (): void => {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
      // loadData();
      setTimeout(() => loadData(), DEBOUNCE);
      return;
    }
  };

  return (
    <>
      {items && <Feed items={items} isLoading={isLoading} errorMessage={error} />}
    </>
  );

}
