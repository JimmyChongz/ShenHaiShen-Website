import { ChevronDownIcon } from "@chakra-ui/icons";
import {
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Button,
    Heading,
    Box,
    Card,
    CardBody,
    CardFooter,
    Stack,
    Image,
    Text,
    useToast,
    SimpleGrid,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RecoilRoot, useRecoilState } from "recoil";
import { Footer } from "../components/footer";
import { NavBar } from "../components/NavBar";
import { Staple } from "../components/Staple";
import { shopCarCountState, shopCarFoodState, shopCarItemStackState, shopCarPriceState, shopCarPriceTotalState, shopCarStapleState } from "../Store/MainStore";

interface ListProps {
    food: string;
    price: number;
    src: string;
    message: string;
}

export const MenuPage = () => {
    const OrderGun: ListProps[] = [
        {
            food: "土魠魚羹",
            price: 70,
            src: "https://topeat.tw/images/product01.webp",
            message:
                "【正港】台灣小吃，全台唯一採急速冷凍機械切片處理，打破傳統人工手切，保有魚貨的鮮甜口感，超越一般魚羹店的軟澀，配上獨家特製羹底，值得您品嚐回味。(以上皆可加麵、加飯、加米粉)",
        },
        {
            food: "燒肉羹",
            price: 70,
            src: "https://topeat.tw/images/product03.webp",
            message:
                "採用北海道刻花赤魷搭配浮水赤肉條，配上獨家特製羹底，傳統懷舊的美味湧上心頭。(以上皆可加麵、加飯、加米粉)",
        },
        {
            food: "魷魚羹",
            price: 70,
            src: "https://topeat.tw/images/product02.webp",
            message:
                "獨家紅燒風味配料醃製腿丁，下鍋油炸1分鐘至金黃色，配上特製羹底，外酥內軟完全包覆肉汁的口感，是您一輩子也忘不了的好味道。(以上皆可加麵、加飯、加米粉)",
        },
    ];
    const OrderConvenient: ListProps[] = [
        {
            food: "咖哩蛋包飯",
            price: 60,
            src: "https://topeat.tw/images/product04.webp",
            message:
                "八分熟的法式滑嫩蛋包夾帶順口不辛辣的特調咖哩，搭配馬鈴薯、紅羅蔔及精選後腿肉，是我們招牌的人氣餐品喔!",
        },
        {
            food: "鐵路排骨飯",
            price: 80,
            src: "https://topeat.tw/images/product05.webp",
            message: "排骨風味意懷舊，米飯飄香樂童年，重現火車旅程中最期待的好滋味!",
        },
        {
            food: "黃金雞腿飯",
            price: 70,
            src: "https://topeat.tw/images/product06.webp",
            message:
                "嚴選國產T6雞腿，醃製深海深獨家配料，皮酥肉嫩、口感豐富!完美金黃上市!",
        },
        {
            food: "招牌燒肉飯",
            price: 100,
            src: "https://topeat.tw/images/product07.webp",
            message:
                "獨家紅燒風味配料醃製後腿丁，下鍋油炸1分鐘至金黃色，淋上豬油醬汁的香噴白米飯，一碗台灣早期樸實特色的米食上桌!",
        },
        {
            food: "米其林爌肉飯",
            price: 80,
            src: "https://topeat.tw/images/product17.webp",
            message:
                "使用頂級三層肉中斷處理，肥瘦適中、滷法精緻、口感飽滿。堪稱爌肉中的米其林，故取其名。",
        },
    ];
    const OrderDish: ListProps[] = [
        {
            food: "香酥豆腐",
            price: 60,
            src: "https://topeat.tw/images/product11.webp",
            message: "黃金般酥脆外皮包覆著高溫軟嫩的豆腐，小心!免得燙傷您的小嘴!",
        },
        {
            food: "香酥魚片",
            price: 60,
            src: "https://topeat.tw/images/product12.webp",
            message:
                "遠洋急速鮮切漁貨，薄上蘇粉油炸至金黃，酥脆的外皮緊緊的裹覆住魚肉的鮮甜;深海深鄭重推薦給喜愛精緻小吃的顧客。",
        },
        {
            food: "魷魚切盤",
            price: 60,
            src: "https://topeat.tw/images/product13.webp",
            message:
                "口感清脆的北海道赤魷，川燙1分鐘，配上特製薑母醬油，酸甜爽口不油膩。",
        },
        {
            food: "涼拌泡菜",
            price: 30,
            src: "https://topeat.tw/images/product15.webp",
            message:
                "鮮脆的高麗菜、小黃瓜、紅蘿蔔，搭配出酸中帶勁的好口味，是您開胃的絕佳選擇。",
        },
        {
            food: "皮蛋豆腐",
            price: 30,
            src: "https://topeat.tw/images/product16.webp",
            message:
                "清爽的嫩豆腐搭配皮蛋，淋上特製白醋及香油，爽口解膩是開胃小菜的一大選擇!",
        },
    ];
    const OrderOther: ListProps[] = [
        {
            food: "特製魯肉飯",
            price: 80,
            src: "https://topeat.tw/images/product08.webp",
            message: "鮮甜的香菇配上獨家魯肉，讓喜愛米食的您多了另一種選擇。",
        },
        {
            food: "虱目魚丸湯",
            price: 40,
            src: "https://topeat.tw/images/product14.webp",
            message: "獨家虱目魚丸條，搭配當季食蔬，清淡健康的好選擇!",
        },
        {
            food: "大排骨麵",
            price: 80,
            src: "https://topeat.tw/images/product09.webp",
            message:
                "獨家肉排料醃製的現宰里肌肉，口味沉香，加入彈牙黃麵，淋上鮮味高湯，口感十足回味再三!",
        },
        {
            food: "排骨酥麵",
            price: 80,
            src: "https://topeat.tw/images/product10.webp",
            message:
                "獨家的排骨酥搭配鮮濃的高湯及黃油麵，最適合熱愛重口味的美食老饕。",
        },
    ];
    const nevigate = useNavigate();
    const toast = useToast();
    const [orderCount, setOrderCount] = useRecoilState(shopCarCountState);
    const [shopCarFood, setShopCarFood] = useRecoilState(shopCarFoodState);
    const [shopCarpPrice, setShopCarPrice] = useRecoilState(shopCarPriceState);
    const [shopCarPriceTotal, setShopCarPriceTotal] = useRecoilState(shopCarPriceTotalState);
    const [shopCarItems, setShopCarItems] = useRecoilState(shopCarItemStackState);
    return (
        <>
            <RecoilRoot>
                <div
                    style={{
                        backgroundImage: `url(https://topeat.tw/images/bg-bottom.webp)`,
                    }}
                >
                    <NavBar />
                    <Tabs variant="enclosed">
                        <TabList left="14">
                            <Tab>
                                <Heading size="md">焿類</Heading>
                            </Tab>
                            <Tab>
                                <Heading size="md">便當系列</Heading>
                            </Tab>
                            <Tab>
                                <Heading size="md">小菜</Heading>
                            </Tab>
                            <Tab>
                                <Heading size="md">其他</Heading>
                            </Tab>
                            <Button
                                ml="auto"
                                mr={9}
                                my={2}
                                bg="tomato"
                                textColor="white"
                                onClick={() => {
                                    nevigate("/checkout");
                                }}
                            >
                                查看購物車({orderCount})
                            </Button>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <SimpleGrid
                                    spacing={4}
                                    templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
                                >
                                    {OrderGun.map((orderGun) => {
                                        return (
                                            <Card maxW="sm">
                                                <CardBody>
                                                    <Image src={orderGun.src} borderRadius="lg" />
                                                    <Stack mt="4" spacing="2">
                                                        <Heading size="md">{orderGun.food}</Heading>
                                                        <Text>{orderGun.message}</Text>
                                                        <Text color="blue.600" fontSize="2xl">
                                                            NT${orderGun.price}
                                                        </Text>
                                                    </Stack>
                                                </CardBody>
                                                <CardFooter>
                                                    <Box
                                                        as="button"
                                                        borderRadius="md"
                                                        bg="tomato"
                                                        color="white"
                                                        px={4}
                                                        h={10}
                                                        onClick={() => {
                                                            toast({
                                                                title: "已新增 " + orderGun.food + " 至購物車",
                                                                description:
                                                                    "We've added your meals to shop car.",
                                                                status: "success",
                                                                duration: 1000,
                                                                isClosable: true,
                                                            });
                                                            setOrderCount(orderCount + 1);
                                                            setShopCarFood(shopCarFood + orderGun.food + orderGun.price + "元 ,");
                                                            setShopCarPrice(orderGun.price);
                                                            setShopCarPriceTotal(shopCarPriceTotal + orderGun.price)
                                                            setShopCarItems([...shopCarItems, { food: orderGun.food, price: orderGun.price }])
                                                        }}
                                                    >
                                                        加入購物車
                                                    </Box>
                                                </CardFooter>
                                            </Card>
                                        );
                                    })}
                                </SimpleGrid>
                            </TabPanel>
                            <TabPanel>
                                <SimpleGrid
                                    spacing={4}
                                    templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
                                >
                                    {OrderConvenient.map((orderConvenient) => {
                                        return (
                                            <Card maxW="sm">
                                                <CardBody>
                                                    <Image src={orderConvenient.src} borderRadius="lg" />
                                                    <Stack mt="4" spacing="2">
                                                        <Heading size="md">{orderConvenient.food}</Heading>
                                                        <Text>{orderConvenient.message}</Text>
                                                        <Text color="blue.600" fontSize="2xl">
                                                            NT${orderConvenient.price}
                                                        </Text>
                                                    </Stack>
                                                </CardBody>
                                                <CardFooter>
                                                    <Box
                                                        as="button"
                                                        borderRadius="md"
                                                        bg="tomato"
                                                        color="white"
                                                        px={4}
                                                        h={10}
                                                        onClick={() => {
                                                            toast({
                                                                title: "已新增 " + orderConvenient.food + " 至購物車",
                                                                description:
                                                                    "We've added your meals to shop car.",
                                                                status: "success",
                                                                duration: 1000,
                                                                isClosable: true,
                                                            });
                                                            setOrderCount(orderCount + 1);
                                                            setShopCarFood(shopCarFood + orderConvenient.food + orderConvenient.price + "元 ,");
                                                            setShopCarPrice(orderConvenient.price);
                                                            setShopCarPriceTotal(shopCarPriceTotal + orderConvenient.price)
                                                        }}
                                                    >
                                                        加入購物車
                                                    </Box>
                                                </CardFooter>
                                            </Card>
                                        );
                                    })}
                                </SimpleGrid>
                            </TabPanel>
                            <TabPanel>
                                <SimpleGrid
                                    spacing={4}
                                    templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
                                >
                                    {OrderDish.map((orderDish) => {
                                        return (
                                            <Card maxW="sm">
                                                <CardBody>
                                                    <Image src={orderDish.src} borderRadius="lg" />
                                                    <Stack mt="4" spacing="2">
                                                        <Heading size="md">{orderDish.food}</Heading>
                                                        <Text>{orderDish.message}</Text>
                                                        <Text color="blue.600" fontSize="2xl">
                                                            NT${orderDish.price}
                                                        </Text>
                                                    </Stack>
                                                </CardBody>
                                                <CardFooter>
                                                    <Box
                                                        as="button"
                                                        borderRadius="md"
                                                        bg="tomato"
                                                        color="white"
                                                        px={4}
                                                        h={10}
                                                        onClick={() => {
                                                            toast({
                                                                title: "已新增 " + orderDish.food + " 至購物車",
                                                                description:
                                                                    "We've added your meals to shop car.",
                                                                status: "success",
                                                                duration: 1000,
                                                                isClosable: true,
                                                            });
                                                            setOrderCount(orderCount + 1);
                                                            setShopCarFood(shopCarFood + orderDish.food + orderDish.price + "元 ,");
                                                            setShopCarPrice(orderDish.price);
                                                            setShopCarPriceTotal(shopCarPriceTotal + orderDish.price)
                                                        }}
                                                    >
                                                        加入購物車
                                                    </Box>
                                                </CardFooter>
                                            </Card>
                                        );
                                    })}
                                </SimpleGrid>
                            </TabPanel>
                            <TabPanel>
                                <SimpleGrid
                                    spacing={4}
                                    templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
                                >
                                    {OrderOther.map((orderOther) => {
                                        return (
                                            <Card maxW="sm">
                                                <CardBody>
                                                    <Image src={orderOther.src} borderRadius="lg" />
                                                    <Stack mt="4" spacing="2">
                                                        <Heading size="md">{orderOther.food}</Heading>
                                                        <Text>{orderOther.message}</Text>
                                                        <Text color="blue.600" fontSize="2xl">
                                                            NT${orderOther.price}
                                                        </Text>
                                                    </Stack>
                                                </CardBody>
                                                <CardFooter>
                                                    <Box
                                                        as="button"
                                                        borderRadius="md"
                                                        bg="tomato"
                                                        color="white"
                                                        px={4}
                                                        h={10}
                                                        onClick={() => {
                                                            toast({
                                                                title: "已新增 " + orderOther.food + " 至購物車",
                                                                description:
                                                                    "We've added your meals to shop car.",
                                                                status: "success",
                                                                duration: 1000,
                                                                isClosable: true,
                                                            });
                                                            setOrderCount(orderCount + 1);
                                                            setShopCarFood(shopCarFood + orderOther.food + orderOther.price + "元 ,");
                                                            setShopCarPrice(orderOther.price);
                                                            setShopCarPriceTotal(shopCarPriceTotal + orderOther.price);
                                                        }}
                                                    >
                                                        加入購物車
                                                    </Box>
                                                </CardFooter>
                                            </Card>
                                        );
                                    })}
                                </SimpleGrid>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </div>
                <Footer />
            </RecoilRoot>
        </>
    );
};
