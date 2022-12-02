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
  Select,
  Tab,
  Table,
  TableCaption,
  TableContainer,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { NavBar } from "../components/NavBar";
import { ShopCarItem } from "../components/ShopCarItem";
import {
  shopCarFoodState,
  shopCarPriceState,
  shopCarStapleState,
  showShopCarItemState,
} from "../Store/MainStore";

export const CheckoutPage = () => {
  const [step, setStep] = useState<number>(0);
  const [money, setmoney] = useState<number>(390);
  const navigate = useNavigate();
  const [Checkcompleted, setCheckCompleted] = useState<string>('確認訂單');
  const [OpButton, setOpButton] = useState<boolean>(false);
  const [ShopCarFood, setShopCarFood] = useRecoilState(shopCarFoodState);
  const [ShopCarStaple, setShopCarStaple] = useRecoilState(shopCarStapleState);
  const [ShopCarPrice, setShopCarPrice] = useRecoilState(shopCarPriceState);
  const [isShopCarItem, setShowShopCarItem] =
    useRecoilState(showShopCarItemState);
  const [Payment, setPayment] = useState<string>("付款方式");

  return (
    <>
      <NavBar />
      <Progress value={step} />
      <Box bgImage="https://topeat.tw/images/bg-bottom.webp" bgRepeat="repeat" h='750'>
        {Checkcompleted == '確認訂單'&& (
          <>
            <TableContainer>
              <Table variant="simple">
                <TableCaption>
                <Button colorScheme='blue' onClick={() => {
                        setCheckCompleted('付款方式')
                        setStep(33);
                    }}>確認完成</Button>
                </TableCaption>
                <Thead>
                  <Tr>
                    <Th>
                      <Text fontSize="2xl">品項</Text>
                    </Th>
                    <Th>
                      <Text fontSize="2xl">配餐</Text>
                    </Th>
                    <Th>
                      <Text fontSize="2xl">金額</Text>
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                    <ShopCarItem
                      food={ShopCarFood}
                      staple={ShopCarStaple}
                      price={ShopCarPrice}
                    />
                </Tbody>
              </Table>
            </TableContainer>
          </>
        )}
        {Checkcompleted == '付款方式' && (
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
                {/* 這裡會塞條件 */}
                <Text>現金支付:{money}元</Text>
              </div>
            )}

            {Payment == "載具付款" && (
              <div>
                {/* 這裡會塞條件 */}
                <Text>載具支付:{money}元</Text>
              </div>
            )}

            {Payment == "信用卡付款" && (
              <div>
                {/* 這裡會塞條件 */}
                <Text>信用卡支付:{money}元</Text>
              </div>
            )}
            <br />
            <Button className=" left-2 " colorScheme='blue' onClick={() => {
                        setCheckCompleted('確認訂單')
                        setStep(0);
                    }}>上一頁</Button>
                    {<Button className=" left-4 " colorScheme='blue' onClick={() => {
                        setCheckCompleted('完成訂單')
                        setStep(66);
                    }}>確認付款</Button>
            }
          </div>
        )}

        {Checkcompleted == '完成訂單' && (
          <div>
            <Text fontSize="4xl">完成訂單</Text>
            {/* <div><MealList Order={Orderlist} /></div>暫時這樣用 */}
            <div>
              <Text fontSize="2xl">
                {Payment}:{money}
              </Text>
            </div>

            <br />
            <Button className=" left-2 " colorScheme='blue' onClick={() => {
                        setCheckCompleted('付款方式')
                        setStep(33);
                    }}>上一頁</Button>
                    {OpButton != true && <Button className=" left-4 " colorScheme='blue' onClick={() => {
                        setStep(100);
                        setOpButton(true)
                    }}>完成訂單</Button>}
                    {OpButton && <Button className="left-4" colorScheme='blue' onClick={()=>{navigate('/History')}}>
                        前往歷史訂單
                    </Button>}
                    
          </div>
        )}
      </Box>
    </>
  );
};
