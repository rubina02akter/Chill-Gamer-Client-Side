import { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MyReviewCard from "../components/MyReviewCard";
import { Helmet } from "react-helmet";

const MyReview = () => {
  const { user,emails, setEmails } = useContext(AuthContext);
 

  console.log(user.email);

  useEffect(() => {
    if (user.email) {
      const data = async () => {
        const url = `https://game-review-server-side.vercel.app/myReviews?email=${user.email}`;
        const res = await fetch(url);
        const value = await res.json();
        setEmails(value);
      };
      data();
    }
  }, [user?.email]);

  console.log(emails);


  return (
    <div>
       <Helmet>
       <title>My Review|Game Review</title>
        <meta name="description" content="Helmet application"></meta>
       </Helmet>
      

      <div>
       {
        emails.map(e=><MyReviewCard e={e} ></MyReviewCard>)
       }
      </div>
    </div>
  );
};

export default MyReview;
