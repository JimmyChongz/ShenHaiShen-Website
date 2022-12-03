import { Outlet } from "react-router-dom"
import { Footer } from "../components/footer"
import { NavBar } from "../components/NavBar"

export const HomePageLayout = () => {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )
}