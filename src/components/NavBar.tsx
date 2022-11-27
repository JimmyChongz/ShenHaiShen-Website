import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, ChakraProvider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, ListItem, List, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
    const [isOpen, setOpen] = useState(false);
    const [isAlert, setAlert] = useState(false);
    const navigate = useNavigate();
    return (
        <>
            <div className="p-5 shadow-lg" style={{ backgroundImage: `url(https://topeat.tw/images/bg-header.webp)` }}>
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
                        <DrawerHeader backgroundColor='#E2D6C8'>
                            <div className="text-3xl font-extrabold">
                                個人帳戶
                            </div>
                        </DrawerHeader>

                        <DrawerBody backgroundColor='#E2D6C8'>
                            <List>
                                <ListItem className="text-2xl cursor-pointer rounded-lg px-6 py-3" bg='tomato' onClick={() => {
                                    navigate(`/history`)
                                }}>
                                    歷史訂單
                                </ListItem>
                            </List>
                        </DrawerBody>

                        <DrawerFooter backgroundColor='#E2D6C8'>
                            <Box as='button' borderRadius='md' bg='tomato' color='white' px={4} h={10} onClick={() => {
                                setOpen(false)
                                setAlert(true)
                            }}>登出</Box>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
                <Modal isOpen={isAlert} onClose={() => { }}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>確定要登出嗎?</ModalHeader>
                        <h6 className="px-6">感謝你的使用，期待再次見到你！</h6>
                        <ModalCloseButton onClick={() => { setAlert(false) }} />
                        <ModalBody>

                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='gray' mr={3} onClick={() => {
                                setAlert(false)
                            }}>
                                取消
                            </Button>
                            <Box as='button' borderRadius='md' bg='tomato' color='white' px={4} h={10} onClick={() => { setAlert(false) }} >登出</Box>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </ChakraProvider>
        </>
    );
}