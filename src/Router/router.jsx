import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import AllReviews from "../Pages/AllReviews";
import LogIn from "../components/logIn";
import Register from "../components/Register";


const router = createBrowserRouter([
  {
    path:'/',
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'allreviews',
        element: <AllReviews></AllReviews>
      },
      {
        path:'login',
        element: <LogIn></LogIn>
      },
      {
        path:'register',
        element: <Register></Register>
      },
    ]
  }
])

export default router;