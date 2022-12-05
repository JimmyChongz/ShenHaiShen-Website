import { Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useRecoilState } from "recoil";
import { Footer } from "../components/footer";
import { NavBar } from "../components/NavBar";
import { NoticeBoard } from "../components/NoticeBoard/NoticeBoard";
import { shopCarStapleState, shopCarPriceTotalState, shopCarItemStackState } from "../Store/MainStore";

export const HistoryPage = () => {
    const [ShopCarPriceTotal, setShopCarPriceTotal] = useRecoilState(shopCarPriceTotalState);
    const [shopCarItems, setShopCarItems] = useRecoilState(shopCarItemStackState);

    return (
        <>
            <Box bgImage='https://topeat.tw/images/bg-bottom.webp' >
                <div><NavBar /></div>
                <Accordion>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                    訂單
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            {
                                shopCarItems.map((shopCarItem) => {
                                    return (
                                        <>
                                            <Text fontSize='2xl'>{shopCarItem.food}</Text>
                                            <Text fontSize='2xl' color='red.400'>NT$: {shopCarItem.price}  元</Text>
                                            <br />
                                        </>
                                    )
                                })
                            }
                            <Heading size='lg' color='red.500'>總金額：NT${ShopCarPriceTotal}</Heading>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>

            </Box>
            <Footer />
        </>
    )
}

