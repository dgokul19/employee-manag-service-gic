import { Provider } from 'react-redux';
import { MemoryRouter } from "react-router";

import { render, screen, fireEvent } from '@testing-library/react';
import EmployeeList from '../Employee/index';
import EmployeeForm from '../Employee/EmployeeForm';
import { store } from '../../store/store';

test('Add employee Redirect Route test', () => {
    const app = render(
      <Provider store={store}>
        <MemoryRouter>
          <EmployeeForm />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText(/Add Employee/i)).toBeInTheDocument();
  });

  
test('Add Employee Form - Input Field Test', () => {
  const app = render(
    <Provider store={store}>
      <MemoryRouter>
        <EmployeeForm />
      </MemoryRouter>
    </Provider>
  );
  
  // Test Case starts in Employee Form
  expect(screen.getByText(/Add Employee/i)).toBeInTheDocument();

  const SubmitBtn = screen.getByRole('button', { name: /Submit/i });
  fireEvent.click(SubmitBtn);
});
  