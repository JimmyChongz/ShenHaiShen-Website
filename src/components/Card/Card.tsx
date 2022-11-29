import { ArrowForwardIcon } from "@chakra-ui/icons";
import { SimpleGrid, Card } from "@chakra-ui/react";
import { CardsContent } from "./CardContent";

interface cardProps {
  title: string;
  message: string;
  src: string;
}

interface cardsProps {
  cards: cardProps[];
}

export const Cards = ({ cards }: cardsProps) => {
  const bgc = "#E2D6C8";
  return (
    <>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      >
        {cards.map((card) => {
          return (
            <>
              <Card backgroundColor={bgc}>
                <CardsContent
                  title={card.title}
                  message={card.message}
                  src={card.src}
                ></CardsContent>
              </Card>
            </>
          );
        })}
      </SimpleGrid>
    </>
  );
};
