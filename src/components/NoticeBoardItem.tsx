import { AccordionItem, AccordionButton, AccordionIcon, AccordionPanel,Box } from "@chakra-ui/react"


interface NoticeBoardProps{
    title:string
    message:string
    price: number
}
export const NoticeBoardItem = ({message,title,price}:NoticeBoardProps) =>{
    return(
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex='1' textAlign='left'>
                {title}<span className='text-red-300'>合計:{price}元</span>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {message}
          </AccordionPanel>
        </AccordionItem>
    )
}