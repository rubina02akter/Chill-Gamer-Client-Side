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
import ReviewDetails from "../Pages/ReviewDetails";
import Error from "../Pages/Error";
import ReviewCards from "../components/ReviewCards";
import AboutUs from "../Pages/AboutUs";
import Contact from "../Pages/Contact";


const router = createBrowserRouter([
  {
    path:'/',
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
      
      },
      {
        path:'allreviews',
        element: <AllReviews></AllReviews>,
        loader:() => fetch('https://game-review-server-side.vercel.app/reviews')
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
        path:'updateReview/:id',
        element: <UpdateReview></UpdateReview>,
        loader: ({ params }) =>
          fetch(`https://game-review-server-side.vercel.app/reviews/${params.id}`)
      },
      {
        path:'myReviews',
        element: <PrivateRoutes><MyReview></MyReview></PrivateRoutes>
      },
      {
        path:'watchlist',
        element: <PrivateRoutes><WatchList></WatchList></PrivateRoutes>
      },
      {
        path: 'review/:id',
        element: (
          <PrivateRoutes>
            <ReviewDetails></ReviewDetails>
          </PrivateRoutes>
        ),
        // loader: ({ params }) =>
        //   fetch(`https://game-review-server-side.vercel.app/reviews/${params.id}`),
      },
      {
        path: 'highestRated/:id',
        element: <ReviewCards></ReviewCards>
      },
      {
        path: 'about',
        element: <AboutUs></AboutUs>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
      
    ]
  }
])

export default router;