import { Card, SimpleGrid } from "@chakra-ui/react";
import { TableItem } from "./TableItem";

interface tableProps {
  food: string;
  price: number;
  src: string;
  message: string
}

interface ListProps {
  Order: tableProps[];
}

export const MealList = ({ Order }: ListProps) => {
  return (
    <>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      >
        {Order.map((order, i) => {
          return <TableItem food={order.food} price={order.price} src={order.src} message={order.message} />;
        })}
      </SimpleGrid>
    </>
  );
};
