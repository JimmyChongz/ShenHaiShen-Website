import { Box, Card, CardBody, Img, Text, useToast } from "@chakra-ui/react"
import { useState } from "react";
interface TableItemProps {
    food: string,
    price: number,
}

export const TableItem = ({ food, price }: TableItemProps) => {
    const toast = useToast();
    return (
        <>
            <Card>
                <CardBody>
                    <div className="flex justify-between">
                        <div>
                            <Text>{food}</Text>
                            <Text>NT${price}</Text>
                        </div>
                        <div>
                            <Box as='button' borderRadius='md' bg='tomato' color='white' px={4} h={10}
                                onClick={() => {
                                    toast({
                                        title: '已新增商品至購物車',
                                        description: "We've added your meals to shop car.",
                                        status: 'success',
                                        duration: 9000,
                                        isClosable: true,
                                    })
                                }}
                            >
                                加入購物車
                            </Box>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </>
    )
}