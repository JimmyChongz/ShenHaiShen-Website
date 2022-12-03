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
                <NoticeBoard notices={shopCarItems} />
                <Heading size='lg'>總金額：NT${ShopCarPriceTotal}</Heading>
            </div>
            <Footer />
        </>
    )
}

