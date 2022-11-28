import { PhoneIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ChakraProvider,
  Heading,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";

export const Footer = () => {
  return (
    <ChakraProvider>
      <Stack direction="column">
        <Box
          bgGradient="revert-layer"
          bgImage="https://topeat.tw/images/bg-footer.webp"
          width="100%"
          display="flex"
          alignItems="center"
          py={48}
          justifyContent="center"
          bgPosition="center"
          mb={2}
        >
          <div className="flex justify-start gap-5">
            <Image src="https://topeat.tw/images/logo-footer.webp" />
            <div>
              <Heading textColor="white" fontSize="lg" display="block">
                地址 :
              </Heading>
              <Text textColor="white">國立聯合大學 八甲校區 學餐</Text>
            </div>
            <div>
              <Heading textColor="white" fontSize="lg" display="block" >
                <PhoneIcon />  電話 :
              </Heading>
              <Text textColor="white">09XXXXXXXX</Text>
              <Text textColor="white">037-XXXXXX</Text>
            </div>
          </div>
        </Box>
      </Stack>
    </ChakraProvider>
  );
};
