import {useLocation} from "react-router-dom";

export const Error404 = () => {
    const location = useLocation()
    return (
        <div>
            Error404. You tried to get to incorrect address {location.pathname}
        </div>
    );
};

