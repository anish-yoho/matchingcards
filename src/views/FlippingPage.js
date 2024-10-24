import React, { useEffect, useState } from "react";
import Card from "./components/Card";

const cardData = [
  { id: 1, value: "🐶" },
  { id: 2, value: "🐱" },
  { id: 3, value: "🐭" },
  { id: 4, value: "🐹" },
  { id: 5, value: "🐰" },
  { id: 6, value: "🦊" },
  { id: 7, value: "🐻" },
  { id: 8, value: "🐼" },
  { id: 9, value: "🐶" },
  { id: 10, value: "🐱" },
  { id: 11, value: "🐭" },
  { id: 12, value: "🐹" },
  { id: 13, value: "🐰" },
  { id: 14, value: "🦊" },
  { id: 15, value: "🐻" },
  { id: 16, value: "🐼" },
];
const FlippingPage = () => {
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const [cards, setCards] = useState(shuffleArray(cardData));
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);

  const handleCardFlip = (cardId) => {
    if (flippedCards.length === 2) return;

    const flippedCard = cards.find((card) => card.id === cardId);

    if (flippedCards.includes(flippedCard)) return;

    setFlippedCards([...flippedCards, flippedCard]);

    if (flippedCards.length === 1) {
      const firstCard = flippedCards[0];
      setMoves(moves + 1);

      if (firstCard.value === flippedCard.value) {
        setMatches([...matches, firstCard.id, flippedCard.id]);
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    }
  };
  const winner = matches.length === cardData.length;
  return (
    <div className="game-theme">
      <div className="winner-message">
        {winner && (
          <>
            <p>Congratulations you won</p>
          </>
        )}
        <p>Total Moves:{moves}</p>
      </div>

      <div className="cards">
        {cards &&
          cards.map((card) => {
            return (
              <Card
                key={card.id}
                id={card.id}
                value={card.value}
                isflipped={
                  flippedCards.includes(card) || matches.includes(card.id)
                }
                onClick={() => handleCardFlip(card.id)}
              />
            );
          })}
      </div>
    </div>
  );
};

export default FlippingPage;
