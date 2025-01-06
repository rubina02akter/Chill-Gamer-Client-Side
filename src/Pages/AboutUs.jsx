import img1 from "../../src/assets/newImg/add review.png";
import img2 from "../../src/assets/newImg/Screenshot 2025-01-07 at 1.04.26 AM.png";
import img3 from "../../src/assets/newImg/Screenshot 2025-01-07 at 1.05.14 AM.png";
import img4 from "../../src/assets/newImg/Screenshot 2025-01-07 at 1.05.26 AM.png";

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-r from-blue-950 to-rose-900 text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <h1 className="text-4xl font-bold mb-6 text-center">
          About Chill Gamer
        </h1>
        <p className=" text-white text-center mb-10">
          Welcome to Chill Gamer, your ultimate platform for exploring and
          sharing game reviews. Designed with user experience in mind, Chill
          Gamer offers seamless navigation and engaging interactions for gaming
          enthusiasts.
        </p>

        {/* Website Link */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-4">🌐 Visit Website</h2>
          <a
            href="https://game-review-ad6c5.web.app/"
            className="underline text-blue-400 hover:text-blue-300"
          >
            game-review-ad6c5.web.app
          </a>
        </div>

        {/* Feature Cards */}
        <div className="space-y-12">
          {/* Add Review Page */}
          <FeatureCard
            imgSrc={img1}
            title="Add Review Page"
            description="Allows logged-in users to submit game reviews with comprehensive details. Protected route."
            text="Submit detailed game reviews and share your thoughts with the gaming community in a secure, user-friendly environment. The page is protected for logged-in users, ensuring that only authenticated players can contribute reviews."
          />

          {/* My Reviews Page */}
          <FeatureCard
            imgSrc={img2}
            title="My Reviews Page"
            description="Users can view, update, or delete their reviews."
            text="Manage, update, or delete your game reviews easily, keeping your feedback fresh and relevant to the community. This page lets users track their past contributions and update them whenever necessary, providing full control over their reviews."
          />

          {/* Watchlist Feature */}
          <FeatureCard
            imgSrc={img3}
            title="Watchlist Feature"
            description="Logged-in users can add games to their watchlist from the review details page."
            text="Keep track of games you're interested in with the Watchlist feature, adding your favorite games for future play. It's a perfect way to organize your gaming priorities and stay updated on games you wish to try."
          />

          {/* Watchlist Page */}
          <FeatureCard
            imgSrc={img4}
            title="Watchlist Page"
            description="Displays the user's watchlisted games in a table format."
            text="View your watchlisted games in a neatly organized table, making it easy to track what to play next. This page offers a simple yet efficient way to manage your gaming goals, featuring detailed game information at a glance."
          />
        </div>

        {/* Deployment Information */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-extrabold mb-4">📂 Deployment & Environment</h2>
          <p className="text-white">
            Client-side is deployed on Firebase, while the server-side is hosted on Vercel. 
            Sensitive environment variables such as Firebase config keys and MongoDB credentials 
            are securely managed via <code className="bg-gray-800 px-1 py-0.5 rounded">.env</code>.
          </p>
        </div>

        {/* Closing Note */}
        <div className="mt-12">
          <p className=" font-medium text-center">
            Thank you for exploring Chill Gamer! 🚀 Enjoy a seamless and chill
            game review experience.
          </p>
        </div>
      </div>
    </section>
  );
};

/* Reusable Feature Card Component */
const FeatureCard = ({ imgSrc, title, description, text }) => {
  return (
    <div className="flex flex-col  gap-6 items-center">
      {/* Left Section: Image */}
      <div className="w-full md:w-1/2 relative overflow-hidden group rounded-br-2xl rounded-tl-2xl border">
        <div className="group-hover:scale-105 duration-500">
          <img
            src={imgSrc}
            alt={title}
            className="w-full h-60 object-cover rounded-br-2xl rounded-tl-2xl"
          />
        </div>
        <div
          style={{ backgroundColor: "rgba(0, 0, 0, 0.55)" }}
          className="absolute inset-0 flex flex-col justify-center opacity-0 group-hover:opacity-100 items-center duration-500 rounded-br-2xl rounded-tl-2xl"
        >
          <h1 className="text-xl font-bold text-center">{title}</h1>
          <p className="text-center px-4">{description}</p>
        </div>
      </div>

      {/* Right Section: Description */}
      <div className="text-center ">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default AboutUs;
