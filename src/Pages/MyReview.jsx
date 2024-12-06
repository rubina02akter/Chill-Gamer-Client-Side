import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const MyReview = () => {
  const {user} = useContext(AuthContext);

  const[emails,setEmails] = useState()

  console.log(setEmails);

  useEffect(()=>{
    fetch("https://game-review-server-side.vercel.app/reviews")
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      const emailFind = data.filter((d)=>d.name == user.displayName)
   console.log(emailFind);
  
    })
  },[])

console.log(emails);

  return (
    <div>
    <h2 className="text-center">data length :</h2>
    </div>
  );
};

export default MyReview;