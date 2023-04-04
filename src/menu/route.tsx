import { FunctionalComponent } from 'preact';
import { useState } from 'preact/hooks';
import { Menu } from './menu';

enum PageRoute {
	Home,
	EditProfile
}

enum MenuAction {
	Redirect,
	Logout
}

const menuItems = [
	{ label: 'Home', action: MenuAction.Redirect, payload: PageRoute.Home },
	{ label: 'My Profile', action: MenuAction.Redirect, payload: PageRoute.EditProfile },
	{ label: 'Sign Out', action: MenuAction.Logout, payload: undefined }
];

export const MenuRoute: FunctionalComponent<{}> = () => {
	const [lastValue, setLastValue] = useState('');

	return (
		<div class="menu_page">
			<Menu
				buttonText="Click"
				items={menuItems}
				onSelect={(a, p) => {
					setLastValue(`action: ${a}, payload: ${p}`);
				}}
			/>

			<div>{lastValue}</div>
		</div>
	);
};
