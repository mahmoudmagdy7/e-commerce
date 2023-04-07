/*============ libraries ============== */
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import $ from 'jquery';
/************** styling ************/
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/js/all.js'
import './App.css';

/*============ Components ============== */
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Notfound from './Pages/Notfound/Notfound';
import Layout from './Pages/Layout/Layout';


function App() {
  console.log($('a'));
  const router = createBrowserRouter([

    {
      path: '', element: <Layout />, children: [
        { path: '', element: <Home /> },
        { path: 'home', element: <Home /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
      ]
    },
    { path: '*', element: <Notfound /> }



  ])


  return <>

    <RouterProvider router={router} />

  </>


}

export default App;
