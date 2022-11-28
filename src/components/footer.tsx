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
          py={32}
          justifyContent="center"
          bgPosition="center"
          mb={2}
        >
          <div className="flex justify-start gap-24">
            <Image src="https://topeat.tw/images/logo-footer.webp" />
            <div>
              <Heading textColor="white" fontSize="lg" display="block" className="pb-4">
                <StarIcon />  地址 :
              </Heading>
              <Text textColor="white">聯合大學 八甲校區</Text>
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
              <Text textColor="white">operaticlife@nuu.edu.tw</Text>
            </div>
            <div className="pt-4">
              <HStack>
                <Button colorScheme='facebook' onClick={() => {

                }}>
                  Facebook
                </Button>
              </HStack>
            </div>
          </div>
        </Box>
      </Stack>
    </ChakraProvider >
  );
};
