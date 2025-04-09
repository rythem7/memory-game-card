import aceOfSpades from '../cards/ace_of_spades.svg';
import aceOfHearts from '../cards/ace_of_hearts.svg';
import aceOfDiamonds from '../cards/ace_of_diamonds.svg';
import aceOfClubs from '../cards/ace_of_clubs.svg';
import twoOfSpades from '../cards/2_of_spades.svg';
import twoOfHearts from '../cards/2_of_hearts.svg';
import twoOfDiamonds from '../cards/2_of_diamonds.svg';
import twoOfClubs from '../cards/2_of_clubs.svg';
import threeOfSpades from '../cards/3_of_spades.svg';
import threeOfHearts from '../cards/3_of_hearts.svg';
import threeOfDiamonds from '../cards/3_of_diamonds.svg';
import threeOfClubs from '../cards/3_of_clubs.svg';
import fourOfSpades from '../cards/4_of_spades.svg';
import fourOfHearts from '../cards/4_of_hearts.svg';
import fourOfDiamonds from '../cards/4_of_diamonds.svg';
import fourOfClubs from '../cards/4_of_clubs.svg';
import fiveOfSpades from '../cards/5_of_spades.svg';
import fiveOfHearts from '../cards/5_of_hearts.svg';
import fiveOfDiamonds from '../cards/5_of_diamonds.svg';
import fiveOfClubs from '../cards/5_of_clubs.svg';
import sixOfSpades from '../cards/6_of_spades.svg';
import sixOfHearts from '../cards/6_of_hearts.svg';
import sixOfDiamonds from '../cards/6_of_diamonds.svg';
import sixOfClubs from '../cards/6_of_clubs.svg';
import sevenOfSpades from '../cards/7_of_spades.svg';
import sevenOfHearts from '../cards/7_of_hearts.svg';
import sevenOfDiamonds from '../cards/7_of_diamonds.svg';
import sevenOfClubs from '../cards/7_of_clubs.svg';
import eightOfSpades from '../cards/8_of_spades.svg';
import eightOfHearts from '../cards/8_of_hearts.svg';
import eightOfDiamonds from '../cards/8_of_diamonds.svg';
import eightOfClubs from '../cards/8_of_clubs.svg';
import nineOfSpades from '../cards/9_of_spades.svg';
import nineOfHearts from '../cards/9_of_hearts.svg';
import nineOfDiamonds from '../cards/9_of_diamonds.svg';
import nineOfClubs from '../cards/9_of_clubs.svg';
import tenOfSpades from '../cards/10_of_spades.svg';
import tenOfHearts from '../cards/10_of_hearts.svg';
import tenOfDiamonds from '../cards/10_of_diamonds.svg';
import tenOfClubs from '../cards/10_of_clubs.svg';
import jackOfSpades from '../cards/jack_of_spades.svg';
import jackOfHearts from '../cards/jack_of_hearts.svg';
import jackOfDiamonds from '../cards/jack_of_diamonds.svg';
import jackOfClubs from '../cards/jack_of_clubs.svg';
import queenOfSpades from '../cards/queen_of_spades.svg';
import queenOfHearts from '../cards/queen_of_hearts.svg';
import queenOfDiamonds from '../cards/queen_of_diamonds.svg';
import queenOfClubs from '../cards/queen_of_clubs.svg';
import kingOfSpades from '../cards/king_of_spades.svg';
import kingOfHearts from '../cards/king_of_hearts.svg';
import kingOfDiamonds from '../cards/king_of_diamonds.svg';
import kingOfClubs from '../cards/king_of_clubs.svg';
import redJoker from '../cards/red_joker.svg';
import blackJoker from '../cards/black_joker.svg';


const cards = [
  { id: 1, name: 'Ace of Spades', image: aceOfSpades, active: false },
  { id: 2, name: 'Ace of Hearts', image: aceOfHearts, active: false },
  { id: 3, name: 'Ace of Diamonds', image: aceOfDiamonds, active: false },
  { id: 4, name: 'Ace of Clubs', image: aceOfClubs, active: false },
  { id: 5, name: '2 of Spades', image: twoOfSpades, active: false },
  { id: 6, name: '2 of Hearts', image: twoOfHearts, active: false },
  { id: 7, name: '2 of Diamonds', image: twoOfDiamonds, active: false },
  { id: 8, name: '2 of Clubs', image: twoOfClubs, active: false },
  { id: 9, name: '3 of Spades', image: threeOfSpades, active: false },
  { id: 10, name: '3 of Hearts', image: threeOfHearts, active: false },
  { id: 11, name: '3 of Diamonds', image: threeOfDiamonds, active: false },
  { id: 12, name: '3 of Clubs', image: threeOfClubs, active: false },
  { id: 13, name: '4 of Spades', image: fourOfSpades, active: false },
  { id: 14, name: '4 of Hearts', image: fourOfHearts, active: false },
  { id: 15, name: '4 of Diamonds', image: fourOfDiamonds, active: false },
  { id: 16, name: '4 of Clubs', image: fourOfClubs, active: false },
  { id: 17, name: '5 of Spades', image: fiveOfSpades, active: false },
  { id: 18, name: '5 of Hearts', image: fiveOfHearts, active: false },
  { id: 19, name: '5 of Diamonds', image: fiveOfDiamonds, active: false },
  { id: 20, name: '5 of Clubs', image: fiveOfClubs, active: false },
  { id: 21, name: '6 of Spades', image: sixOfSpades, active: false },
  { id: 22, name: '6 of Hearts', image: sixOfHearts, active: false },
  { id: 23, name: '6 of Diamonds', image: sixOfDiamonds, active: false },
  { id: 24, name: '6 of Clubs', image: sixOfClubs, active: false },
  { id: 25, name: '7 of Spades', image: sevenOfSpades, active: false },
  { id: 26, name: '7 of Hearts', image: sevenOfHearts, active: false },
  { id: 27, name: '7 of Diamonds', image: sevenOfDiamonds, active: false },
  { id: 28, name: '7 of Clubs', image: sevenOfClubs, active: false },
  { id: 29, name: '8 of Spades', image: eightOfSpades, active: false },
  { id: 30, name: '8 of Hearts', image: eightOfHearts, active: false },
  { id: 31, name: '8 of Diamonds', image: eightOfDiamonds, active: false },
  { id: 32, name: '8 of Clubs', image: eightOfClubs, active: false },
  { id: 33, name: '9 of Spades', image: nineOfSpades, active: false },
  { id: 34, name: '9 of Hearts', image: nineOfHearts, active: false },
  { id: 35, name: '9 of Diamonds', image: nineOfDiamonds, active: false },
  { id: 36, name: '9 of Clubs', image: nineOfClubs, active: false },
  { id: 37, name: '10 of Spades', image: tenOfSpades, active: false },
  { id: 38, name: '10 of Hearts', image: tenOfHearts, active: false },
  { id: 39, name: '10 of Diamonds', image: tenOfDiamonds, active: false },
  { id: 40, name: '10 of Clubs', image: tenOfClubs, active: false },
  { id: 41, name: 'Jack of Spades', image: jackOfSpades, active: false },
  { id: 42, name: 'Jack of Hearts', image: jackOfHearts, active: false },
  { id: 43, name: 'Jack of Diamonds', image: jackOfDiamonds, active: false },
  { id: 44, name: 'Jack of Clubs', image: jackOfClubs, active: false },
  { id: 45, name: 'Queen of Spades', image: queenOfSpades, active: false },
  { id: 46, name: 'Queen of Hearts', image: queenOfHearts, active: false },
  { id: 47, name: 'Queen of Diamonds', image: queenOfDiamonds, active: false },
  { id: 48, name: 'Queen of Clubs', image: queenOfClubs, active: false },
  { id: 49, name: 'King of Spades', image: kingOfSpades, active: false },
  { id: 50, name: 'King of Hearts', image: kingOfHearts, active: false },
  { id: 51, name: 'King of Diamonds', image: kingOfDiamonds, active: false },
  { id: 52, name: 'King of Clubs', image: kingOfClubs, active: false },
  { id: 53, name: 'Red Joker', image: redJoker, active: false },
  { id: 54, name: 'Black Joker', image: blackJoker, active: false },
];


export function shuffleArray(array) {
    // Fisher-Yates shuffle algorithm
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

export default cards;
// function arrayToUse() {
//     const newArray = [];
//     const shuffledCards = shuffleArray(cards).slice(0, 6); // Picked first 6 cards from shuffled array
//     const chosenCards2 = shuffleArray(shuffledCards);
//     const chosenCards3 = shuffleArray(chosenCards2);

//     newArray.push(...chosenCards3, ...chosenCards2);
//     return newArray;
// }
// const newArray = arrayToUse();



// const Cards = () => {
//   return (
//     <div className="grid grid-flow-col grid-cols-4 grid-rows-3 gap-1">
//       {newArray.forEach((card) => (
//         <div key={card.id} className="bg-primary scale-75">
//           <svg className="w-full h-full" viewBox="0 0 100 150">
//             <image href={card.image} width="100" height="150" />
//           </svg>
//         </div>
//       ))}
//     </div>
//   );
// }
// export default Cards;

