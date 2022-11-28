import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList, Progress, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { useState } from "react";
import { NavBar } from "../components/NavBar"

interface OrderList {
    food: string;
    prize: number;
}


export const CheckoutPage = () => {
    const [step, setStep] = useState<number>(0);
    const [Chackcompleted, setChackCompleted] = useState<boolean>(true);
    const [Paycompleted, setPayCompleted] = useState<boolean>(false);
    const [Outcompleted, setOutCompleted] = useState<boolean>(false);
    return (
        <>
            <div style={{ backgroundImage: `url(https://topeat.tw/images/bg-bottom.webp)`, height: 750, backgroundSize: 'cover' }}>
                <NavBar />
                <Progress value={step} />


                {Chackcompleted && <div>
                    <Text fontSize='4xl'>確認訂單</Text>
                    
                </div>}


                {Paycompleted && <div>
                    <Text>付款方式</Text>
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
                </div>}

                {Outcompleted && <div>
                    <Text>完成訂單</Text>
                </div>}

            </div>

        </>
    )
}