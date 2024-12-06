import Slider from "../components/Slider";
import { useEffect, useState } from "react";
import HomeCards from "../components/HomeCards";
import Section from "../components/Section";

const Home = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://game-review-server-side.vercel.app/highestRated")
      .then((res) => res.json())
      .then((data) => {
        const games = data.sort((a, b) => b.rating - a.rating);
        setCards(games);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="bg-base-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <Slider />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12 w-11/12 mx-auto">
        {cards.map((card) => (
          <HomeCards key={card._id} card={card}></HomeCards>
        ))}
      </div>

      <Section></Section>
    </div>
  );
};

export default Home;
