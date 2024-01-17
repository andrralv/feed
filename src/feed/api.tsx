interface Item {
	name: string,
	id: number
}

export const fetchData = async (): Promise<Item[] | Error> => {
    const response = await fetch('https://6507497f3a38daf4803f5f1c.mockapi.io/words');
    if (response.status === 200) {
      return response.json();
    } else {
      return new Error('Too many API calls');
    }
};
