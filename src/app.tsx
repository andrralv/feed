import Router, { Link } from 'preact-router';
import './app.css';
import { FeedRoute } from './feed/route';
import { HelloView } from './hello/hello';
import { ListRoute } from './list/route';
import { MenuRoute } from './menu/route';

export function App() {
	return (
		<div class="app">
			<Router>
				<div class="home" path="/">
					<div class="app_links">
						<Link href="/list">Task 1: List</Link>
						<Link href="/menu">Task 2: Menu</Link>
						<Link href="/feed">Task 3: Feed</Link>
					</div>
				</div>
				<HelloView path="/hello" hello="Hello world!" />
				<ListRoute path="/list" />
				<MenuRoute path="/menu" />
				<FeedRoute path="/feed" />
			</Router>
		</div>
	);
}
