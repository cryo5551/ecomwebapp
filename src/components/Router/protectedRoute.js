import { Route, Navigate } from "react-router-dom";


const ProtectedRoute = ({ component: Component, ...rest }) => {

  const token = false
  return (
    <Route
      {...rest}
      render={(props) =>
        token ? <Component {...props} /> : <Navigate replace to={"/auth"} />
      }
    />
  );
};

export default ProtectedRoute;