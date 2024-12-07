import { Link } from "react-router-dom";
import error from '../../src/assets/images/404-page-not-found-1-66.svg'

const Error = () => {
  return (
   <div className="flex justify-center mt-36">
     <div className="text-cente font-bold text-2xl">
      <h2>NO DATA FOUND HERE</h2>
    <div>
    <img src={error} alt="" className="w-28 h-24"/>
    </div>
      <Link to='/' className="btn btn-success text-white">GO BACK TO HOME</Link>
    </div>
   </div>
  );
};

export default Error;