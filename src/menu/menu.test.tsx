import { render, fireEvent } from '@testing-library/preact';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { Menu } from './menu';

const buttonText = 'Click';
const onSelect = vi.fn();
const items: { label: string, action: string, payload: string}[] = [
  {
    label: 'HOME',
    action: 'REDIRECT',
    payload: 'REDIRECT TO HOME PAGE'
  }
];

const testArgs = {
  items, onSelect, buttonText
}

describe('menu - rendering', () => {
  it('renders correctly', () => {
    const { container } = render(<Menu {...testArgs}/>);
    const button = container.getElementsByClassName('menu_button').item(0);
    const menu = container.getElementsByClassName('menu_dropdown').item(0);
    expect(button?.textContent).toBe(buttonText);
    expect(menu).toBeNull();
  });
})

describe('click event - opening the menu', () => {
  let container: any;
  beforeEach(() => {
    container = render(<Menu {...testArgs}/>).container;
  })
  describe('fires an event and updates the DOM', () => {
    it('open the menu - a li element exists', () => {
      const button = container.getElementsByClassName('menu_button').item(0);
      if (button) {
        fireEvent.click(button);
        const menuListItem = container.getElementsByClassName('menu_listMenuItem').item(0);
        expect(menuListItem?.textContent).toBe(items[0].label);
      }
    })

    it('close the menu if clicked twice - menu element is not present', () => {
      const button = container.getElementsByClassName('menu_button').item(0);
      if (button) {
        fireEvent.click(button);
        fireEvent.click(button);
        const menuListItem = container.getElementsByClassName('menu_listMenuItem').item(0);
        expect(menuListItem).toBeNull();
      }
    })
  })
});

describe('when clicking on a list item', () => {
  let container: any;
  beforeEach(() => {
    container = render(<Menu {...testArgs}/>).container;
  });
  it('an action gets called', async () => {
    const button = container.getElementsByClassName('menu_button').item(0);
    fireEvent.click(button);
    const menuListItem = container.getElementsByClassName('menu_listMenuItem').item(0);
    await fireEvent.click(menuListItem, {});
    expect(testArgs.onSelect).toHaveBeenCalledWith('REDIRECT', 'REDIRECT TO HOME PAGE');
  })
})

