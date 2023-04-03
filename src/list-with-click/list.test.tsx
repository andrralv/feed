import { render } from '@testing-library/preact';
import { describe, it } from 'vitest';
import { ListWithClick } from './list';

describe('ListWithClick - render', () => {
	const tests: {
		name: string;
		args: any;
		want: any;
	}[] = [
		{
			name: 'todo: add test name',
			args: undefined,
			want: undefined
		}
	];

	tests.forEach((t) => {
		it(`renders correctly: ${t.name}`, () => {
			const { container } = render(<ListWithClick {...t.args} />);
			// console.log(container.outerHTML)
			const got = container.getElementsByClassName('todo')[0];

			// TODO: assertions
		});
	});
});

describe('ListWithClick - click event', () => {
	const tests: {
		name: string;
		args: any;
		want: any;
	}[] = [
		{
			name: 'todo: add test name',
			args: undefined,
			want: undefined
		}
	];

	tests.forEach((t) => {
		it(`renders correctly: ${t.name}`, () => {
			const { container } = render(<ListWithClick {...t.args} />);
			// console.log(container.outerHTML)
			const got = container.getElementsByClassName('todo')[0];

			// TODO: identify the click target, fireEvent, check the event
			// const el = container.getElementsByTagName('todo')[0];

			// if (el) {
			// 	expect(el).not.toBeNull();
			// 	fireEvent.click(el);
			// } else {
			// 	expect(el).not.toBeNull();
			// }

			// TODO: assertions
		});
	});
});
