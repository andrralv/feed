import { render, fireEvent } from '@testing-library/preact';
import { describe, expect, it, vi } from 'vitest';
import { List } from './list';

describe('ListView - render', () => {
	const tests: {
		name: string;
		items: { label: string; value: number }[];
		want: string[];
	}[] = [
		{
			name: 'empty list',
			items: [],
			want: []
		},
		{
			name: 'single item',
			items: [{ label: 'single item', value: 420 }],
			want: ['single item']
		},
		{
			name: 'multiple items',
			items: [
				{ label: 'rail dig', value: 100 },
				{ label: 'whippin da yams fair surfing', value: 333 }
			],
			want: ['rail dig', 'whippin da yams fair surfing']
		}
	];

	tests.forEach((t) => {
		it(`renders correctly: ${t.name}`, () => {
			const testArgs = {
				items: t.items.map((item) => ({ ...item, toLabel: () => item.label })),
				onClick: vi.fn()
			};

			const { container } = render(<List {...testArgs} />);
			const got = container.children.item(0);

			t.want.forEach((want, i) => {
				expect(got?.children[i].textContent).toEqual(want)});
			expect(testArgs.onClick).toHaveBeenCalledTimes(0);
		});
	});
});

describe('ListView - click event', () => {
	const tests: {
		name: string;
		items: { label: string; value: number }[];
		want: any;
	}[] = [
		{
			name: 'single item',
			items: [{ label: 'Snoop Dog', value: 420 }],
			want: 420
		}
	];

	tests.forEach((t) => {
		it(`click event - before and after: ${t.name}`, () => {
			const onClick = vi.fn();

			const { container } = render(<List items={t.items} onClick={onClick} />);
			const el = container.getElementsByClassName('todo')[0];
			t.items.forEach(() => expect(onClick).not.toHaveBeenCalled());
			fireEvent.click(el);
			t.items.forEach(item => expect(onClick).toHaveBeenCalledWith(item.value));
		});
	});
});
