import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './page/Home';
import Register from './components/Register';
import Main from './components/Main';

function App() {
  const router = createBrowserRouter([
    
    {
      path:"/",
      element: <Main/>,
      children: [
        {path: '/', element: <Home/>},
        {path: '/home', element: <Home/>},
        {path:'/register',
        element: <Register/>}
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