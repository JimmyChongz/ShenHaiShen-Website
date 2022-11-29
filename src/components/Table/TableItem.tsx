import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Box, Card, CardBody, IconButton, Img, Text, useToast } from "@chakra-ui/react"
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
                            <IconButton aria-label='Add to friends' icon={<MinusIcon />}
                                onClick={() => {
                                    toast({
                                        title: '已移出商品至購物車',
                                        description: "We've del your meals to shop car.",
                                        status: 'error',
                                        duration: 9000,
                                        isClosable: true,
                                    })
                                }}
                            />
                            <IconButton aria-label='Add to friends' icon={<AddIcon />}
                                onClick={() => {
                                    toast({
                                        title: '已新增商品至購物車',
                                        description: "We've added your meals to shop car.",
                                        status: 'success',
                                        duration: 9000,
                                        isClosable: true,
                                    })
                                }}
                            />
                        </div>
                    </div>
                </CardBody>
            </Card>
        </>
    )
}