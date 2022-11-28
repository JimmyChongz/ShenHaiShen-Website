import { Tabs, TabList, Tab, TabPanels, TabPanel, Button } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { MealList } from "../components/Table/Table"

interface ListProps {
    food: string;
    price: number;
}

export const MenuPage = () => {
    const nevigate = useNavigate();
    const OrderGun: ListProps[] = [
        { food: '土魠魚羹-黃麵', price: 80 },
        { food: '土魠魚羹-米粉', price: 80 },
        { food: '土魠魚羹-飯', price: 80 },
        { food: '土魠魚羹', price: 70 },
        { food: '燒肉羹-黃麵', price: 80 },
        { food: '燒肉羹-米粉', price: 80 },
        { food: '燒肉羹-飯', price: 80 },
        { food: '燒肉羹', price: 70 },
        { food: '魷魚羹-黃麵', price: 80 },
        { food: '魷魚羹-米粉', price: 80 },
        { food: '魷魚羹-飯', price: 80 },
        { food: '魷魚羹', price: 70 },
    ]
    const OrderCurry: ListProps[] = [
        { food: '咖哩飯', price: 60 },
        { food: '咖哩豬排飯', price: 80 },
        { food: '咖哩雞排飯', price: 70 },
        { food: '咖哩牛排飯', price: 100 },
        { food: '咖哩燒肉飯', price: 80 },
        { food: '咖哩土魠魚', price: 80 },
        
    ]
    const OrderOther: ListProps[] = [
        { food: '香酥魚片', price: 70 },
        { food: '咖哩豬排', price: 40 },
        { food: '特製滷肉飯', price: 40 },
        { food: '滷蛋', price: 10 },
        { food: '特製乾麵', price: 40 },
        { food: '米粉', price: 10 },
        { food: '漁村炒飯', price: 60 },
    ]
    return (
        <>

            <div style={{ backgroundImage: `url(https://topeat.tw/images/bg-bottom.webp)`, backgroundSize: 'cover' }}>
                <NavBar />
                <Tabs variant='enclosed'>
                    <TabList>
                        <Tab>焿類</Tab>
                        <Tab>咖哩系列</Tab>
                        <Tab>其他</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <div><MealList Order={OrderGun} /></div>
                        </TabPanel>
                        <TabPanel>
                            <div><MealList Order={OrderCurry} /></div>
                        </TabPanel>
                        <TabPanel>
                            <div><MealList Order={OrderOther} /></div>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
                <Button colorScheme='blue' onClick={() => {
                    nevigate('/chackout')
                }}>結帳選單</Button>
            </div>
        </>
    )
}