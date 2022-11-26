import { HamburgerIcon } from "@chakra-ui/icons";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Avatar, Box, Button, ChakraProvider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, ListItem, UnorderedList, Wrap, WrapItem } from "@chakra-ui/react";
import React, { useState } from 'react';

export const NavBar = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <div className="p-5 shadow-lg">
                <div className="flex justify-between gap-5">
                    <img className="h-12" src="data:image/png;base64,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" alt="DojoLogo" />
                    <div className="flex justify-start gap-5">
                        <div className="text-2xl text-center">訂餐系統</div>
                    </div>
                </div>
            </div>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={() => { }}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton onClick={() => { setOpen(false) }} />
                    <DrawerHeader>
                        <div className="text-3xl font-extrabold">
                            個人帳戶
                        </div>
                    </DrawerHeader>

                    <DrawerBody>
                        <Accordion>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box flex='1' textAlign='left'>
                                            設定
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>

                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box flex='1' textAlign='left'>
                                            Section 2 title
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={() => { setOpen(false) }}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue' onClick={() => { setOpen(false) }}>Logout</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
}