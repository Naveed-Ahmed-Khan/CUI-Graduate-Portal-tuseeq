import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function EvaluateThesisMS() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Submitted");
    const data = new FormData(event.currentTarget);
    const userEmail = data.get("email");
    const userPassword = data.get("password");
    /*  axios.post("http://localhost:3000/auth/login", {
        email: userEmail,
        password: userPassword,
      })
      .then((res) => {
        const data = res.data.user;
	console.log(data);
        navigate("/Dashboard");
      })
      .catch((err) => {
        console.log(err);
      }); */
  };
  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <Box sx={{ minWidth: 120, marginBottom: "15px" }}>
        <FormControl fullWidth color="secondary">
          <InputLabel id="demo-simple-select-label">Program</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            //value={Program}
            label="Program"
            //onChange={handleChange}
          >
            <MenuItem value={15}>MS (SE)</MenuItem>
            <MenuItem value={15}>MS (IS)</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ minWidth: 120, marginBottom: "15px" }}>
        <FormControl fullWidth color="secondary">
          <InputLabel id="demo-simple-select-label">Session</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            //value={Program}
            label="Session"
            //onChange={handleChange}
          >
            <MenuItem value={12}>Fall 2021</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ minWidth: 120, marginBottom: "15px" }}>
        <FormControl fullWidth color="secondary">
          <InputLabel id="demo-simple-select-label">Registration No</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            //value={Program}
            label="Registration No"
            //onChange={handleChange}
          >
            <MenuItem selected="selected" value="5944">
              FA17-RSE-002
            </MenuItem>
            <MenuItem value="6001">FA19-RCS-008</MenuItem>
            <MenuItem value="5959">FA19-RCS-017</MenuItem>
            <MenuItem value="5951">FA19-RCS-021</MenuItem>
            <MenuItem value="6029">FA19-RCS-023</MenuItem>
            <MenuItem value="5987">FA19-RCS-024</MenuItem>
            <MenuItem value="5960">FA19-RCS-026</MenuItem>
            <MenuItem value="6101">FA19-RCS-030</MenuItem>
            <MenuItem value="6015">FA19-RCS-033</MenuItem>
            <MenuItem value="6048">FA19-RCS-046</MenuItem>
            <MenuItem value="5937">FA19-RCS-050</MenuItem>
            <MenuItem value="6055">FA19-RCS-058</MenuItem>
            <MenuItem value="5942">FA19-RCS-066</MenuItem>
            <MenuItem value="6007">FA19-RCS-075</MenuItem>
            <MenuItem value="5980">FA19-RCS-089</MenuItem>
            <MenuItem value="6086">FA20-RCS-015</MenuItem>
            <MenuItem value="5936">FA20-RCS-020</MenuItem>
            <MenuItem value="5930">FA20-RCS-021</MenuItem>
            <MenuItem value="6088">FA20-RCS-034</MenuItem>
            <MenuItem value="5978">SP18-RCS-013</MenuItem>
            <MenuItem value="1495">SP18-RCS-034</MenuItem>
            <MenuItem value="5950">SP19-RCS-009</MenuItem>
            <MenuItem value="6012">SP19-RCS-014</MenuItem>
            <MenuItem value="5963">SP19-RCS-018</MenuItem>
            <MenuItem value="6013">SP19-RCS-021</MenuItem>
            <MenuItem value="5974">SP19-RCS-032</MenuItem>
            <MenuItem value="6033">SP19-RCS-045</MenuItem>
            <MenuItem value="5966">SP19-RCS-048</MenuItem>
            <MenuItem value="5956">SP19-RCS-051</MenuItem>
            <MenuItem value="6011">SP19-RCS-059</MenuItem>
            <MenuItem value="6064">SP20-RCS-005</MenuItem>
            <MenuItem value="5932">SP20-RCS-013</MenuItem>
            <MenuItem value="6073">SP20-RCS-016</MenuItem>
            <MenuItem value="6014">SP20-RCS-054</MenuItem>
            <MenuItem value="6068">SP20-RCS-065</MenuItem>
            <MenuItem value="6066">SP20-RCS-069</MenuItem>
            <MenuItem value="6078">SP20-RCS-070</MenuItem>
            <MenuItem value="6016">SP20-RCS-072</MenuItem>
          </Select>
        </FormControl>
      </Box>
      {/*  <div className="row">
                <div className="col-md-12 mt-3">
                  <div className="border">
                    <table
                      className="small-12 medium-12 large-12 columns table table-sm"
                      cellSpacing={0}
                      cellPadding={4}
                      id="ContentPlaceHolder1_DetailsView1"
                      style={{ color: "#333333", borderCollapse: "collapse" }}
                    >
                      <tbody>
                        <tr
                          style={{
                            color: "#333333",
                            backgroundColor: "#F7F6F3",
                          }}
                        >
                          <td
                            valign="top"
                            style={{
                              backgroundColor: "#E9ECF1",
                              fontWeight: "bold",
                              width: "20%",
                            }}
                          >
                            Registration No
                          </td>
                          <td>FA17-RSE-002</td>
                        </tr>
                        <tr style={{ backgroundColor: "White" }}>
                          <td
                            valign="top"
                            style={{
                              backgroundColor: "#E9ECF1",
                              fontWeight: "bold",
                              width: "20%",
                            }}
                          >
                            Name
                          </td>
                          <td>Anam Zahra</td>
                        </tr>
                        <tr
                          style={{
                            color: "#333333",
                            backgroundColor: "#F7F6F3",
                          }}
                        >
                          <td
                            valign="top"
                            style={{
                              backgroundColor: "#E9ECF1",
                              fontWeight: "bold",
                              width: "20%",
                            }}
                          >
                            Email
                          </td>
                          <td>FA17-RSE-002@isbstudent.comsats.edu.pk</td>
                        </tr>
                        <tr style={{ backgroundColor: "White" }}>
                          <td
                            valign="top"
                            style={{
                              backgroundColor: "#E9ECF1",
                              fontWeight: "bold",
                              width: "20%",
                            }}
                          >
                            Program
                          </td>
                          <td>MS (CS)</td>
                        </tr>
                        <tr
                          style={{
                            color: "#333333",
                            backgroundColor: "#F7F6F3",
                          }}
                        >
                          <td
                            valign="top"
                            style={{
                              backgroundColor: "#E9ECF1",
                              fontWeight: "bold",
                              width: "20%",
                            }}
                          >
                            Course work completion
                          </td>
                          <td>SPRING 2019</td>
                        </tr>
                        <tr style={{ backgroundColor: "White" }}>
                          <td
                            valign="top"
                            style={{
                              backgroundColor: "#E9ECF1",
                              fontWeight: "bold",
                              width: "20%",
                            }}
                          >
                            Comprehensive Exam
                          </td>
                          <td>N/A</td>
                        </tr>
                        <tr
                          style={{
                            color: "#333333",
                            backgroundColor: "#F7F6F3",
                          }}
                        >
                          <td
                            valign="top"
                            style={{
                              backgroundColor: "#E9ECF1",
                              fontWeight: "bold",
                              width: "20%",
                            }}
                          >
                            Synopsis Status
                          </td>
                          <td>N/A</td>
                        </tr>
                        <tr style={{ backgroundColor: "White" }}>
                          <td
                            valign="top"
                            style={{
                              backgroundColor: "#E9ECF1",
                              fontWeight: "bold",
                              width: "20%",
                            }}
                          >
                            Thesis Title
                          </td>
                          <td>
                            A LSTM-based Deep Neural Network-Oriented Test Case
                            Prioritization Technique in Continuous Integration
                            (CI) Software Development Practice.
                          </td>
                        </tr>
                        <tr
                          style={{
                            color: "#333333",
                            backgroundColor: "#F7F6F3",
                          }}
                        >
                          <td
                            valign="top"
                            style={{
                              backgroundColor: "#E9ECF1",
                              fontWeight: "bold",
                              width: "20%",
                            }}
                          >
                            Area of Specialization
                          </td>
                          <td>Software Engineering</td>
                        </tr>
                        <tr style={{ backgroundColor: "White" }}>
                          <td
                            valign="top"
                            style={{
                              backgroundColor: "#E9ECF1",
                              fontWeight: "bold",
                              width: "20%",
                            }}
                          >
                            Foreign Submission
                          </td>
                          <td>N/A</td>
                        </tr>
                        <tr
                          style={{
                            color: "#333333",
                            backgroundColor: "#F7F6F3",
                          }}
                        >
                          <td
                            valign="top"
                            style={{
                              backgroundColor: "#E9ECF1",
                              fontWeight: "bold",
                              width: "20%",
                            }}
                          >
                            GAT Subject
                          </td>
                          <td>N/A</td>
                        </tr>
                        <tr style={{ backgroundColor: "White" }}>
                          <td
                            valign="top"
                            style={{
                              backgroundColor: "#E9ECF1",
                              fontWeight: "bold",
                              width: "20%",
                            }}
                          >
                            Status
                          </td>
                          <td>&nbsp;</td>
                        </tr>
                        <tr
                          style={{
                            color: "#333333",
                            backgroundColor: "#F7F6F3",
                          }}
                        >
                          <td
                            valign="top"
                            style={{
                              backgroundColor: "#E9ECF1",
                              fontWeight: "bold",
                              width: "20%",
                            }}
                          >
                            Supervisor
                          </td>
                          <td>Dr. Saif ur Rehman Khan</td>
                        </tr>
                        <tr style={{ backgroundColor: "White" }}>
                          <td
                            valign="top"
                            style={{
                              backgroundColor: "#E9ECF1",
                              fontWeight: "bold",
                              width: "20%",
                            }}
                          >
                            Co-Supervisor
                          </td>
                          <td>Dr. Inayat-ur-Rehman</td>
                        </tr>
                        <tr
                          style={{
                            color: "#333333",
                            backgroundColor: "#F7F6F3",
                          }}
                        >
                          <td
                            valign="top"
                            style={{
                              backgroundColor: "#E9ECF1",
                              fontWeight: "bold",
                              width: "20%",
                            }}
                          >
                            Synopsis File
                          </td>
                          <td>
                            <a
                              href="Files/MS/Synopsis/Synopsis_FA17-RSE-002.pdf"
                              target="_blank"
                            >
                              Synopsis_FA17-RSE-002.pdf
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div> */}
      <div className="row">
        <div className="col-md-12 p-4">
          {" "}
          <table style={{ width: "100%" }} className="table table-sm">
            <tbody>
              <tr>
                <th colSpan={4}>
                  <b>
                    After in depth examination of the manuscript following are
                    the recommendations of GAC member
                  </b>
                </th>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  The candidate is recommended to do <b>minor</b> changings.
                </td>
                <td>A Candidate has to submit a manuscript within 1 week.</td>
                <td>
                  <input
                    id="ContentPlaceHolder1_rbtnMinor"
                    type="radio"
                    name="ctl00$ContentPlaceHolder1$againcb"
                    defaultValue="rbtnMinor"
                    defaultChecked="checked"
                  />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  The candidate is recommended to do <b>major</b> changings.
                </td>
                <td>Candidate has to re-appear in next semester. </td>
                <td>
                  <input
                    id="ContentPlaceHolder1_rbtnMajor"
                    type="radio"
                    name="ctl00$ContentPlaceHolder1$againcb"
                    defaultValue="rbtnMajor"
                    /* onclick="javascript:setTimeout('__doPostBack
                    (\'ctl00$ContentPlaceHolder1$rbtnMajor\',\'\')', 0)" */
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <h5>Comments:</h5>
          <textarea style={{ width: "100%", height: "200px" }} />
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            size="large"
          >
            Submit
          </Button>
        </div>
      </div>
    </Box>
  );
}
