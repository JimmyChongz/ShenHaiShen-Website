import { ArrowForwardIcon } from "@chakra-ui/icons";
import { CardFooter, Button, Box, CardHeader, Img } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface cardFooterProps {
  title: string;
  message: string;
  src: string;
}

export const CardsContent = ({ title, message, src }: cardFooterProps) => {
  const orderbutton = "直接點了啦";
  const nevigate = useNavigate();
  return (
    <>
      <CardHeader>
        <Img src={src} />
      </CardHeader>
      <CardFooter>
        <Box>
          <div className="font-extrabold">{title}</div>
          <h1>{message}</h1>
          <Button
            rightIcon={<ArrowForwardIcon />}
            bgColor="pink"
            variant="solid"
            mt={4}
            onClick={() => {
              nevigate(`/Menu`);
            }}
          >
            {orderbutton}
          </Button>
        </Box>
      </CardFooter>
    </>
  );
};
