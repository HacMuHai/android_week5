import { createContext } from "react";

const dataPhone={
    name: "Điện Thoại Vsmart Joy 3 - Hàng chính hãng",
    soDanhGia:828,
    price: 1990000,
    priceAct:1790000,
    suplly: "Tiki Tradding"
}

const DataContext = createContext(dataPhone)

export {DataContext,dataPhone}