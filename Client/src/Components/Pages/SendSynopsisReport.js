import React from "react";

import { programWiseData, programWiseHeader } from "../DummyData/DummyData";
import DataTable from "../UI/TableUI";

export default function SendSynopsisReport() {
  return (
    <div class="pcoded-content">
      {/* Page-header ends */}
      <div className="pcoded-inner-content">
        {/* Main-body start */}
        <div className="main-body ">
          <div className="page-wrapper dashboardHeight">
            {/* Page-body start */}
            <div className="page-body">
              <div className="col-md-2 col-sm-4">Send Synopsis Report :</div>
              <div className="row">
                <div className="col-md-3">
                  <h5>Track :</h5>
                  <select className="form-control form-control-sm">
                    <option selected="selected" value="Regular">
                      Regular
                    </option>
                    <option value="By Publication">By Publication</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <h5>Program :</h5>
                  <select className="form-control form-control-sm">
                    <option selected="selected" value="14">
                      MS (CS)
                    </option>
                    <option value="15">MS (SE)</option>
                    <option value="16">MS (IS)</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <h5>Session :</h5>
                  <select className="form-control form-control-sm">
                    <option selected="selected" value="1036">
                      FALL 2021
                    </option>
                  </select>
                </div>
                <div className="col-md-3">
                  <h5>Registration No :</h5>
                  <select className="form-control form-control-sm">
                    <option selected="selected" value="5944">
                      FA17-RSE-002
                    </option>
                    <option value="6001">FA19-RCS-008</option>
                    <option value="5959">FA19-RCS-017</option>
                    <option value="5951">FA19-RCS-021</option>
                    <option value="6029">FA19-RCS-023</option>
                    <option value="5987">FA19-RCS-024</option>
                    <option value="5960">FA19-RCS-026</option>
                    <option value="6101">FA19-RCS-030</option>
                    <option value="6015">FA19-RCS-033</option>
                    <option value="6048">FA19-RCS-046</option>
                    <option value="5937">FA19-RCS-050</option>
                    <option value="6055">FA19-RCS-058</option>
                    <option value="5942">FA19-RCS-066</option>
                    <option value="6007">FA19-RCS-075</option>
                    <option value="5980">FA19-RCS-089</option>
                    <option value="6086">FA20-RCS-015</option>
                    <option value="5936">FA20-RCS-020</option>
                    <option value="5930">FA20-RCS-021</option>
                    <option value="6088">FA20-RCS-034</option>
                    <option value="5978">SP18-RCS-013</option>
                    <option value="1495">SP18-RCS-034</option>
                    <option value="5950">SP19-RCS-009</option>
                    <option value="6012">SP19-RCS-014</option>
                    <option value="5963">SP19-RCS-018</option>
                    <option value="6013">SP19-RCS-021</option>
                    <option value="5974">SP19-RCS-032</option>
                    <option value="6033">SP19-RCS-045</option>
                    <option value="5966">SP19-RCS-048</option>
                    <option value="5956">SP19-RCS-051</option>
                    <option value="6011">SP19-RCS-059</option>
                    <option value="6064">SP20-RCS-005</option>
                    <option value="5932">SP20-RCS-013</option>
                    <option value="6073">SP20-RCS-016</option>
                    <option value="6014">SP20-RCS-054</option>
                    <option value="6068">SP20-RCS-065</option>
                    <option value="6066">SP20-RCS-069</option>
                    <option value="6078">SP20-RCS-070</option>
                    <option value="6016">SP20-RCS-072</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-12 mt-2">
                <DataTable header={programWiseHeader} data={programWiseData} />
                {/* <Table
                  columns={columns}
                  data={[]}
                  footer={true}
                  isLoading={false}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
