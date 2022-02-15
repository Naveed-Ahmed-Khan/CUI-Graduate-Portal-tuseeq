import React from "react";

export default function ManageThesisScheduleBulk() {
  const alertHandler = () => {
    alert("Schedule Updated!");
  };

  return (
    <div class="pcoded-content">
      {/* Page-header ends */}
      <div className="pcoded-inner-content">
        {/* Main-body start */}
        <div className="main-body ">
          <div className="page-wrapper dashboardHeight">
            {/* Page-body start */}
            <div className="page-body">
              <div className="col-md-2 col-sm-4">View Bulk Schedule :</div>
              <div className="row">
                <div className="col-md-2 col-sm-4">Session :</div>
                <select className="form-control form-control-sm  col-md-10 col-sm-8">
                  <option selected="selected" value="none">
                    SP21-PCS-005
                  </option>
                </select>
              </div>
              <div className="row">
                <div className="col-md-2 col-sm-4">Date :</div>
                <select className="form-control form-control-sm  col-md-10 col-sm-8">
                  <option selected="selected" value="none">
                    SP21-PCS-005
                  </option>
                </select>
              </div>
              <div className="row">
                <div className="col-md-2 col-sm-4">Duration :</div>
                <select className="form-control form-control-sm  col-md-10 col-sm-8">
                  <option selected="selected" value="none">
                    SP21-PCS-005
                  </option>
                </select>
              </div>
              <div className="row">
                <div className="col-md-2 col-sm-4">Continuous :</div>
                <select className="form-control form-control-sm  col-md-10 col-sm-8">
                  <option selected="selected" value="none">
                    SP21-PCS-005
                  </option>
                </select>
              </div>
              <div className="row">
                <div className="col-md-2 col-sm-4">Email :</div>
                <select className="form-control form-control-sm  col-md-10 col-sm-8">
                  <option selected="selected" value="none">
                    SP21-PCS-005
                  </option>
                </select>
              </div>

              <button
                className="btn btn-sm btn-dark"
                type="number"
                min={0}
                name="tutionFeePaid"
                // value={saveModal.tutionFeePaid}
                // onChange={this.changeHandler}
                onClick={alertHandler}
              >
                Update Schedule
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
