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
    
    <div className="bg-base-200 dark:bg-gray-800 py-16 text-gray-900 dark:text-gray-100">
      <div className="flex flex-col lg:flex-row justify-between w-10/12 mx-auto">
        <div className="flex justify-center">
          <img src={footer} alt="" className="lg:w-[300px] w-[150px]" />
        </div>

        <div className="flex justify-center mt-12 items-center">
          <div className="flex justify-center gap-6">
            <a
              target="_blank"
              href="https://www.facebook.com/sh.rubina?mibextid=ZbWKwL"
            >
              <FaFacebook className="text-3xl text-blue-700 dark:text-blue-400" />
            </a>
            <a target="_blank" href="https://x.com/rubinaakter4321">
              <FaTwitter className="text-3xl text-sky-400 dark:text-sky-200" />
            </a>
            <a target="_blank" href="https://github.com/rubina02akter">
              <FaGithub className="text-3xl text-gray-900 dark:text-gray-100" />
            </a>
            <p>
              <FaInstagram className="text-3xl text-red-400 dark:text-red-300" />
            </p>
          </div>

          <div>
            <img src={footer2} alt="" className="w-48 h-20" />
          </div>
        </div>
      </div>
      <div className="mt-8 w-7/12 mx-auto border-b border-black dark:border-gray-600">
        <hr />
      </div>
      <div className="text-center p-4">
        <p className="text-xs md:text-sm font-thin">
          Copyright © {new Date().getFullYear()} - All rights reserved by GAME_REVIEW
          Industries Ltd
        </p>
      </div>
      <div className="w-7/12 mx-auto border-b border-black dark:border-gray-600">
        <hr />
      </div>
    </div>
  );
};

export default Footer;
