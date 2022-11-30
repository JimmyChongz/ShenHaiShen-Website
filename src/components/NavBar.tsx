import { HamburgerIcon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    ChakraProvider,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    ListItem,
    List,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    ButtonGroup,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
    const [isOpen, setOpen] = useState(false);
    const [isAlert, setAlert] = useState(false);
    const navigate = useNavigate();
    return (
        <>
            <div
                className="p-5 shadow-lg"
                style={{
                    backgroundImage: 'url(https://topeat.tw/images/bg-header.webp)',
                }}
            >
                <div className="flex justify-between">
                    <Button
                        onClick={() => {
                            setOpen(true);
                        }}
                    >
                        <HamburgerIcon />
                    </Button>
                    <img
                        className="h-12 rounded cursor-pointer"
                        onClick={() => {
                            navigate(`/Home`);
                        }}
                        src="https://topeat.tw/images/logo.webp"
                        alt="Logo"
                    />
                    <Button
                        borderRadius="md"
                        bg="pink"
                        color="black"
                        px={4}
                        h={10}
                        onClick={() => {
                            navigate(`/Login`)
                        }}
                    >
                        登入
                    </Button>
                </div>
            </div>
            <ChakraProvider>
                <Drawer isOpen={isOpen} placement="left" onClose={() => { }}>
                    <DrawerOverlay />
                    <DrawerContent backgroundImage="https://topeat.tw/images/bg-bottom.webp">
                        <DrawerCloseButton
                            onClick={() => {
                                setOpen(false);
                            }}
                        />
                        <DrawerHeader>
                            <div className="text-3xl font-extrabold">個人帳戶</div>
                        </DrawerHeader>
                        <DrawerBody>
                            <List>
                                <ListItem
                                    className="text-2xl cursor-pointer rounded-lg px-6 py-3 "
                                    bg="pink"
                                    onClick={() => {
                                        navigate(`/home`);
                                    }}
                                >
                                    主頁
                                </ListItem>
                            </List>
                            <List>
                                <ListItem
                                    className="text-2xl cursor-pointer rounded-lg px-6 py-3"
                                    bg="pink"
                                    onClick={() => {
                                        navigate(`/menu`);
                                    }}
                                >
                                    立即下定
                                </ListItem>
                            </List>
                            <List>
                                <ListItem
                                    className="text-2xl cursor-pointer rounded-lg px-6 py-3"
                                    bg="pink"
                                    onClick={() => {
                                        navigate(`/history`);
                                    }}
                                >
                                    歷史訂單
                                </ListItem>
                            </List>
                        </DrawerBody>
                        <DrawerFooter>
                            <ButtonGroup variant="outline" spacing="6">
                                <Button
                                    borderRadius="md"
                                    color="black"
                                    px={4}
                                    h={10}
                                >取消</Button>
                                <Button
                                    bg='pink'
                                    borderRadius="md"
                                    color="black"
                                    px={4}
                                    h={10}
                                    onClick={() => {
                                        setOpen(false);
                                        setAlert(true);
                                    }}
                                >登出</Button>
                            </ButtonGroup>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
                <Modal isOpen={isAlert} onClose={() => { }}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>確定要登出嗎?</ModalHeader>
                        <ModalCloseButton
                            onClick={() => {
                                setAlert(false);
                            }}
                        />
                        <ModalBody>
                            <h6>感謝你的使用，期待再次見到你！</h6>
                        </ModalBody>

                        <ModalFooter>
                            <Button
                                colorScheme="gray"
                                mr={3}
                                onClick={() => {
                                    setAlert(false);
                                }}
                            >
                                取消
                            </Button>
                            <Box
                                as="button"
                                borderRadius="md"
                                bg="pink"
                                color="black"
                                px={4}
                                h={10}
                                onClick={() => {
                                    setAlert(false);
                                    navigate(`/Login`)
                                }}
                            >
                                登出
                            </Box>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </ChakraProvider>
        </>
    );
};
