interface ListItemArgs<T> {
	items: { label: string; value: T }[];
	onClick: (itemValue: T) => void;
}

// List: shows a list of items. When clicked, the value of the item is passed to onClick.
export const List = <T,>({ items, onClick }: ListItemArgs<T>) => {
	return <div>TODO: implement list view</div>;
};
