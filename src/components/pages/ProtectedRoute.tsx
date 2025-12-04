import {ReactNode} from "react";
import {Navigate } from "react-router-dom";

type Props = {
    children: ReactNode
}

const ProtectedRoute = ({children} :Props) => {
    // false ali true = children
    const logger = true

    return logger ? children : <Navigate to={'/error404'}/>
};

export default ProtectedRoute;