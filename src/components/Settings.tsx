import { useState } from "react";
import { Link } from "react-router-dom";

export default function Settings() {

    const [showSettings, setShowSettings] = useState<string>("");

  return (
    <>
        <div className={`fixed-plugin ${showSettings}`}>
            <Link to="#" onClick={() => setShowSettings("show")} className="fixed-plugin-button text-dark position-fixed px-3 py-2">
                <i className="bi bi-gear-wide-connected"> </i>
            </Link>
            <div className="card shadow-lg">
            <div className="card-header pb-0 pt-3 ">
                <div className="float-start">
                <h5 className="mt-3 mb-0">Argon Configurator</h5>
                <p>See our dashboard options.</p>
                </div>
                <div className="float-end mt-4">
                <button onClick={() => setShowSettings("")} className="btn btn-link text-dark p-0 fixed-plugin-close-button">
                    <i className="bi bi-x fs-4"></i>
                </button>
                </div>
            </div>
            <hr className="horizontal dark my-1"/>
            <div className="card-body pt-sm-3 pt-0 overflow-auto">
                <div>
                <h6 className="mb-0">Sidebar Colors</h6>
                </div>
                <Link to="/" className="switch-trigger background-color">
                <div className="badge-colors my-2 text-start">
                    <span className="badge filter bg-gradient-primary active" data-color="primary"></span>
                    <span className="badge filter bg-gradient-dark" data-color="dark"></span>
                    <span className="badge filter bg-gradient-info" data-color="info"></span>
                    <span className="badge filter bg-gradient-success" data-color="success"></span>
                    <span className="badge filter bg-gradient-warning" data-color="warning"></span>
                    <span className="badge filter bg-gradient-danger" data-color="danger"></span>
                </div>
                </Link>
                <div className="mt-3">
                <h6 className="mb-0">Sidenav Type</h6>
                <p className="text-sm">Choose between 2 different sidenav types.</p>
                </div>
                <div className="d-flex">
                <button className="btn bg-gradient-primary w-100 px-3 mb-2 active me-2" data-className="bg-white">White</button>
                <button className="btn bg-gradient-primary w-100 px-3 mb-2" data-className="bg-default">Dark</button>
                </div>
                <p className="text-sm d-xl-none d-block mt-2">You can change the sidenav type just on desktop view.</p>
                <div className="d-flex my-3">
                <h6 className="mb-0">Navbar Fixed</h6>
                <div className="form-check form-switch ps-0 ms-auto my-auto">
                    <input className="form-check-input mt-1 ms-auto" type="checkbox" id="navbarFixed" />
                </div>
                </div>
                <hr className="horizontal dark my-sm-4"/>
                <div className="mt-2 mb-5 d-flex">
                <h6 className="mb-0">Light / Dark</h6>
                <div className="form-check form-switch ps-0 ms-auto my-auto">
                    <input className="form-check-input mt-1 ms-auto" type="checkbox" id="dark-version"/>
                </div>
                </div>
                <a className="btn bg-gradient-dark w-100" href="#">Free Download</a>
                <a className="btn btn-outline-dark w-100" href="#">View documentation</a>
            </div>
            </div>
        </div>
    </>
  )
}
