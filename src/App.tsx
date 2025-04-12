import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router'
import { Provider } from 'react-redux';

// Pages
import Header from './component/Header';
import EmployeeList from './pages/Employee'
import EmployeeForm from './pages/Employee/EmployeeForm';

import { store } from './store/store';

// CSS
import './App.scss';
import { MOCK_EMPLOYEE_DATA } from './store/data';

function App() {
  
  useEffect(() => {
    sessionStorage.setItem("employees", JSON.stringify(MOCK_EMPLOYEE_DATA));
  }, []);

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Navigate to="/employee" replace />}/>
            <Route path="/employee">
              <Route index  element={<EmployeeList />}/>
              <Route path="add" element={<EmployeeForm />}/>
              <Route path="edit">
                <Route path=":id" element={<EmployeeForm />}/>
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
