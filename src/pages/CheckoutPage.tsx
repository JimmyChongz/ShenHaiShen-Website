import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList, Progress, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../components/NavBar"
import { MealList } from "../components/Table/Table";

interface ListProps {
    food: string;
    price: number;
}


export const CheckoutPage = () => {
    const [step, setStep] = useState<number>(0);
    const [money, setmoney] = useState<number>(0);
    const navigate = useNavigate();
    const [Chackcompleted, setChackCompleted] = useState<boolean>(true);
    const [Paycompleted, setPayCompleted] = useState<boolean>(false);
    const [Outcompleted, setOutCompleted] = useState<boolean>(false);
    const Orderlist: ListProps[] = [
        { food: '土魠魚羹-黃麵', price: 80 },
        { food: '土魠魚羹-米粉', price: 80 },
        { food: '土魠魚羹-飯', price: 80 },
        { food: '土魠魚羹', price: 70 },
        { food: '燒肉羹-黃麵', price: 80 },
    ]


    return (
        <>
            <div style={{ backgroundImage: `url(https://topeat.tw/images/bg-bottom.webp)`, height: 700, backgroundSize: 'cover' }}>
                <NavBar />
                <Progress value={step} />


                {Chackcompleted && <div>
                    <Text fontSize='4xl'>確認訂單</Text>
                    <div><MealList Order={Orderlist} /></div>{/* 暫時這樣用 */}

                    <Button colorScheme='blue' onClick={()=>{
                        setChackCompleted(false);
                        setPayCompleted(true);
                        setStep(33);
                    }}>確認完成</Button>

                </div>}


                {Paycompleted && <div>
                    <Text fontSize='4xl'>付款方式</Text>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                            付款方式
                        </MenuButton>
                        <MenuList>
                            <MenuItem>貨到付款</MenuItem>
                            <MenuItem>載具付款</MenuItem>
                            <MenuItem>信用卡付款</MenuItem>
                        </MenuList>
                    </Menu>
                    <br />
                    <Button colorScheme='blue' onClick={()=>{
                        setChackCompleted(true);
                        setPayCompleted(false);
                        setStep(0);
                    }}>上一頁</Button>
                    <br />
                    <Button colorScheme='blue' onClick={()=>{
                        setPayCompleted(false);
                        setOutCompleted(true);
                        setStep(66);
                    }}>確認完成</Button>
                    
                </div>}

                {Outcompleted && <div>
                    <Text fontSize='4xl'>完成訂單</Text>

                    <br />
                    <Button colorScheme='blue' onClick={()=>{
                        setOutCompleted(false);
                        setPayCompleted(true);
                        setStep(33);
                    }}>上一頁</Button>
                    <br />
                    <Button colorScheme='blue' onClick={()=>{
                        navigate('/History')
                    }}>確認完成</Button>
                </div>}

            </div>

        </>
    )
}