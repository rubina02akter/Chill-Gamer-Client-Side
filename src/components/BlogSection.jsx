import { Fade } from "react-awesome-reveal";

const BlogSection = () => {
  return (
    <div className="py-16">
      <Fade cascade>
        <h2 className="font-extrabold underline text-center text-3xl mb-8 text-red-800 dark:text-white">
          Latest Blog Posts
        </h2>
      </Fade>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 mx-auto">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-gray-100 dark:hover:bg-gray-700">
          <Fade delay={200}>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Top 10 Must-Play Games of 2025
            </h3>
            <p className="text-gray-500 dark:text-gray-300 mb-4">
              Stay ahead in the gaming world with our curated list of the most
              exciting games to play in 2025. Discover new adventures and
              challenges that will blow your mind!
            </p>
            <a
            
              className="text-red-800 hover:underline"
            >
              Read More
            </a>
          </Fade>
        </div>

        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-gray-100 dark:hover:bg-gray-700">
          <Fade delay={400}>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              How to Build Your Perfect Gaming Setup
            </h3>
            <p className="text-gray-500 dark:text-gray-300 mb-4">
              Creating the ultimate gaming setup can be overwhelming. In this
              blog post, we guide you through the essentials for a smooth and
              immersive gaming experience.
            </p>
            <a
             
              className="text-red-800 hover:underline"
            >
              Read More
            </a>
          </Fade>
        </div>

        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-gray-100 dark:hover:bg-gray-700">
          <Fade delay={600}>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              The Future of VR Gaming: Trends to Watch
            </h3>
            <p className="text-gray-500 dark:text-gray-300 mb-4">
              Virtual Reality is rapidly changing the way we play games. Explore
              the most exciting VR trends and what they mean for the future of
              gaming.
            </p>
            <a
             
              className="text-red-800 hover:underline"
            >
              Read More
            </a>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
