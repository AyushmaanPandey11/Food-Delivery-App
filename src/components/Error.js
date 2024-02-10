import { useRouteError } from "react-router-dom";
 const Error = () => {
    const err = useRouteError();
    return (
        <div> 
            <h1>{err?.statusText} - {err?.status}</h1>
            <h3>{err?.data}</h3>
        </div>
    )
};
export default Error;