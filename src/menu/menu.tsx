import { useState } from 'preact/hooks';
import styles from './menu.module.scss';

interface MenuItem<A, P> {
	label: string;
	action: A;
	payload: P;
}

interface MenuEvents<A, P> {
	onSelect: (action: A, payload: P) => void;
}

export interface MenuArgs<A, P> {
	buttonText: string;
	items: MenuItem<A, P>[];
}

// Menu: displays a button to show/hide a menu.
// When the user selects an item in the menu, the onSelect event is called.
export const Menu = <A, P>({ items, onSelect, buttonText }: MenuArgs<A, P> & MenuEvents<A, P>) => {
	const [ isOpen, setIsOpen ] = useState(false);

	const button = <button className={styles.menu_button} onClick={() => setIsOpen(!isOpen)}>{buttonText}</button>;
	const dropdown = <nav className={styles.menu_dropdown}><ul>{items.map(item => 
		<li tabIndex={0} className={styles.menu_listMenuItem} onClick={() => onSelect(item.action, item.payload)}>
			{item.label}
		</li>
		)}</ul></nav>;

	return (
		<div className={styles.menu}>
			{button}
			{isOpen && dropdown}
		</div>
	);
};
