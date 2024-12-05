import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaInstagram,
 
} from "react-icons/fa";
import footer from "../../src/assets/images/undraw_video_game_night_8h8m (1).svg";
import footer2 from "../../src/assets/images/undraw_personal_information_re_vw8a.svg";
const Footer = () => {
  return (
    <div className="bg-base-200 py-16">
      <div className="flex justify-between w-10/12 mx-auto">

      <div>
          <img src={footer} alt="" className="w-[300px]" />
        </div>
     
        <div className="flex justify-center mt-12 items-center ">
        <div className="flex justify-center gap-6">
          <a  target="_blank"  href="https://www.facebook.com/sh.rubina?mibextid=ZbWKwL">
            <FaFacebook className="text-3xl text-blue-700"></FaFacebook>
          </a>
          <a  target="_blank"  href="https://x.com/rubinaakter4321">
            <FaTwitter className="text-3xl text-sky-400"></FaTwitter>
          </a>
          <a  target="_blank"  href="https://github.com/rubina02akter">
            <FaGithub className="text-3xl"></FaGithub>
          </a>
          <p>
            <FaInstagram className="text-3xl text-red-400"></FaInstagram>
          </p>
        </div>

        <div>
          <img src={footer2} alt="" className="w-48 h-20" />
        </div>
        </div>

       
      

      </div>

      {/* <div className="text-center p-4">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by ACME
          Industries Ltd
        </p>
      </div> */}
    </div>
  );
};

export default Footer;
