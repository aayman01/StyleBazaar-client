import { useState } from "react";
import { ClipLoader } from "react-spinners";
import useFilter from "../Hooks/useFilter";

const Filter = () => {
    const [brand , setBrand] = useState('');
    const [category , setCategory] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const { refetch, isLoading } = useFilter(brand, category, maxPrice,minPrice);

    const handleFilter = (e) => {
        e.preventDefault();
        console.log({brand,category,maxPrice,minPrice})
        refetch();
    }
    if (isLoading) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <ClipLoader color="#076cec" size={50} />
        </div>
      );
    }
    return (
      <form onSubmit={handleFilter} className="flex flex-col md:flex-row  gap-3 mb-20">
        <select
          onChange={(e) => {
            setBrand(e.target.value);
          }}
          value={brand}
          className="select select-bordered w-full"
        >
          <option disabled value="">
            Brand Name
          </option>
          <option value="Nike">Nike</option>
          <option value="Puma">Puma</option>
          <option value="Rolex">Rolex</option>
        </select>
        <select
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          value={category}
          className="select select-bordered w-full"
        >
          <option disabled value="">
            Category
          </option>
          <option value="T-Shirts">T-Shirts</option>
          <option value="Shoes">Shoes</option>
          <option value="Trousers">Trousers</option>
          <option value="Watches">Watches</option>
          <option value="Wallets">Wallets</option>
        </select>
        <input
          type="text"
          placeholder="Max Price"
          onChange={(e) => setMaxPrice(e.target.value)}
          value={maxPrice}
          className="input input-bordered w-full"
        />
        <input
          type="text"
          placeholder="Min Price"
          onChange={(e) => setMinPrice(e.target.value)}
          value={minPrice}
          className="input input-bordered w-full"
        />
        <input
          className="btn bg-green-400 text-white"
          type="submit"
          value="Filter"
        />
      </form>
    );
};

export default Filter;