import { useParams } from "react-router-dom";

export type TProduct = {
    _id: string;
    productName: string;
    category: string;
    price: number;
    stockQuantity: number;
    ratings: number;
    description: string;
    images: string;
}

const ProductCard = ({ items }: TProduct[]) => {
    const category = useParams();

    console.log(items);

    return (
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {items.map((product: TProduct) => (
                <a href={`/products/${product._id}`} key={product._id} className="group relative shadow-sm hover:shadow-md rounded p-4">
                    <div className="aspect-h-1 aspect-w-1 w-auto overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 h-60 lg:h-52">
                        <img
                            alt={product.productName}
                            src={product.images}
                            className="h-full w-full object-fill object-center lg:h-full lg:w-full"
                        />
                    </div>
                    <div className="mt-4 flex justify-between">
                        <div>
                            <h3 className="text-sm text-gray-700">
                                <a href={`/products/${product._id}`}>
                                    <span aria-hidden="true" className="absolute inset-0" />
                                    {product.productName}
                                </a>
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">{product.price}</p>
                    </div>
                        <div className="w-full bg-slate-200 rounded-sm mt-2 py-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mx-auto">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>

                        </div>
                </a>
            ))}
        </div>
    );
};

export default ProductCard;