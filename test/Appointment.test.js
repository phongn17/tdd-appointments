import React from 'react';
import ReactDOM from 'react-dom';

import { Appointment } from '../src/Appointment';

describe('Appointment', () => {
  let container;
  let customer;

  const render = component => ReactDOM.render(component, container);

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  it('renders the customer first name', () => {
    customer = { firstName: 'Ashley' };
    render(<Appointment customer={customer} />);
    expect(document.body.textContent).toMatch('Ashley');
  });

  it('renders the customer first name', () => {
    customer = { firstName: 'Jordan' };
    render(<Appointment customer={customer} />);
    expect(document.body.textContent).toMatch('Jordan');
  });
});