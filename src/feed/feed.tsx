import styles from './feed.module.scss';

interface Item{
	name: string,
	id: number
};

interface FeedArgs {
	items: Item[];
	isLoading: boolean,
	errorMessage: string | null
};

export const Feed = ({ items, isLoading, errorMessage }: FeedArgs) => {

	return (
		<div className={styles.feed}>
			<ul>
				{items.map((item, index) => (<li key={item?.id + index}>{item?.name}</li>))}
				{<div className={`${styles.loadingMessage} ${isLoading ? styles.messageShow : styles.messageHidden}`}>Loading More Content...</div>}
				{errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
			</ul>
		</div>
	)
};