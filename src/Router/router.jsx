import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import AllReviews from "../Pages/AllReviews";
import Register from "../components/Register";
import AddReview from "../Pages/AddReview";
import UpdateReview from "../Pages/UpdateReview";
import LogIn from "../components/LogIn";


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
        element: <AllReviews></AllReviews>,
        loader:() => fetch('http://localhost:5000/reviews')
      },
      {
        path:'login',
        element:<LogIn></LogIn>
      },
      {
        path:'register',
        element: <Register></Register>
      },
      {
        path:'addReview',
        element: <AddReview></AddReview>
      },
      {
        path:'updateReview',
        element: <UpdateReview></UpdateReview>
      },
    ]
  }
])

export default router;