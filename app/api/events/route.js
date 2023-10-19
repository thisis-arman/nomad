import { NextResponse } from 'next/server';
import event  from '/public/events.json';






export const GET = (request) =>{

const {searchParams} = new URL ( request.url)
console.log(searchParams)
// const productId = searchParams.get("id")
let events = event;
/* if(productId){

    products= products.filter(product=> product.id===+productId)
} */
    return NextResponse.json(events)
}