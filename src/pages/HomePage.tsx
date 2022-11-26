import { NavBar } from "../components/NavBar"
import { List } from "../components/Table"

interface ListProps {
  food: string;
  price: number;
}

export const HomePage = () => {
  const Order: ListProps[] = [
    { food: '土魠魚羹', price: 20000 },
    { food: '土魠魚羹', price: 20000 },
    { food: '土魠魚羹', price: 20000 },
    { food: '土魠魚羹', price: 20000 },
  ]

  return (
    <>
      <div><NavBar /></div>
      <div><List Order={Order} /></div>
    </>
  )
}