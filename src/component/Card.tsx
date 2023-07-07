import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import styled from "@emotion/styled";
import { cardId, cardNum } from "@/card";

export default function Card() {
  const [isRight, setIsRight] = useState(false);

  const [deck, setDeck] = useState<string[]>([]);

  useEffect(() => {
    const newDeck: string[] = [];
    cardId.forEach((id) => {
      cardNum.forEach((num) => {
        newDeck.push(id + num);
      });
    });
    setDeck(newDeck);
  }, []);

  const openCardHandler = (card: string) => {
    setIsRight((prev) => !prev);
    console.log(card);
  };

  const suffleDeck = () => {
    const mix = deck.sort(() => {
      return Math.random() - 0.5;
    });
    setDeck(mix);
  };

  console.log(deck);

  return (
    <CardContainer>
      <Nav suffleDeck={suffleDeck} />
      {deck.map((card) => (
        <CardImg
          onClick={() => openCardHandler(card)}
          key={card}
          src={
            isRight
              ? `/assets/image/card/${card}.png`
              : "/assets/image/card/back.png"
          }
        />
      ))}
    </CardContainer>
  );
}

const CardImg = styled.img`
  width: 68px;
  height: 110px;
  margin: 10px;
`;

const CardContainer = styled.div`
  margin-top: 30px;
  width: 900px;
  height: 1200px;
  margin-left: auto;
  margin-right: auto;
`;
