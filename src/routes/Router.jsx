import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Category from "../pages/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Terms from "../terms/Terms";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to='/category/0'></Navigate>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <Terms></Terms>
            }
        ]
    },
    {
        path: '/category',
        element: <Main></Main>,
        children: [
            {
                path: ':id',
                element: <Category></Category>,
                loader: ({params}) => fetch(` https://the-news-dragon-server-humaionkobir341-gmailcom.vercel.app/categories/${params.id}`)
            }
        ]
    },
    {
        path: '/news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':id',
                element: <PrivateRouter><News></News></PrivateRouter>,
                loader: ({params}) => fetch(` https://the-news-dragon-server-humaionkobir341-gmailcom.vercel.app/news/${params.id}`)
            }
        ]
    }
])
export default router;