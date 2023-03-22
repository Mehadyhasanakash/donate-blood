import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './page/Home';
import Register from './components/Register';
import Main from './components/Main';
import About from './page/About';
import Blog from './page/Blog';
import Contact from './page/Contact';
import Login from './components/Login';

function App() {
  const router = createBrowserRouter([
    
    {
      path:"/",
      element: <Main/>,
      children: [
        {path: '/', element: <Home/>},
        {path: '/home', element: <Home/>},
        {path:'/register',
        element: <Register/>},
        {path:'/about',
        element:<About/> },
        {path:'/blog',
        element:<Blog/> },
        {path:'/contact',
        element:<Contact/> },
        {path:'/login',
        element:<Login/> }
      ]
    },
    
  ])
  
  return (
    <div >
        <RouterProvider router={router} />

      
    </div>
  );
}

export default App;