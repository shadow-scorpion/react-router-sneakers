
import {Navigate, Outlet} from "react-router-dom";
import {PATH} from "../../routes/router.tsx";


const PrivetRoutes = () => {
    // false ali true = children
    const isAuth = false

    return isAuth ? <Outlet/> : <Navigate to={PATH.LOGIN}/>
};

export default PrivetRoutes;