import { RootState } from "@context/store";
// import Footer from "@templates/Footer";
import Header from "@templates/Header";
import Sidebar from "@templates/Sidebar";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Settings from "./Settings";

const PrivateRoute: React.FC = () => {

    const session = useSelector((state: RootState) => state.session);

  if (!session.result) {
    return <Navigate to="/login" />;
  } return (
    <Fragment>
    <div className="min-height-300 position-absolute w-100" 
        style={{backgroundColor: '#21D4FD',backgroundImage: 'linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)'}}></div>
      <Sidebar/>
      <section className="main-content position-relative border-radius-lg ">
        <Header/>
          <Outlet />
        </section>
      {/* <Footer /> */}
      <Settings/>
    </Fragment>
  );
};

export default PrivateRoute;
