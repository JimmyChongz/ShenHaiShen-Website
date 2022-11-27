import { Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Box } from "@chakra-ui/react";
import { NoticeBoardItem } from "./NoticeBoardItem";
interface noticeMessage {
    title: string,
    message: string
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
                        <NoticeBoardItem title={notice.title} message={notice.message} price={notice.price} />
                    )
                })

            }
        </Accordion>
    )
}

