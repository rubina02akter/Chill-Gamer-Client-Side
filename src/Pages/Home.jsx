import Slider from "../components/Slider";
import { useEffect, useState } from "react";
import HomeCards from "../components/HomeCards";
import Section from "../components/Section";
import MarqueeComponent from "../components/Marquee";

const Home = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://game-review-server-side.vercel.app/highestRated")
      .then((res) => res.json())
      .then((data) => {
        // const games = data.sort((a, b) => b.rating - a.rating);
        setCards(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="bg-base-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <Slider />
      <MarqueeComponent></MarqueeComponent>
      <div className="text-center w-10/12 mx-auto my-12 space-y-4">
        <h2 className="text-3xl font-serif ">
          Discover the Highest Rated Games Loved by Players Worldwide – Uncover
          Exciting Adventures and Challenges Today!
        </h2>
        <p className="font-thin">
          Explore the most popular games with top ratings! Click 'Explore
          Details' on each card to dive into detailed information and start your
          gaming journey on the details page.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12 w-11/12 mx-auto">
        {cards.map((card) => (
          <HomeCards key={card._id} card={card}></HomeCards>
        ))}
      </div>

      <div>
        <h2 className="font-extrabold text-center text-2xl my-4">
          Explore Chill Gamer – Your Gateway to Relaxed Game Reviews and
          Features!
        </h2>
        <p className="text-center mb-4 font-thin text-gray-500">
          Discover Chill Gamer – A vibrant platform with game reviews,
          user-friendly features, and a detailed FAQ for your convenience!
        </p>
        <Section></Section>
      </div>
    </div>
  );
};

export default Home;
