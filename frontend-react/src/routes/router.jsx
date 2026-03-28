// src/routes.jsx   or   App.jsx
import { createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from '../auth/ProtectedRoute';
import Login from '../auth/Login';
import Dashboard from '../pages/Dashboard';
import Profile from '../profile/Profile';
import ProtectedLayout from '../layouts/ProtectedLayout';
import Error from '../pages/Error';
import Home from '../pages/Home';
import PublicLayout from '../layouts/PublicLayout';
import Register from '../auth/Register';
import UsersInfo from '../users/UsersInfo';
import User from '../users/User';
import EditUserDetailsForm from '../users/EditUserDetailsForm';
import Todo from '../components/Todo';

export const router = createBrowserRouter([
  // ─── Public routes (anyone can see) ───
  {
    element: <PublicLayout />,
    children: [
      {
        path:"/",
        element:<Home/>
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register/>
      },
      
    ],
  },
  // ─── Protected routes ───
  {
    element: <ProtectedRoute />,          // ← this is the "lock" that checks if user is logged in
    children: [
      {
        element:<ProtectedLayout/>,
        children:[
            {
                path:"/dashboard",
                element:<Dashboard/>
            },
            {
                path:"/profile",
                element:<Profile/>
            },
            {
              path:"/users",
              element:<UsersInfo/>
            },
            {
              path:"/user/details/:id",
              element:<User/>
            },
            {
              path:`/users/edit/:id`,
              element:<EditUserDetailsForm/>
            },
            {
              path:"/todo",
              element:<Todo/>
            }
        ]
      }
      // You can add more protected pages here like this:
    ],
  },
  
  // when someone types wrong address
  {
    path: "*",
    element: <Error/>
  },
]);