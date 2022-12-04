import { Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Box, Heading } from "@chakra-ui/react";
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
            <div className=" text-lg " style={{ backgroundImage: `url(https://topeat.tw/images/bg-bottom.webp)`, height: 700, backgroundSize: 'cover' }} >
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
                                            {shopCarItem.food}<div className=" text-red-600">NT$: {shopCarItem.price}  元</div>
                                            <br />
                                        </>
                                    )
                                })
                            }
                            <Heading size='lg' className=" text-red-600">總金額：NT${ShopCarPriceTotal}</Heading>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>

            </div>
            <Footer />
        </>
    )
}

