import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {

  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? "nav-link active" : "nav-link";
  };

  return (
    <aside className="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 " id="sidenav-main">
    <div className="sidenav-header">
      <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
      <Link className="navbar-brand m-0" to="/">
        <img src="/img/logos/mastercard.png" width="26px" height="26px" className="navbar-brand-img h-100" alt="main_logo"/>
        <span className="ms-1 font-weight-bold">Catatan Si Bolang</span>
      </Link>
    </div>
    <hr className="horizontal dark mt-0"/>
    <div className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className={isActive("/")} to="/">
            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i className="bi bi-speedometer text-dark text-sm opacity-10"></i>
            </div>
            <span className="nav-link-text ms-1">Dashboard</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className={isActive("/organization")} to="/organization">
            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i className="bi bi-table text-dark text-sm opacity-10"></i>
            </div>
            <span className="nav-link-text ms-1">Daftar Organisasi</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className={isActive("/notes")} to="/notes">
            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i className="bi bi-file-earmark-word-fill text-dark text-sm opacity-10"></i>
            </div>
            <span className="nav-link-text ms-1">Catatan</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className={isActive("/project")} to="/project">
            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i className="bi bi-file-earmark-code-fill text-dark text-sm opacity-10"></i>
            </div>
            <span className="nav-link-text ms-1">Daftar Project</span>
          </Link>
        </li>
      </ul>
    </div>
    <div className="sidenav-footer mx-3 ">
      <div className="card card-plain shadow-none" id="sidenavCard">
        <img className="w-50 mx-auto" src="../assets/img/illustrations/icon-documentation.svg" alt="sidebar_illustration"/>
        <div className="card-body text-center p-3 w-100 pt-0">
          <div className="docs-info">
            <h6 className="mb-0">Need help?</h6>
            <p className="text-xs font-weight-bold mb-0">Please check our docs</p>
          </div>
        </div>
      </div>
      <a href="https://www.creative-tim.com/learning-lab/bootstrap/license/argon-dashboard" target="_blank" className="btn btn-dark btn-sm w-100 mb-3">Documentation</a>
      <a className="btn btn-primary btn-sm mb-0 w-100" href="https://www.creative-tim.com/product/argon-dashboard-pro?ref=sidebarfree" type="button">Upgrade to pro</a>
    </div>
  </aside>
  )
}
