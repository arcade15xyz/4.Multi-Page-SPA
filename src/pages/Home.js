import { Link, useNavigate } from "react-router-dom";
// import MainNavigation from "../components/mainNavigation";

function HomePage() {
  const navigate = useNavigate();
  function navigateHandler(){
    navigate('/products');
  }
  return (
    <>
    {/* <MainNavigation /> */}
    <h1>My Home Page</h1>
    <p>Go to <Link to="/products">the list of Products</Link>.</p>
    <p>
      <button onClick={navigateHandler}>Navigate</button>
    </p>
    </>
  )
}

export default HomePage;