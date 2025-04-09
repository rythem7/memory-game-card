import { useEffect, useState, useCallback } from 'react';
import './App.css';
import { themeChange } from 'theme-change';
// import NavBar from './components/Navbar';
import ThemeSwitcher from './assets/ThemeSwitcher';
// import Footer from './components/Footer';
import cards, {shuffleArray}  from './components/cards';
import cardBack from './cards/card_back.svg';
import Image from './components/partials/Image';

function App() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  const [disableClicks, setDisableClicks] = useState(false);
  // 👆 Prevents clicking on already flipped or matched cards
  const [newCards, setNewCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  // { id: 1, name: 'Ace of Spades', image: aceOfSpades, active: false }

  const handleClick = useCallback((index) => {
    if (disableClicks || flipped.includes(index) || matchedCards.includes(index)) return;
    // 👆 Prevents clicking on already flipped or matched cards
    
    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);
    // console.log(newFlipped);
    // 👆 Adds the clicked card to the flipped array  
    
    if (newFlipped.length === 2) {
      setDisableClicks(true);
      const checkMatch = () => {
        const firstCard = newCards[newFlipped[0]];
        const secondCard = newCards[newFlipped[1]];
        if (firstCard.id === secondCard.id) {
          setMatchedCards([...matchedCards, firstCard.id, secondCard.id]);
          setFlipped([]);
          console.log(matchedCards);
        }
        setFlipped([]);
        setDisableClicks(false);
      };
      requestAnimationFrame(() => setTimeout(checkMatch, 1000));
    };    
  }, [disableClicks, flipped, matchedCards, newCards]);

  const refreshCards = useCallback(() => {
    setNewCards([]);
    const shuffledCards = shuffleArray(cards).slice(0, 6); // Picked first 6 cards from shuffled array
    const chosenCards2 = shuffleArray(shuffledCards);
    const chosenCards3 = shuffleArray(shuffledCards);
    setNewCards([...chosenCards3, ...chosenCards2]);
    // shuffledCards = [];
    // chosenCards2 = [];
    // chosenCards3 = [];
    setFlipped([]);
    setMatchedCards([]);
  }, []);

  return(
    <div className='flex flex-col w-screen min-h-screen justify-evenly'>
      {/* <NavBar /> */}
      {newCards.length === 0 ? (
          <h1 className="text-3xl text-center font-bold mt-4">Click the button to start playing!</h1>
        ) : (
          <h1 className="text-3xl text-center font-bold mt-4">{matchedCards.length === newCards.length ? "You won!" : "Keep going!"}</h1>
        )}
        {newCards.length !== 0 && <h2 className="text-2xl text-center font-bold mt-4">{matchedCards.length/2} / {newCards.length/2} matched</h2>}
        
        <div className={`max-w-[70vw] max-h-[90vh] mt-4 text-center self-center ${newCards.length === 0 ? "hidden" : ""}`}>
        <div className="inline-grid grid-cols-4 grid-rows-3 gap-4">
          {newCards && newCards.map((card, index) => (
            <div key={index} onClick={() => handleClick(index)} className={`swap swap-flip ${matchedCards.includes(card.id) ? 'pointer-events-none' : ''} ${flipped.includes(index) || matchedCards.includes(card.id) ? "swap-active" : null}`}>
              <div className="bg-transparent aspect-auto h-[15rem] swap-on">
                <Image src={card.image} />
              </div>
              <div className="bg-transparent aspect-auto h-[15rem] swap-off">
                <Image src={cardBack} />
              </div>
            </div>
          ))}
        </div>
        </div>
        {/* {newCards.length !== 0 && <h2 className="text-2xl text-center font-bold mt-4">{flipped.length} flipped</h2>}         */}
        <button onClick={refreshCards} className="btn btn-primary mt-4 btn-wide self-center">
          {newCards.length === 0 ? "Play!" : "Play Again!"}
        </button>
      
      {/* </main> */}

      {/* <Footer /> */}

      <ThemeSwitcher />
    </div>
  );
};

export default App;