import { Th, Text } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { shopCarItemStackState } from "../Store/MainStore";


export const Test = () => {
    const [shopCarItems, setShopCarItems] = useRecoilState(shopCarItemStackState);
    return (
        <>
            {
                shopCarItems.map((shopCarItem, index) => {
                    <Text fontSize="2xl">{shopCarItem.food + shopCarItem.price}</Text>
                })
            }
        </>
    )
}