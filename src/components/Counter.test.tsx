import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Counter from './Counter';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('can render and update a counter', () => {
  let initialData = 2;
  act(() => {
    ReactDOM.render(<Counter initialData={initialData} />, container);
  });
  const [resetButton, plusButton, minusButton] = container.querySelectorAll('button');
  const label = container.querySelector('p');
  expect(label.textContent).toBe(`you have clicked ${initialData} times`);
  
  act(() => {
    plusButton.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
  expect(label.textContent).toBe(`you have clicked ${initialData + 1} times`);
  
  act(() => {
    plusButton.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
  expect(label.textContent).toBe(`you have clicked ${initialData + 2} times`);

  act(() => {
    minusButton.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
  expect(label.textContent).toBe(`you have clicked ${initialData + 1} times`);

  act(() => {
    resetButton.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
  expect(label.textContent).toBe(`you have clicked ${initialData} times`);
});