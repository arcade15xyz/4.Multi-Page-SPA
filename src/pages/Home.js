import { Link } from "react-router-dom";
// import MainNavigation from "../components/mainNavigation";

function HomePage() {
  return (
    <>
    {/* <MainNavigation /> */}
    <h1>My Home Page</h1>
    <p>Go to <Link to="/products">the list of Products</Link>.</p>
    </>
  )
}

export default HomePage;