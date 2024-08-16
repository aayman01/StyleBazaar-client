
// eslint-disable-next-line react/prop-types
const Card = ({product}) => {
    console.log(product)
    return (
      <div className="card card-compact bg-base-100 shadow-xl h-[450px]">
        <figure>
          <img className="h-[230px]" src={product.productImage} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-bold">{product?.productName}</h2>
          <p className="text-gray-800">{product?.description}</p>
          <div>
            <p className="font-medium">Brand Name: {product?.brandName}</p>
            <p className="font-medium">Category: {product?.category}</p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary font-bold text-white bg-green-400 border-none">{product?.price}$</button>
          </div>
        </div>
      </div>
    );
};

export default Card;