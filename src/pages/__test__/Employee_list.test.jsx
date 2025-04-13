import { Provider } from 'react-redux';
import { MemoryRouter } from "react-router";

import { render, screen, fireEvent } from '@testing-library/react';
import EmployeeList from '../Employee/index';
import { store } from '../../store/store';


test('Check Employee List Route', () => {
  const app = render(
    <Provider store={store}>
      <MemoryRouter>
        <EmployeeList />
      </MemoryRouter>
    </Provider>
  );
  expect(screen.getByText(/Employee List/i)).toBeInTheDocument();
});


test('Check Employee List Route has All the Columns in table Header', () => {
  const app = render(
    <Provider store={store}>
      <MemoryRouter>
        <EmployeeList />
      </MemoryRouter>
    </Provider>
  );
  expect(screen.getByText(/First name/i)).toBeInTheDocument();
  expect(screen.getByText(/Last name/i)).toBeInTheDocument();
  expect(screen.getByText(/Email/i)).toBeInTheDocument();
});
