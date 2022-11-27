import { HamburgerIcon } from "@chakra-ui/icons";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Avatar, Box, Button, ChakraProvider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Icon, Input, ListIcon, ListItem, UnorderedList, Wrap, WrapItem, List } from "@chakra-ui/react";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
    const [isOpen, setOpen] = useState(false);
    const navigate = useNavigate();
    return (
        <>
            <div className="p-5 shadow-lg">
                <div className="flex justify-between">
                    <Button onClick={() => { setOpen(true) }}><HamburgerIcon /></Button>
                    <img className="h-12 rounded cursor-pointer" onClick={() => {
                        navigate(`/`)
                    }} src="https://topeat.tw/images/logo.webp" alt="Logo" />
                    <Box as='button' borderRadius='md' bg='tomato' color='white' px={4} h={10} onClick={() => { }}>
                        結帳
                    </Box>
                </div>
            </div>
            <ChakraProvider>
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
                            <List>
                                <ListItem className="text-2xl cursor-pointer rounded-lg px-6 py-3" bg='tomato' onClick={() => {
                                    navigate(`/history`)
                                }}>
                                    歷史訂單
                                </ListItem>
                            </List>
                        </DrawerBody>

                        <DrawerFooter>
                            <Button variant='outline' mr={3} onClick={() => { setOpen(false) }}>
                                Cancel
                            </Button>
                            <Button colorScheme='blue' onClick={() => { setOpen(false) }}>Logout</Button>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </ChakraProvider>
        </>
    );
}