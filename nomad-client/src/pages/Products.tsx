import { useGetProductsQuery } from "../redux/features/products/productApi";


const Products = () => {
    const { data } = useGetProductsQuery(undefined);

    return (
        <div>

            <h1>Show All Products {data.data.length}</h1>
        </div>
    );
};

export default Products;