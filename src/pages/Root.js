import { Outlet } from "react-router-dom";
import MainNavigation from "../components/mainNavigation";
// import classes from './Root.module.css';

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main >
      <Outlet />
      </main>
    </>
  )
}

export default RootLayout;