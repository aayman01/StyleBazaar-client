import useAllProducts from "../Hooks/useAllProducts";
import NavBar from "./NavBar/NavBar";

const Home = () => {
  const {products} = useAllProducts();
  console.log(products)
    return (
      <div>
        <NavBar/>
    
      </div>
    );
};

export default Home;