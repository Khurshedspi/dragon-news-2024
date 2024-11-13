import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
       path: "/news",
       element: <h1>News Layout</h1>,
    },
    {
        path: "/auth",
        element: <h1>Login</h1>,
    },
    {
     path: "*",
     element: <h1>Error</h1>   
    }
  ]);
export default router;