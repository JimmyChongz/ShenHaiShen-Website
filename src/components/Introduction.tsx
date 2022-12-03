import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Card, Box, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Cards } from "./Card/Card";

interface cardProps {
  title: string;
  message: string;
  src: string;
}

export const Introduction = () => {
  const cardsContent: cardProps[] = [
    {
      title: "[遠洋土魠魚]",
      message: "遠洋捕獲至生產切割，全程一路機械冷凍處理、保證新鮮！",
      src: "https://topeat.tw/images/img-seafood02.webp",
    },
    {
      title: "[北海道赤魷]",
      message: "真‧北海道赤魷，光從顏色及脆度即可判斷。",
      src: "https://topeat.tw/images/img-seafood03.webp",
    },
    {
      title: "[浮水虱目魚]",
      message: "純手工製作、口味獨特！做湯或羹都好吃！",
      src: "https://topeat.tw/images/img-seafood04.webp",
    },
    {
      title: "[特製排骨酥]",
      message: "採用CAS認證菜豬之小排丁調味製作而成！風味極佳！",
      src: "https://topeat.tw/images/img-seafood05.webp",
    },
    {
      title: "[鐵路排骨肉]",
      message: "採用CAS認證溫體豬不帶骨，斷金切片，醃製獨家懷舊排骨醬料！",
      src: "https://topeat.tw/images/img-seafood06.webp",
    },
    {
      title: "[日式豬排肉]",
      message:
        "採用CAS認證溫體豬不帶骨，斷金切片，薄上酥炸麵包粉，醃製獨家日式風味配料，是咖哩飯的好朋友！",
      src: "https://topeat.tw/images/img-seafood07.webp",
    },
    {
      title: "[黃金雞腿]",
      message: "採用國內卜蜂T6雞腿話劃兩刀處理，全程拔毛、去油、剪皮一貫到位！",
      src: "https://topeat.tw/images/img-seafood08.webp",
    },
    {
      title: "[紅燒豬肉條]",
      message: "採用CAS認證溫體豬不帶骨，斷金切片，醃製獨家紅燒風味醬料！",
      src: "https://topeat.tw/images/img-seafood09.webp",
    },
  ];
  return (
    <>
      <Box
        bgImage="https://topeat.tw/images/bg-bottom.webp"
        bgRepeat="repeat"
        bgPosition="center"
        bgSize='contain'
        className="pt-16 pb-4 pr-12 pl-12"
      >
        <div className="text-4xl text-center pb-16">嚴選食材，吃得安心</div>
            <Cards cards={cardsContent}></Cards>
      </Box>
    </>
  );
};
