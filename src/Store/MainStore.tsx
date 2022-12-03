import { atom } from "recoil";

export const shopCarFoodState = atom({
    key: 'SHOPCARFOOD_STATE',
    default: '',
})

export const shopCarPriceState = atom({
    key: 'SHOPCARPRICE_STATE',
    default: 0,
})

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