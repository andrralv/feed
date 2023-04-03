import Router from 'preact-router';
import './app.css';
import { HelloView } from './hello/hello';
import { ListWithClick } from './list-with-click/list';
import { ListWithCustomEvents } from './list-with-custom-events/list';
import { InfiniteScroll } from './list-with-scroll/list';
import { ListView } from './list/list';

export function App() {
	return (
		<div class="app">
			<Router>
				<HelloView path="/hello" hello="Hello world!" />
				<div path="/list">
					<ListView items={['dogs', 'cats', 'horses']} />
				</div>
				<div path="/list-with-click">
					<ListWithClick />
				</div>
				<div path="/typed-events">
					<ListWithCustomEvents />
				</div>
				<div path="/infinite-scroll">
					<InfiniteScroll />
				</div>
			</Router>
		</div>
	);
}
