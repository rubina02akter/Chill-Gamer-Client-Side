import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import AllReviews from "../Pages/AllReviews";
import Register from "../components/Register";
import AddReview from "../Pages/AddReview";
import UpdateReview from "../Pages/UpdateReview";
import LogIn from "../components/LogIn";
import MyReview from "../Pages/MyReview";
import WatchList from "../Pages/WatchList";
import PrivateRoutes from "./PrivateRoutes";


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
        element: <PrivateRoutes><AddReview></AddReview></PrivateRoutes>
      },
      {
        path:'updateReview',
        element: <UpdateReview></UpdateReview>
      },
      {
        path:'myReviews',
        element: <PrivateRoutes><MyReview></MyReview></PrivateRoutes>
      },
      {
        path:'watchlist',
        element: <PrivateRoutes><WatchList></WatchList></PrivateRoutes>
      },
    ]
  }
])

export default router;