import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useState } from "react";

export const MenuOption = () => {
    const [menu, setMenu] = useState("配餐");
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
                  }}
                >
                  白飯
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setMenu("油麵");
                  }}
                >
                  油麵
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setMenu("米粉");
                  }}
                >
                  米粉
                </MenuItem>
              </MenuList>
            </Menu>
        </>
    )
} 