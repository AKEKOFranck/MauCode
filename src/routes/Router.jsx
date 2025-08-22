import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Course from '../pages/Course';
import About from '../pages/About';
import PY1 from '../pages/PY1';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/Course',
        element:<Course/>
      },
       {
        path:'/About',
        element:<About/>
      },
       {
        path:'/PY1',
        element:<PY1/>
      },
    ]
  }
]);

export default router;