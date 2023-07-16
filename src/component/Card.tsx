import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import styled from "@emotion/styled";
import { cardId, cardNum } from "@/card";

interface arr {
  (id: string): void;
}
export default function Card() {
  const [isRight, setIsRight] = useState<boolean>(false);
  const [deck, setDeck] = useState<string[]>([]);
  const [openCard, setOpenCard] = useState<string[]>([]);
  const [selectedCard, setSelectedCard] = useState<string[]>([]);

  useEffect(() => {
    const newDeck: string[] = [];
    cardId.forEach((id) => {
      cardNum.forEach((num) => {
        newDeck.push(id + num);
      });
    });
    setDeck(newDeck);
  }, []);

  const openCardHandler: arr = (card) => {
    if (selectedCard.length >= 2) {
      return;
    }

    setSelectedCard((prev) => [...prev, card]);
  };

  useEffect(() => {
    if (selectedCard.length === 2) {
      const first = selectedCard[0];
      const second = selectedCard[1];

      if (first[first.length - 1] === second[second.length - 1]) {
        setOpenCard((prev) => [...prev, ...selectedCard]);
        setSelectedCard([]);
      } else {
        setTimeout(() => {
          setSelectedCard([]);
        }, 1000);
      }
    }
  }, [selectedCard]);

  const suffleDeck = (): void => {
    alert("같은 그림의 카드를 맞추세요!");
    const mix = deck.sort(() => {
      return Math.random() - 0.5;
    });
    setDeck(mix);
    setOpenCard([]);
    setSelectedCard([]);
    setIsRight(true);
    setTimeout(() => {
      setIsRight(false);
    }, 7000);
  };
  const resetDeck = (): void => {
    const mix = deck.sort(() => {
      return Math.random() - 0.5;
    });
    setDeck(mix);
    setOpenCard([]);
    setSelectedCard([]);
  };

  const hint = (): void => {
    setIsRight(true);
    setTimeout(() => {
      setIsRight(false);
    }, 5000);
  };
  return (
    <CardContainer>
      <Nav suffleDeck={suffleDeck} resetDeck={resetDeck} hint={hint} />
      {deck.map((card) =>
        openCard.includes(card) ? (
          <CardImg
            onClick={() => openCardHandler(card)}
            key={card}
            src={`https://jyh2610.github.io/cardgame/assets/image/card/${card}.png`}
          />
        ) : (
          <CardImg
            onClick={() => openCardHandler(card)}
            key={card}
            src={
              openCard.includes(card) || selectedCard.includes(card) || isRight
                ? `https://jyh2610.github.io/cardgame/assets/image/card/${card}.png`
                : "https://jyh2610.github.io/cardgame/assets/image/card/back.png"
            }
          />
        )
      )}
    </CardContainer>
  );
}

const CardImg = styled.img`
  width: 68px;
  height: 110px;
  margin: 10px;
  cursor: pointer;
`;

const CardContainer = styled.div`
  margin-top: 30px;
  width: 900px;
  height: 1200px;
  margin-left: auto;
  margin-right: auto;
`;
