import { render } from '@testing-library/preact';
import { describe, expect, it } from 'vitest';
import { ListArgs, ListView } from './list';

describe('ListView - render', () => {
	const tests: {
		name: string;
		args: ListArgs<{ label: string }>;
		want: string[];
	}[] = [
		{
			name: 'empty list',
			args: { items: [] },
			want: []
		},
		{
			name: 'single item',
			args: { items: [{ label: 'single item' }] },
			want: ['single item']
		},
		{
			name: 'multiple items',
			args: { items: [{ label: 'rail dig' }, { label: 'whippin da yams fair surfing' }] },
			want: ['rail dig', 'whippin da yams fair surfing']
		}
	];

	tests.forEach((t) => {
		it(`renders correctly: ${t.name}`, () => {
			const { container } = render(<ListView {...t.args} />);
			// console.log(container.outerHTML)
			const got = container;

			t.want.forEach((want, i) => expect(got.children[i].textContent).toEqual(want));
		});
	});
});
