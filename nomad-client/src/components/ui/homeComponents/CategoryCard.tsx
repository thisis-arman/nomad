import { useParams } from 'react-router-dom';
import { useGetProductByCategoryParamsQuery } from '../../../redux/features/products/productApi';
import { TProduct } from '../ProductCard';

const CategoryCard = () => {
    const { category } = useParams();
    // console.log({category});
    const { data: products, isLoading } = useGetProductByCategoryParamsQuery(category)

    if (isLoading) {
        return <p>Loading....</p>
    }

    return (
        <div className='max-w-screen-xl mx-auto m-4'>
            <div>
                <h2 className='text-2xl font-bold'>{category}</h2>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {products?.data?.map((product: TProduct) => (
                    <a href={`/products/${product._id}`} key={product._id} className="group hover:shadow-md hover:border relative p-4 rounded-sm">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 h-80  lg:h-80">
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
        </div>
    );
};

export default CategoryCard;