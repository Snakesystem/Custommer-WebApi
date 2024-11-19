import { Link } from "react-router-dom";

export default function NotesPage() {
  return (
    <div className="container-fluid py-4">
      <div className="card shadow-lg mx-4 ">
      <div className="card-body p-3">
        <div className="row gx-4">
          <div className="col-auto">
            <div className="avatar avatar-xl position-relative">
              <img src="/img/team-1.jpg" alt="profile_image" className="w-100 border-radius-lg shadow-sm"/>
            </div>
          </div>
          <div className="col-auto my-auto">
            <div className="h-100">
              <h5 className="mb-1">
                Sayo Kravits
              </h5>
              <p className="mb-0 font-weight-bold text-sm">
                Public Relations
              </p>
            </div>
          </div>
          <div className="col-auto my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3 notes-project ">
            <div className="nav-wrapper position-relative end-0">
              <ul className="nav-pills nav-fill p-1 horizontal-list">
                <li className="nav-item" >
                  <Link to="#" className=" active nav-link mb-0 px-0 py-1 d-flex align-items-center justify-content-center " data-bs-toggle="tab" role="tab" aria-selected="true">
                    <span className="">App</span>
                  </Link>
                </li>
                <li className="nav-item" >
                  <Link to="#" className="nav-link mb-0 px-0 py-1 d-flex align-items-center justify-content-center " data-bs-toggle="tab" role="tab" aria-selected="false">
                    <span className="">Messages</span>
                  </Link>
                </li>
                <li className="nav-item" >
                  <Link to="#" className="nav-link mb-0 px-0 py-1 d-flex align-items-center justify-content-center " data-bs-toggle="tab" role="tab" aria-selected="false">
                    <span className="">Settings</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header pb-0">
              <div className="d-flex align-items-center">
                <p className="mb-0">Catatan Sayo Kravits</p>
                <button className="btn btn-primary btn-sm ms-auto px-3">
                  <i className="bi bi-search me-2"></i> <span>Filter</span>
                </button>
              </div>
            </div>
            <div className="card-body">
              <table>
                <thead>
                  <tr>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Catatan</th>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Tanggal</th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="d-flex px-2 py-1">
                        <div>
                          <img src="/img/team-1.jpg" className="avatar avatar-sm me-3" alt="user1"/>
                        </div>  
                        <div className="d-flex flex-column justify-content-center">
                          <h6 className="mb-0 text-sm">Sayo Kravits</h6>
                          <p className="text-xs text-secondary mb-0">Public Relations</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="text-xs font-weight-bold mb-0">10/10/2021</p>
                    </td>
                    <td className="align-middle text-center text-sm">
                      <span className="badge badge-sm bg-gradient-success">Online</span>
                    </td>
                    <td className="align-middle">
                      <Link to="#" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                        Edit
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-profile">
            <img src="/img/bg-profile.jpg" alt="Image placeholder" className="card-img-top"/>
            <div className="card-header text-center border-0 pt-0 pt-lg-2 pb-4 pb-lg-3">
              <h4>Masukan catatan</h4>
            </div>
            <div className="card-body pt-0">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="example-text-input" className="form-control-label text-uppercase">Catatan</label>
                    <input className="form-control" type="date" disabled={true} value={new Date().toISOString().split('T')[0]}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="example-text-input" className="form-control-label text-uppercase">Catatan</label>
                    <textarea name="" id="" rows={5} className="form-control"></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
