import {
    createBrowserRouter,
    Navigate, RouteObject,
} from "react-router-dom";
import {Adidas} from "../components/pages/Adidas.tsx";
import {Puma} from "../components/pages/Puma.tsx";
import {Abibas} from "../components/pages/Abibas.tsx";
import {Prices} from "../components/pages/Prices.tsx";
import Time from "../components/pages/Time.tsx";
import {Clock} from "../components/pages/Clock.tsx";
import SecondTime from "../components/pages/Secondtime/SecondTime.tsx";
import {Experiment} from "../components/pages/Experiment.tsx";
import {App} from "../App.tsx";
import Model from "../components/pages/Model.tsx";
import {ProtectedPage} from "../components/pages/ProtectedPage.tsx";
import {Error404} from "../components/pages/Error404.tsx";
import Loggin from "../components/pages/Loggin.tsx";
import PrivetRoutes from "../components/pages/PrivetRoutes.tsx";

export const PATH = {
    LOGIN: '/login',
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    PRICES: '/prices',
    TIME: '/time',
    CLOCK: '/clock',
    SECOND_TIME: '/second_time',
    EXPERIMENT: '/experiment',
    ERROR: '/error404',
    MODEL: ':model/:id',
    PROTECTED_PAGE: '/protected_page',
    PRIVET_ROUTES: '/privet_routes',
} as const

const publicRoutes: RouteObject[] = [
            {
                path: PATH.LOGIN,
                element: <Loggin/>,
            },
            {
                path: PATH.ADIDAS,
                element: <Adidas/>,
            },
            {
                path: PATH.PUMA,
                element: <Puma/>,
            },
            {
                path: PATH.MODEL,
                element: <Model/>,
            },
            {
                path: PATH.ABIBAS,
                element: <Abibas/>,
            },
            {
                path: PATH.PRICES,
                element: <Prices/>,
            },
            {
                path: PATH.TIME,
                element: <Time/>,
            },
            {
                path: PATH.CLOCK,
                element: <Clock/>,
            },
            {
                path: PATH.SECOND_TIME,
                element: <SecondTime />,
            },
            {
                path: PATH.EXPERIMENT,
                element: <Experiment/>,
            },
            {
                path: PATH.ERROR,
                element: <Error404/>,
            },
];

const privetRoutes = [
            {
                path: PATH.PROTECTED_PAGE,
                element: <ProtectedPage/>,
                children: [
                    {

                    }
                ]
            },
];


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Navigate to={PATH.ERROR} />,
        children: [
            ...publicRoutes,
            {
                element: <PrivetRoutes/>,
                children: privetRoutes
            }
        ]
    }
])


//// Прошлая запись без разделений на приватный и публичный

// export const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <App/>,
//         errorElement: <Navigate to={PATH.ERROR} />,
//         children: [
//             {
//                 path: PATH.LOGIN,
//                 element: <Loggin/>,
//             },
//             {
//                 path: PATH.ADIDAS,
//                 element: <Adidas/>,
//             },
//             {
//                 path: PATH.PUMA,
//                 element: <Puma/>,
//             },
//             {
//                 path: PATH.MODEL,
//                 element: <Model/>,
//             },
//             {
//                 path: PATH.ABIBAS,
//                 element: <Abibas/>,
//             },
//             {
//                 path: PATH.PRICES,
//                 element: <Prices/>,
//             },
//             {
//                 path: PATH.TIME,
//                 element: <Time/>,
//             },
//             {
//                 path: PATH.CLOCK,
//                 element: <Clock/>,
//             },
//             {
//                 path: PATH.SECOND_TIME,
//                 element: <SecondTime />,
//             },
//             {
//                 path: PATH.EXPERIMENT,
//                 element: <Experiment/>,
//             },
//             {
//                 path: PATH.ERROR,
//                 element: <Error404/>,
//             },
//             {
//                 path: PATH.PROTECTED_PAGE,
//                 element:
//                 <ProtectedRoute>
//                     <ProtectedPage/>
//                 </ProtectedRoute>
//             },
//         ]
// },
// ])



// <RouterProvider router={router} />

