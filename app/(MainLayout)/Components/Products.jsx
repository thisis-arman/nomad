'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/api/products')
            .then(res => res.json())
            .then(products => setProducts(products))
    }, [])
    return (
        <section className='container mx-auto py-12 px-4'>
            <h1 className='text-4xl font-bold pb-8'>Products</h1>
            <div className='grid md:grid-cols-3 gap-8 grid-cols-1'>
                {
                    products.slice(0, 9).map(product => <a key={product.id} href="#" className="group block shadow-md overflow-hidden">
                        <div className="relative h-[350px] sm:h-[350px] ">
                            <Image width={500} height={600}
                                src={product?.imageURL}
                                alt=""
                                className="absolute inset-0 h-full w-full object-center opacity-100  object-fill  group-hover:opacity-0"
                            />

                            <Image width={500} height={600}
                                src={product?.Alt_imageURL}
                                alt=""
                                className="absolute inset-0 h-full w-full object-center opacity-0   group-hover:opacity-100"
                            />
                        </div>

                        <div className="relative bg-white p-4 pt-3 border-t">
                            <h3
                                className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4"
                            >
                                {product?.name}
                            </h3>

                            <div className="mt-1.5 flex items-center justify-between text-gray-900">
                                <p className="tracking-wide">${product?.price}</p>

                                <p className="text-xs uppercase tracking-wide">6 Colors</p>
                            </div>
                        </div>
                    </a>)
                }

            </div>
        </section>
    );
};

export default Products;