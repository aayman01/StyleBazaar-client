import Card from "../../Components/Card";
import useAllProducts from "../../Hooks/useAllProducts";

const AllProducts = () => {
    const {products} = useAllProducts();
    return (
      <>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mt-8">
            <h2 className="text-4xl font-bold mb-2">All Products</h2>
            <p className="text-gray-500 text-sm mb-12">
              Find All Your Product You Need
            </p>
          </div>
        <div className="grid grid-cols-3 gap-5">
            {
                products.map(product => <Card key={product.id} product={product}></Card>)
            }
        </div>
        </div>
      </>
    );
};

export default AllProducts;