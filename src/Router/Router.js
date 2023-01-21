import MainLayout from "../Layout/MainLayout/MainLayout";
import SideNav from "../Page/SideNav/SideNav";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <SideNav></SideNav>
            },]
    }
])
export default router;
