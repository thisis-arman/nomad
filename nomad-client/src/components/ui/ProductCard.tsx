
const ProductCard = ({ items }) => {
    console.log(items);

    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 ">
            {
                items?.map((item,i) => <a href="#" key={i} className="group block overflow-hidden">
                    <div className="relative h-[200px] sm:h-[300px]">
                        <img
                            src={item?.images}
                            alt=""
                            className="absolute inset-0 h-full w-full object-contain opacity-100 group-hover:opacity-0"
                        />

                        <img
                            src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
                            alt=""
                            className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                        />
                    </div>

                    <div className="relative bg-white pt-3">
                        <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                            {item.productName}
                        </h3>

                        <div className="mt-1.5 flex items-center justify-between text-gray-900">
                            <p className="tracking-wide">$ {item.price}</p>

                            <p className="text-xs uppercase tracking-wide">6 Colors</p>
                        </div>
                    </div>
                </a>)
            }
        </div>
    );
};

export default ProductCard;