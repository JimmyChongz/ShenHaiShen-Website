import { Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Box } from "@chakra-ui/react";
import React from "react";
import { NavBar } from "../components/NavBar";
import { NoticeBoard } from "../components/NoticeBoard";

interface noticeMessage{
    title:string
    message:string
    price:number
  }

export const Transaction_History = () => {
    const notices:noticeMessage[]=[
        {title:'訂單 1',message:'土魠魚羹-黃麵,土魠魚羹-米粉,咖哩豬排飯,滷蛋',price:250},
        {title:'訂單 2',message:'燒肉羹-飯,咖哩燒肉飯,香酥魚片',price:220},
        {title:'訂單 3',message:'魷魚羹-黃麵,咖哩土魠魚,特製滷肉飯',price:200},
        {title:'訂單 4',message:'土魠魚羹-黃麵,燒肉羹-黃麵,魷魚羹-黃麵,滷蛋',price:250},
        {title:'訂單 5',message:'土魠魚羹-飯,燒肉羹-飯,魷魚羹-飯 ',price:250}
      ]


    return (
        <>
        <div><NavBar /></div>
        <NoticeBoard notices={notices}/>
        </>
    )
}

