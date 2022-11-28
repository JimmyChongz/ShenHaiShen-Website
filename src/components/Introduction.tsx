import { ArrowForwardIcon } from "@chakra-ui/icons"
import { SimpleGrid, Card, CardHeader, Heading, CardBody, CardFooter, Button, Text, Img, Box, Center } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

export const Introduction = () => {
    const nevigate = useNavigate();
    return (
        <>
            <div className="pt-16 pb-4 pr-12 pl-12" style={{ backgroundImage: `url(https://topeat.tw/images/bg-bottom.webp)` }}>
                <div className="text-4xl text-center pb-16">嚴選食材，吃得安心</div>
                <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
                    <Card backgroundColor='#E2D6C8'>
                        <CardHeader>
                            <Img src="https://topeat.tw/images/img-seafood02.webp" />
                        </CardHeader>
                        <CardFooter>
                            <Box>
                                <div className="font-extrabold">[遠洋土魠魚]</div>
                                <h1>遠洋捕獲至生產切割，全程一路機械冷凍處理、保證新鮮！</h1>
                                <Button rightIcon={<ArrowForwardIcon />} bgColor='pink' variant='solid' mt={4} onClick={() => {
                                    nevigate(`/Menu`)
                                }} >
                                    直接點了啦
                                </Button>
                            </Box>
                        </CardFooter>
                    </Card>
                    <Card backgroundColor='#E2D6C8'>
                        <CardHeader>
                            <Img src="https://topeat.tw/images/img-seafood03.webp" />
                        </CardHeader>
                        <CardFooter>
                            <Box>
                                <div className="font-extrabold">[北海道赤魷]</div>
                                <h1>真‧北海道赤魷，光從顏色及脆度即可判斷。</h1>
                                <Button rightIcon={<ArrowForwardIcon />} bgColor='pink' variant='solid' mt={4} onClick={() => {
                                    nevigate(`/Menu`)
                                }} >
                                    直接點了啦
                                </Button>
                            </Box>
                        </CardFooter>
                    </Card>
                    <Card backgroundColor='#E2D6C8'>
                        <CardHeader>
                            <Img src="https://topeat.tw/images/img-seafood04.webp" />
                        </CardHeader>
                        <CardFooter>
                            <Box>
                                <div className="font-extrabold">[浮水虱目魚]</div>
                                <h1>純手工製作、口味獨特！做湯或羹都好吃！</h1>
                                <Button rightIcon={<ArrowForwardIcon />} bgColor='pink' variant='solid' mt={4} onClick={() => {
                                    nevigate(`/Menu`)
                                }} >
                                    直接點了啦
                                </Button>
                            </Box>
                        </CardFooter>
                    </Card>
                    <Card backgroundColor='#E2D6C8'>
                        <CardHeader>
                            <Img src="https://topeat.tw/images/img-seafood05.webp" />
                        </CardHeader>
                        <CardFooter>
                            <Box>
                                <div className="font-extrabold">[特製排骨酥]</div>
                                <h1>採用CAS認證菜豬之小排丁調味製作而成！風味極佳！</h1>
                                <Button rightIcon={<ArrowForwardIcon />} bgColor='pink' variant='solid' mt={4} onClick={() => {
                                    nevigate(`/Menu`)
                                }} >
                                    直接點了啦
                                </Button>
                            </Box>
                        </CardFooter>
                    </Card>
                    <Card backgroundColor='#E2D6C8'>
                        <CardHeader>
                            <Img src="https://topeat.tw/images/img-seafood06.webp" />
                        </CardHeader>
                        <CardFooter>
                            <Box>
                                <div className="font-extrabold">[鐵路排骨肉]</div>
                                <h1>採用CAS認證溫體豬不帶骨，斷金切片，醃製獨家懷舊排骨醬料！</h1>
                                <Button rightIcon={<ArrowForwardIcon />} bgColor='pink' variant='solid' mt={4} onClick={() => {
                                    nevigate(`/Menu`)
                                }} >
                                    直接點了啦
                                </Button>
                            </Box>
                        </CardFooter>
                    </Card>
                    <Card backgroundColor='#E2D6C8'>
                        <CardHeader>
                            <Img src="https://topeat.tw/images/img-seafood07.webp" />
                        </CardHeader>
                        <CardFooter>
                            <Box>
                                <div className="font-extrabold">[日式豬排肉]</div>
                                <h1>採用CAS認證溫體豬不帶骨，斷金切片，薄上酥炸麵包粉，醃製獨家日式風味配料，是咖哩飯的好朋友！</h1>
                                <Button rightIcon={<ArrowForwardIcon />} bgColor='pink' variant='solid' mt={4} onClick={() => {
                                    nevigate(`/Menu`)
                                }} >
                                    直接點了啦
                                </Button>
                            </Box>
                        </CardFooter>
                    </Card>
                    <Card backgroundColor='#E2D6C8'>
                        <CardHeader>
                            <Img src="https://topeat.tw/images/img-seafood08.webp" />
                        </CardHeader>
                        <CardFooter>
                            <Box>
                                <div className="font-extrabold">[黃金雞腿]</div>
                                <h1>採用國內卜蜂T6雞腿話劃兩刀處理，全程拔毛、去油、剪皮一貫到位！</h1>
                                <Button rightIcon={<ArrowForwardIcon />} bgColor='pink' variant='solid' mt={4} onClick={() => {
                                    nevigate(`/Menu`)
                                }} >
                                    直接點了啦
                                </Button>
                            </Box>
                        </CardFooter>
                    </Card>
                    <Card backgroundColor='#E2D6C8'>
                        <CardHeader>
                            <Img src="https://topeat.tw/images/img-seafood09.webp" />
                        </CardHeader>
                        <CardFooter>
                            <Box>
                                <div className="font-extrabold">[紅燒豬肉條]</div>
                                <h1>採用CAS認證溫體豬不帶骨，斷金切片，醃製獨家紅燒風味醬料！</h1>
                            </Box>
                        </CardFooter>
                    </Card>
                </SimpleGrid>
            </div>
        </>
    )
}