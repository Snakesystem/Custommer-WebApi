import { RootState } from "@context/store";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute: React.FC = () => {

    const session = useSelector((state: RootState) => state.session);

  if (session.result) {
    return <Outlet />;
  } return (
    <Navigate to="/" replace />
  );
};

export default PublicRoute;
