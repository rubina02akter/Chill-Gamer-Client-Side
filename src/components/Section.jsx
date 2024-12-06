// import img1 from "../../src/assets/images/Rectangle 55.png";
// import img2 from "../../src/assets/images/Rectangle 66.png";
// import img3 from "../../src/assets/images/Rectangle 67.png";
import img5 from "../../src/assets/images/sectionBg.png";

const Section = () => {
  return (
    <div className="w-11/12 mx-auto flex flex-col md:flex-row lg:flex-row gap-5 text-black">
      <div className="md:w-1/2 w-full">
        <img src={img5} alt="" className="h-[330px] rounded-xl" />
      </div>
      <div className="md:w-1/2 w-full mb-5">
        <div className="collapse collapse-arrow bg-base-200 mb-4">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium ">
            What is Chill Gamer?
          </div>
          <div className="collapse-content">
            <p>
              Chill Gamer is a user-friendly game review application designed to
              offer a platform where users can explore and share their thoughts
              on games. It provides a clean and responsive UI to ensure a
              relaxed and enjoyable experience for gamers.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 mb-4">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">Key Features</div>
          <div className="collapse-content">
            <p>
              Chill Gamer includes essential features like user authentication,
              personalized profiles, and review management. These
              functionalities aim to enhance the overall user experience by
              making it seamless and engaging.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Project Goals
          </div>
          <div className="collapse-content">
            <p>
              The goal of Chill Gamer is to create a community-driven platform
              that emphasizes simplicity and functionality. It aims to provide a
              "chill" environment for gamers to connect and share reviews
              effortlessly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
