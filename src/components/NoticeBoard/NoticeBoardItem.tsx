import { AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Box, Heading } from "@chakra-ui/react"
import { useRecoilState } from "recoil";
import { shopCarPriceTotalState } from "../../Store/MainStore";


interface NoticeBoardProps {
  title: string
  price: number
}
export const NoticeBoardItem = ({ title, price }: NoticeBoardProps) => {
  const [ShopCarPriceTotal, setShopCarPriceTotal] = useRecoilState(shopCarPriceTotalState);
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex='1' textAlign='left'>
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <span className='text-black'>NT:{price}元</span>
      </AccordionPanel>
    </AccordionItem>
  )
}