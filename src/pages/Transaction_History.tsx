import { Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Box } from "@chakra-ui/react";
import React from "react";
export const Transaction_History = () => {

    return (
        <>
            <Accordion>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                                Transaction1
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        hello bro
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                                Transaction2
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Transaction2
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </>
    )



}

