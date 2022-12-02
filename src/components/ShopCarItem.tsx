import { Tr, Th, Text } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import {
  shopCarFoodState,
  shopCarPriceState,
  shopCarStapleState,

} from "../Store/MainStore";

interface shopCarItemProps {
  food: string;
  staple: string;
  price: number;
}

export const ShopCarItem = ({ food, staple, price }: shopCarItemProps) => {
  const [ShopCarFood, setShopCarFood] = useRecoilState(shopCarFoodState);
  const [ShopCarStaple, setShopCarStaple] = useRecoilState(shopCarStapleState);
  const [ShopCarPrice, setShopCarPrice] = useRecoilState(shopCarPriceState);

  return (
    <>
      <Tr>
        <Th>
          <Text fontSize="xl">{ShopCarFood}</Text>
        </Th>
        <Th>
          <Text fontSize="xl">{ShopCarStaple}</Text>
        </Th>
        <Th>
          <Text fontSize="xl">{ShopCarPrice}</Text>
        </Th>
      </Tr>
    </>
  );
};
