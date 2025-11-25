import {v1} from "uuid";
import adidasModel1 from "../assets/AdiFOM_TRXN_Shoes_Black_IG7453_01_standard.webp";
import adidasModel2 from "../assets/Superstar_XLG_Shoes_Black_IG9777_01_standard.webp";
import adidasModel3
    from "../assets/PostMove_Mid_Cloudfoam_Super_Lifestyle_Basketball_Mid_Classic_Shoes_Black_GY7163_01_standard.webp";
import kingPuma from "../assets/KING-ULTIMATE-MxSG-Football-Boots-Unisex.webp";
import lifeStylePuma from "../assets/puma-lifestyle.webp";

export type AdidasItem = {
    id: string;
    model: string;
    collection: string;
    price: string;
    picture: string;
}

export const sneakers = {
    adidas: [
        {
            id: v1(),
            model: 'ADIDAS ADIFOM TRXN',
            collection: 'new collection1',
            price: '100200$',
            picture: adidasModel1,
        },
        {
            id: v1(),
            model: 'ADIDAS ADIFOM SUPER',
            collection: 'new collection22',
            price: '200300$',
            picture: adidasModel2
        },
        {
            id: v1(),
            model: 'ADIDAS SUPER SUPERSKI',
            collection: 'new collection333',
            price: '300400$',
            picture: adidasModel3
        }
    ],
    puma: [
        {
            id: v1(),
            model: 'King puma football',
            collection: 'collection 2025',
            price: '300400$',
            picture: kingPuma
        },
        {
            id: v1(),
            model: 'Life-style puma football',
            collection: 'collection 2025',
            price: '300400$',
            picture: lifeStylePuma
        }
    ]
}