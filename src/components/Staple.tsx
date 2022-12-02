import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { shopCarStapleState } from "../Store/MainStore";

export const Staple = () => {
  const [menu, setMenu] = useState("配餐");
  const [shopCarStaple, setShopCarStaple] = useRecoilState(shopCarStapleState);
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {menu}
        </MenuButton>
        <MenuList>
          <MenuItem
            onClick={() => {
              setMenu("白飯");
              setShopCarStaple('白飯')
            }}
          >
            白飯
          </MenuItem>
          <MenuItem
            onClick={() => {
              setMenu("油麵");
              setShopCarStaple('油麵')
            }}
          >
            油麵
          </MenuItem>
          <MenuItem
            onClick={() => {
              setMenu("米粉");
              setShopCarStaple('米粉')
            }}
          >
            米粉
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  )
} 