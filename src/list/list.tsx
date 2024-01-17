import styles from './list.module.scss';

interface ListItemArgs<T> {
	items: { label: string; value: T }[];
	onClick: (itemValue: T) => void;
}

// List: shows a list of items. When clicked, the value of the item is passed to onClick.
export const List = <T,>({ items, onClick }: ListItemArgs<T>) => {
	return <ul className={styles.todoList}>{items.map((item ) => <li onClick={() => onClick(item.value)} className={styles.todo}>{item.label}</li>)}</ul>;
};
