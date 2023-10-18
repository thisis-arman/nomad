import { NextResponse } from 'next/server';
import products  from '/public/products.json';






export const GET = (request) =>{

const {searchParams} = new URL ( request.url)
console.log(searchParams)
// const productId = searchParams.get("id")
let product = products;
/* if(productId){

    products= products.filter(product=> product.id===+productId)
} */
    return NextResponse.json(product)
}