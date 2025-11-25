import {
    createBrowserRouter,
} from "react-router-dom";
import {Error404} from "../components/pages/Error404.tsx";
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
import ProtectedRoute from "../components/pages/ProtectedRoute.tsx";

const PATH = {
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
} as const

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error404/>,
        children: [
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
                path: PATH.PROTECTED_PAGE,
                element:
                <ProtectedRoute>
                    <ProtectedPage/>
                </ProtectedRoute>
            },
            {
                path: '/*',
                element: <Error404/>,
            },
        ]
},
])
;


// <RouterProvider router={router} />

