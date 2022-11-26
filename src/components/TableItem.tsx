import { Card, CardBody, Text } from "@chakra-ui/react"

interface TableItemProps {
    food: string,
    price: number
}

export const TableItem = ({ food, price }: TableItemProps) => {
    return (
        <Card>
            <CardBody>
                <Text>{food}</Text>
                <Text>NT${price}</Text>
            </CardBody>
        </Card>
    )
}