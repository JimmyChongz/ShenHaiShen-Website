import { Card } from "@chakra-ui/react"
import { TableItem } from "../components/TableItem"

interface tableProps {
    food: string,
    price: number,
}

interface ListProps {
    Order: tableProps[]
}

export const List = ({ Order }: ListProps) => {
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