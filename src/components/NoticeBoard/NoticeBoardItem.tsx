import { AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Box } from "@chakra-ui/react"


interface NoticeBoardProps {
  title: string
  price: number
}
export const NoticeBoardItem = ({ title, price }: NoticeBoardProps) => {
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
        <span className='text-black'>合計:{price}元</span>
      </AccordionPanel>
    </AccordionItem>
  )
}