import React from "react";

export default function ManagePhdDeadline() {
  return (
    <div class="pcoded-content">
      {/* Page-header ends */}
      <div className="pcoded-inner-content">
        {/* Main-body start */}
        <div className="main-body ">
          <div className="page-wrapper dashboardHeight">
            {/* Page-body start */}
            <div className="page-body">
              <div className="row">
                <div className="col-md-2 col-sm-4">Program :</div>
                <div className="col-md-2 col-sm-4">PhD</div>
                <div className="col-md-2 col-sm-4">Type:</div>
              </div>
              <div className="page-body">
                <div className="row">
                  <div className="col-md-2 col-sm-4">Current Deadline :</div>
                  <div className="col-md-2 col-sm-4">
                    New Submission Deadline :
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
