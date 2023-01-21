const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <></>,
        children: [
            {
                path: '/',
                element: <></>
            },]
    }
])
export default router;
