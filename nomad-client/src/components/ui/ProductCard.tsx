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
    const category = useParams()
    
    console.log(items);

    return (
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {items.map((product: TProduct) => (
                <a href={`/products/${product._id}`} key={product._id} className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 h-80 lg:h-80">
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
                </a>
            ))}
        </div>
    );
};

export default ProductCard;