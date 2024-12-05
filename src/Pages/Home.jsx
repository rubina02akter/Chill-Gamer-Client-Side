
import { useLoaderData } from 'react-router-dom';
import Slider from '../components/Slider';
import { useEffect, useState } from 'react';
import HomeCards from '../components/HomeCards';

const Home = () => {
  const data = useLoaderData();
  const[cards, setCards] = useState([]);
  const [ratings, setRatings] = useState()

  useEffect(() => {
    fetch("https://game-review-server-side.vercel.app/highestRated")
      .then((res) => res.json())
      .then((data) => {
        const games = data.sort((a,b)=>b.rating - a.rating)
       setCards(games)
      
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [setCards]);


  // setRatings(games)
  // setCards(games)

  // console.log(cards)

  
  return (
    <div>
    <Slider></Slider>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12 w-11/12 mx-auto'>
      {
        cards.map(card=><HomeCards key={card._id} card={card}></HomeCards>)
      }
    </div>
  
    </div>
  );
};

export default Home;