import { atom } from "recoil";

export const shopCarPriceTotalState = atom({
    key: 'SHOPCARPRICETOTAL_STATE',
    default: 0,
})

export const shopCarStapleState = atom({
    key: 'SHOPCARSTAPLE_STATE',
    default: '無',
})

export const shopCarCountState = atom({
    key: 'SHOPCARCOUNT_STATE',
    default: 0,
})

interface shopCarItemStackProps {
    food: string,
    price: number,
}

const shopCarItems: shopCarItemStackProps[] = [];

export const shopCarItemStackState = atom({
    key: 'SHOPCARITEMSTACK_STATE',
    default: shopCarItems,
})