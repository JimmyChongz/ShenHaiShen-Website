import { EmailIcon, PhoneIcon, StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ChakraProvider,
  Heading,
  Stack,
  Text,
  Image,
  HStack,
  Link,
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
          py={20}
          justifyContent="center"
          bgPosition="center"
        >
          <div className="flex justify-between gap-24 items-center">
            <div>
              <Image src="https://topeat.tw/images/logo-footer.webp" />
            </div>
            <div>
              <Heading textColor="white" fontSize="lg" display="block" className="pb-4">
                <StarIcon />  地址 :
              </Heading>
              <Text textColor="white">聯合大學 八甲校區</Text>
              <Text textColor="white">營業時間：12:00 ~ 20:00</Text>
            </div>
            <div>
              <Heading textColor="white" fontSize="lg" display="block" className="pb-4">
                <PhoneIcon />  電話 :
              </Heading>
              <Text textColor="white">09XXXXXXXX</Text>
              <Text textColor="white">037-XXXXXX</Text>
            </div>
            <div>
              <Heading textColor="white" fontSize="lg" display="block" className="pb-4">
                <EmailIcon />  E-mail :
              </Heading>
              <Text textColor="white">V0924015@nuu.edu.tw</Text>
              <Text textColor="white">V0924037@nuu.edu.tw</Text>
              <Text textColor="white">V0924027@nuu.edu.tw</Text>
            </div>
            <div className="pt-4">
              <HStack>
                <Link href="https://www.facebook.com/kingfood99/">
                  <Button colorScheme='facebook' >
                    Facebook
                  </Button>
                </Link>
              </HStack>
            </div>
          </div>
        </Box>
      </Stack>
    </ChakraProvider >
  );
};
