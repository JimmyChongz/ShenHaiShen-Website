import { Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Box } from "@chakra-ui/react";
import { NoticeBoardItem } from "./NoticeBoardItem";
interface noticeMessage {
    title: string,
    price: number
}
interface NoticeBoardProps {
    notices: noticeMessage[]
}
export const NoticeBoard = ({ notices }: NoticeBoardProps) => {
    return (
        <Accordion>
            {
                notices.map((notice, index) => {
                    return (
                        <NoticeBoardItem title={notice.title} price={notice.price} />
                    )
                })
            }
        </Accordion>
    )
}

