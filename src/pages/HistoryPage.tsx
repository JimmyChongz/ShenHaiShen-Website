import { Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Box } from "@chakra-ui/react";
import React from "react";
import { useRecoilState } from "recoil";
import { Footer } from "../components/footer";
import { NavBar } from "../components/NavBar";
import { NoticeBoard } from "../components/NoticeBoard/NoticeBoard";
import { shopCarStapleState, shopCarPriceState, shopCarPriceTotalState, shopCarFoodState } from "../Store/MainStore";

interface noticeMessage {
    title: string,
    price: number
}

export const HistoryPage = () => {

    const [ShopCarStaple, setShopCarStaple] = useRecoilState(shopCarStapleState);
    const [ShopCarFood, setShopCarFood] = useRecoilState(shopCarFoodState);
    const [ShopCarPriceTotal, setShopCarPriceTotal] = useRecoilState(shopCarPriceTotalState);
    const notices: noticeMessage[] = [
        { title: ShopCarFood, price: ShopCarPriceTotal },
    ]


    return (
        <>
            <div className=" text-lg " style={{ backgroundImage: `url(https://topeat.tw/images/bg-bottom.webp)`, height: 700, backgroundSize: 'cover' }} >
                <div><NavBar /></div>
                <NoticeBoard notices={notices} />
            </div>
            <Footer />
        </>
    )
}

