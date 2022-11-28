import { Card } from "@chakra-ui/react"
import { TableItem } from "./TableItem"

interface tableProps {
    food: string,
    price: number,
}

interface ListProps {
    Order: tableProps[]
}

export const MealList = ({ Order }: ListProps) => {
    return (
        <>
            {
                Order.map((order, i) => {
                    return (
                        <TableItem food={order.food} price={order.price} />
                    )
                })
            }
        </>

    )
}