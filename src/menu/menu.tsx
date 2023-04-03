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
export const Menu = <A, P>({ items, onSelect }: MenuArgs<A, P> & MenuEvents<A, P>) => {
	return <div>TODO: implement the menu</div>;
};
