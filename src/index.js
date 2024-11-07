/*
Edit index.js. Use React-router-com library to define routes (address and which component it corresponds to). ErrorElement definition will capture all invalid calls (wrong url) and displays ErrorPage. 
There are also paths for signing in and signing up, which will display Authentication component using proper mode. Home component is protected and only logged in users can access it. 
*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './screens/Home';
import Authentication,{ AuthenticationMode }from './screens/Authentication';
import ErrorPage from './screens/ErrorPage';
//import reportWebVitals from './reportWebVitals';
import ProtectedRoute from './components/ProtectedRoute';
import UserProvider from './context/UserProvider';

const router = createBrowserRouter([
    {
        errorElement: <ErrorPage />,
    },
    {
        path: "/signin",
        element: <Authentication authenticationMode={AuthenticationMode.Login} />,
    },
    {
        path: "/signup",
        element: <Authentication authenticationMode={AuthenticationMode.Register} />
    },
    {
        element: <ProtectedRoute />,
        children: [
            {
                path: "/",
                element: <Home />,
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
       < RouterProvider router= {router} />
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

