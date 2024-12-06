import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MyReviewCard from "../components/MyReviewCard";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [emails, setEmails] = useState([]);

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

  const {name,photo}  = emails;

  return (
    <div>
      <h2 className="text-center">Data length: {emails.length}</h2>

      <div>
       {
        emails.map(e=><MyReviewCard e={e}></MyReviewCard>)
       }
      </div>
    </div>
  );
};

export default MyReview;
