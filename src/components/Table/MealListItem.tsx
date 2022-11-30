import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
  useToast,
  Image,
  Box,
} from "@chakra-ui/react";
import { Staple } from "../Staple";

interface TableItemProps {
  food: string;
  price: number;
  src: string;
  message: string;
};
export const TableItem = ({ food, price, src, message }: TableItemProps) => {
  const toast = useToast();
  return (
    <>
      <Card maxW="sm">
        <CardBody>
          <Image
            src={src}
            borderRadius="lg"
          />
          <Stack mt="4" spacing="2">
            <Heading size="md">{food}</Heading>
            <Text>{message}</Text>
            <Text color="blue.600" fontSize="2xl">
              NT${price}
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
                title: "已新增商品至購物車",
                description: "We've added your meals to shop car.",
                status: "success",
                duration: 9000,
                isClosable: true,
              });
            }}
          >
            加入購物車
          </Box>
        </CardFooter>
      </Card>
    </>
  )
};
