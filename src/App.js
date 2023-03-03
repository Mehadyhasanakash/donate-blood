import './App.css';
import Navbar from './compronents/Navbar';
import Home from './page/home/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    }
  ])
  
  return (
    <div >
        <RouterProvider router={router} />

      
    </div>
  );
}

export default App;
