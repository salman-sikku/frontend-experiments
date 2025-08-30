import React, { useEffect, useState } from "react";

function App() {
  const cardImages = [
    { src: "🐱", matched: false },
    { src: "🐶", matched: false },
    { src: "🍎", matched: false },
    { src: "🍌", matched: false },
    { src: "⚽", matched: false },
    { src: "🚗", matched: false },
    { src: "🎵", matched: false },
    { src: "🌟", matched: false },
  ];

  const [cards, setCards] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [turns, setTurns] = useState(0);

  const shuffleCards = () => {
    const shuffled = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffled);
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(0);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);

      if (choiceOne.src === choiceTwo.src) {
        setCards((pre) =>
          pre.map((c) =>
            c.src === choiceOne.src ? { ...c, matched: true } : c
          )
        );
        restart()
      } else {
        setTimeout(() => {
          restart();
        }, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  const restart = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prev) => prev + 1);
    setDisabled(false);
  };

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
        <h1 className="text-4xl font-bold mb-6">🎮 Memory Game</h1>
        <button
          onClick={shuffleCards}
          className="mb-4 px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-700"
        >
          New Game
        </button>

        <div className="grid grid-cols-4 gap-4">
          {cards.map((card) => {
            const flipped =
              card === choiceOne || card === choiceTwo || card.matched;

            return (
              <div
                key={card.id}
                onClick={() => (!disabled ? handleChoice(card) : null)}
              >
                <div
                  className={`w-full h-full flex items-center justify-center text-3xl p-5 cursor-pointer rounded-xl transition-all duration-300 ${
                    flipped ? "bg-white text-black" : "bg-gray-700"
                  }`}
                >
                  {flipped ? card.src : "❓"}
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-4">Turns: {turns}</p>
      </div>
    </>
  );
}

export default App;
