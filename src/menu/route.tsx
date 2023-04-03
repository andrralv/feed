import { FunctionalComponent } from 'preact';
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

export const MenuRoute: FunctionalComponent<{}> = () => (
	<Menu
		buttonText="Click"
		items={menuItems}
		onSelect={(a, p) => {
			console.log(`action: ${a}, payload: ${p}`);
		}}
	/>
);
