import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function ViewPhDStudent() {
  /*  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Submitted");
    const data = new FormData(event.currentTarget);
    const userEmail = data.get("email");
    const userPassword = data.get("password");
    axios
      .post("http://localhost:3000/auth/login", {
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
      });
  }; */
  return (
    <>
      <Box>
        <FormControl color="secondary" fullWidth sx={{ marginBottom: "15px" }}>
          <InputLabel id="demo-simple-select-label">Registration No</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Registration No"
          >
            <MenuItem value="2507">FA13-PCS-003</MenuItem>
            <MenuItem value="2502">FA13-PCS-004</MenuItem>
            <MenuItem value="3573">FA13-PCS-007</MenuItem>
            <MenuItem value="3895">FA14-PCS-001</MenuItem>
            <MenuItem value="3696">FA14-PCS-003</MenuItem>
            <MenuItem value="3680">FA14-PCS-004</MenuItem>
            <MenuItem value="1436">FA14-PCS-007</MenuItem>
            <MenuItem value="3688">FA14-PCS-010</MenuItem>
            <MenuItem value="2510">FA14-PCS-011</MenuItem>
            <MenuItem value="3880">FA14-PCS-014</MenuItem>
            <MenuItem value="2511">FA15-PCS-001</MenuItem>
            <MenuItem value="3693">FA15-PCS-005</MenuItem>
            <MenuItem value="3681">FA15-PCS-007</MenuItem>
            <MenuItem value="3700">FA16-PCS-001</MenuItem>
            <MenuItem value="3652">FA16-PCS-003</MenuItem>
            <MenuItem value="1385">FA16-PCS-004</MenuItem>
            <MenuItem value="1434">FA16-PCS-007</MenuItem>
            <MenuItem value="5924">FA17-PCS-001</MenuItem>
            <MenuItem value="2512">FA17-PCS-003</MenuItem>
            <MenuItem value="3679">FA17-PCS-005</MenuItem>
            <MenuItem value="3711">FA17-PCS-007</MenuItem>
            <MenuItem value="3596">FA17-PCS-008</MenuItem>
            <MenuItem value="3572">FA17-PCS-013</MenuItem>
            <MenuItem value="1387">FA17-PCS-014</MenuItem>
            <MenuItem value="1499">FA18-PCS-001</MenuItem>
            <MenuItem value="3581">FA18-PCS-002</MenuItem>
            <MenuItem value="3722">FA18-PCS-004</MenuItem>
            <MenuItem value="3685">FA19-PCS-002</MenuItem>
            <MenuItem value="5920">FA20-PCS-002</MenuItem>
            <MenuItem value="6070">FA20-PCS-003</MenuItem>
            <MenuItem value="6071">FA20-PCS-004</MenuItem>
            <MenuItem value="3584">SP00-PCS-000</MenuItem>
            <MenuItem value="1487">SP14-PCS-007</MenuItem>
            <MenuItem value="3701">SP15-PCS-001</MenuItem>
            <MenuItem value="3575">SP15-PCS-002</MenuItem>
            <MenuItem value="1383">SP15-PCS-003</MenuItem>
            <MenuItem value="1428">SP15-PCS-004</MenuItem>
            <MenuItem value="6098">SP15-PCS-005</MenuItem>
            <MenuItem value="2514">SP15-PCS-006</MenuItem>
            <MenuItem value="2503">SP17-PCS-001</MenuItem>
            <MenuItem value="3594">SP17-PCS-005</MenuItem>
            <MenuItem value="3697">SP18-PCS-001</MenuItem>
            <MenuItem value="239">SP18-PCS-003</MenuItem>
            <MenuItem value="3576">SP18-PCS-004</MenuItem>
            <MenuItem value="3689">SP19-PCS-001</MenuItem>
            <MenuItem value="5917">SP19-PCS-004</MenuItem>
            <MenuItem value="3698">SP20-PCS-001</MenuItem>
            <MenuItem value="4918">SP20-PCS-003</MenuItem>
            <MenuItem value="5923">SP21-PCS-001</MenuItem>
            <MenuItem value="5918">SP21-PCS-003</MenuItem>
            <MenuItem value="5916">SP21-PCS-005</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <div className="col-lg-12 mt-2">
        <table
          className="small-12 medium-12 large-12 columns table table-sm"
          cellSpacing={0}
          cellPadding={4}
          id="ContentPlaceHolder1_DetailsView1"
          style={{
            color: "#333333",
            height: "50px",
            borderCollapse: "collapse",
          }}
        >
          <tbody>
            <tr style={{ color: "#333333", backgroundColor: "#F7F6F3" }}>
              <td
                valign="top"
                style={{
                  backgroundColor: "#E9ECF1",
                  fontWeight: "bold",
                  width: "25%",
                }}
              >
                Registration No
              </td>
              <td>FA13-PCS-002</td>
            </tr>
            <tr style={{ backgroundColor: "White" }}>
              <td
                valign="top"
                style={{
                  backgroundColor: "#E9ECF1",
                  fontWeight: "bold",
                  width: "25%",
                }}
              >
                Name
              </td>
              <td>Rubina Ghazal</td>
            </tr>
            <tr style={{ color: "#333333", backgroundColor: "#F7F6F3" }}>
              <td
                valign="top"
                style={{
                  backgroundColor: "#E9ECF1",
                  fontWeight: "bold",
                  width: "25%",
                }}
              >
                Email
              </td>
              <td>rubinaghazal78@hotmail.com</td>
            </tr>
            <tr style={{ backgroundColor: "White" }}>
              <td
                valign="top"
                style={{
                  backgroundColor: "#E9ECF1",
                  fontWeight: "bold",
                  width: "25%",
                }}
              >
                Program
              </td>
              <td>PhD (CS)</td>
            </tr>
            <tr style={{ color: "#333333", backgroundColor: "#F7F6F3" }}>
              <td
                valign="top"
                style={{
                  backgroundColor: "#E9ECF1",
                  fontWeight: "bold",
                  width: "25%",
                }}
              >
                Course work completion
              </td>
              <td>FA14</td>
            </tr>
            <tr style={{ backgroundColor: "White" }}>
              <td
                valign="top"
                style={{
                  backgroundColor: "#E9ECF1",
                  fontWeight: "bold",
                  width: "25%",
                }}
              >
                Comprehensive Exam
              </td>
              <td>FA16</td>
            </tr>
            <tr style={{ color: "#333333", backgroundColor: "#F7F6F3" }}>
              <td
                valign="top"
                style={{
                  backgroundColor: "#E9ECF1",
                  fontWeight: "bold",
                  width: "25%",
                }}
              >
                Synopsis Status
              </td>
              <td>Accepted</td>
            </tr>
            <tr style={{ backgroundColor: "White" }}>
              <td
                valign="top"
                style={{
                  backgroundColor: "#E9ECF1",
                  fontWeight: "bold",
                  width: "25%",
                }}
              >
                Thesis Status
              </td>
              <td>N/A</td>
            </tr>
            <tr style={{ color: "#333333", backgroundColor: "#F7F6F3" }}>
              <td
                valign="top"
                style={{
                  backgroundColor: "#E9ECF1",
                  fontWeight: "bold",
                  width: "25%",
                }}
              >
                Foreign Submission
              </td>
              <td>N/A</td>
            </tr>
            <tr style={{ backgroundColor: "White" }}>
              <td
                valign="top"
                style={{
                  backgroundColor: "#E9ECF1",
                  fontWeight: "bold",
                  width: "25%",
                }}
              >
                GAT Subject
              </td>
              <td>N/A</td>
            </tr>
            <tr style={{ color: "#333333", backgroundColor: "#F7F6F3" }}>
              <td
                valign="top"
                style={{
                  backgroundColor: "#E9ECF1",
                  fontWeight: "bold",
                  width: "25%",
                }}
              >
                Status
              </td>
              <td>&nbsp;</td>
            </tr>
            <tr style={{ backgroundColor: "White" }}>
              <td
                valign="top"
                style={{
                  backgroundColor: "#E9ECF1",
                  fontWeight: "bold",
                  width: "25%",
                }}
              >
                Supervisor
              </td>
              <td>Dr. Malik Ahmad Kamran</td>
            </tr>
            <tr style={{ color: "#333333", backgroundColor: "#F7F6F3" }}>
              <td
                valign="top"
                style={{
                  backgroundColor: "#E9ECF1",
                  fontWeight: "bold",
                  width: "25%",
                }}
              >
                Co-Supervisor
              </td>
              <td>Dr. Basit Raza</td>
            </tr>
            <tr style={{ backgroundColor: "White" }}>
              <td
                valign="top"
                style={{
                  backgroundColor: "#E9ECF1",
                  fontWeight: "bold",
                  width: "25%",
                }}
              >
                Other Issue
              </td>
              <td>&nbsp;</td>
            </tr>
            <tr style={{ color: "#333333", backgroundColor: "#F7F6F3" }}>
              <td
                valign="top"
                style={{
                  backgroundColor: "#E9ECF1",
                  fontWeight: "bold",
                  width: "25%",
                }}
              >
                Synopsis File
              </td>
              <td>
                <a href="Files/PhD/Synopsis/" target="_blank" />
              </td>
            </tr>
            <tr style={{ backgroundColor: "White" }}>
              <td
                valign="top"
                style={{
                  backgroundColor: "#E9ECF1",
                  fontWeight: "bold",
                  width: "25%",
                }}
              >
                Synopsis Presentation
              </td>
              <td>
                <a href="Files/PhD/Synopsis/Presentations/" target="_blank" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
