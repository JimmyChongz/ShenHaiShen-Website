import { ChevronDownIcon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    Heading,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Progress,
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Text,
    Th,
    Thead,
    Tr,
    useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { NavBar } from "../components/NavBar";
import {
    shopCarFoodState,
    shopCarItemStackState,
    shopCarPriceState,
    shopCarPriceTotalState,
    shopCarStapleState,
} from "../Store/MainStore";

export const CheckoutPage = () => {
    const toast = useToast()
    const [step, setStep] = useState<number>(0);
    const navigate = useNavigate();
    const [Checkcompleted, setCheckCompleted] = useState<string>('確認訂單');
    const [ShopCarStaple, setShopCarStaple] = useRecoilState(shopCarStapleState);
    const [ShopCarPriceTotal, setShopCarPriceTotal] = useRecoilState(shopCarPriceTotalState);
    const [shopCarItems, setShopCarItems] = useRecoilState(shopCarItemStackState);
    const [Payment, setPayment] = useState<string>("付款方式");
    return (
        <>
            <NavBar />
            <Progress value={step} />
            <Box bgImage="https://topeat.tw/images/bg-bottom.webp" bgRepeat="cover" h='750'>
                {Checkcompleted == '確認訂單' && (
                    <TableContainer>
                        <Table variant="simple">
                            <TableCaption>
                            <Button
                                ml="auto"
                                mr={9}
                                my={2}
                                bg="tomato"
                                textColor="white"
                                onClick={() => {
                                    setShopCarFood('')
                                    setShopCarPriceTotal(0)
                                    toast({
                                        title: " 已清除購物車",
                                        description:
                                            "We've del your meals to shop car.",
                                        status: "success",
                                        duration: 9000,
                                        isClosable: true,
                                    });
                                    
                                }}
                            >
                                清除購物車
                            </Button>
                                <Button
                                    colorScheme="blue"
                                    onClick={() => {
                                        setCheckCompleted('確認付款');
                                        setStep(33);
                                    }}
                                >
                                    確認訂單
                                </Button>
                            </TableCaption>
                            <Thead>
                                <Tr>
                                    <Th>
                                        <Text fontSize="2xl">品項</Text>
                                    </Th>
                                    <Th>
                                        <Text fontSize="2xl">金額</Text>
                                    </Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <>
                                    {true &&
                                        shopCarItems.map((shopCarItem) => {
                                            return (
                                                <Tr>
                                                    <Th>
                                                        <Text fontSize="2xl">{shopCarItem.food}</Text>
                                                    </Th>
                                                    <Th>
                                                        <Text fontSize="2xl">NT$: {shopCarItem.price} 元</Text>
                                                    </Th>
                                                </Tr>
                                            )
                                        })
                                    }
                                    <Tr>
                                        <Th>
                                            <Text></Text>
                                        </Th>
                                        <Th>
                                            <Text fontSize="2xl">總金額：NT${ShopCarPriceTotal}</Text>
                                        </Th>
                                    </Tr>
                                </>
                            </Tbody>
                        </Table>
                    </TableContainer>
                )}
                {Checkcompleted == '確認付款' && (
                    <div>
                        <Menu>
                            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                                {Payment}
                            </MenuButton>
                            <MenuList>
                                <MenuItem
                                    onClick={() => {
                                        setPayment("現金付款");
                                    }}
                                >
                                    現金付款
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        setPayment("載具付款");
                                    }}
                                >
                                    載具付款
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        setPayment("信用卡付款");
                                    }}
                                >
                                    信用卡付款
                                </MenuItem>
                            </MenuList>
                        </Menu>
                        {Payment == "現金付款" && (
                            <div>
                                <Text>現金支付:{ShopCarPriceTotal}元</Text>
                            </div>
                        )}

                        {Payment == "載具付款" && (
                            <div>
                                <Text>載具支付:{ShopCarPriceTotal}元</Text>
                            </div>
                        )}

                        {Payment == "信用卡付款" && (
                            <div>
                                <Text>信用卡支付:{ShopCarPriceTotal}元</Text>
                            </div>
                        )}
                        <br />
                        <Button
                            className=" left-2 "
                            colorScheme="blue"
                            onClick={() => {
                                setCheckCompleted('確認訂單');
                                setStep(0);
                            }}
                        >
                            上一頁
                        </Button>
                        {Payment != '付款方式' &&
                            <Button
                                className=" left-4 "
                                colorScheme="blue"
                                onClick={() => {
                                    setCheckCompleted('完成訂單');
                                    setStep(66);
                                }}
                            >
                                確認付款
                            </Button>
                        }
                    </div>
                )}

                {Checkcompleted == '完成訂單' && (
                    <div>
                        <Text fontSize="4xl">完成訂單</Text>
                        {/* <div><MealList Order={Orderlist} /></div>暫時這樣用 */}
                        <div>
                            <Text fontSize="2xl">
                                {Payment}:{ShopCarPriceTotal}
                            </Text>
                        </div>

                        <br />
                        <Button
                            className=" left-2 "
                            colorScheme="blue"
                            onClick={() => {
                                setCheckCompleted('確認付款')
                                setStep(33);
                            }}
                        >
                            上一頁
                        </Button>
                        <Button
                            className=" left-4 "
                            colorScheme="blue"
                            onClick={() => {
                                navigate("/History");
                            }}
                        >
                            確認完成並前往歷史訂單
                        </Button>
                    </div>
                )}
            </Box>
        </>
    );
};

