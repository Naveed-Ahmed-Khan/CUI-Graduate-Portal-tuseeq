import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";

export default function ViewMSStudent() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Submitted");
    const data = new FormData(event.currentTarget);
    const userEmail = data.get("email");
    const userPassword = data.get("password");
    /* axios.post("http://localhost:3000/auth/login", {
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
    <>
      <Box sx={{ minWidth: 120, marginBottom: "15px" }}>
        <FormControl fullWidth>
          <InputLabel color="secondary" id="demo-simple-select-label">
            Registration
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            //value={Registration}
            label="Registration"
            color="secondary"
            //onChange={handleChange}
          >
            <MenuItem selected="selected" value="2501">
              FA15-RCS-023
            </MenuItem>
            <MenuItem value="1476">FA15-RCS-029</MenuItem>
            <MenuItem value="1364">FA15-RIS-002</MenuItem>
            <MenuItem value="243">FA15-RIS-012</MenuItem>
            <MenuItem value="1384">FA16-RCS-002</MenuItem>
            <MenuItem value="1471">FA16-RCS-003</MenuItem>
            <MenuItem value="1418">FA16-RCS-006</MenuItem>
            <MenuItem value="3627">FA16-RCS-010</MenuItem>
            <MenuItem value="1419">FA16-RCS-011</MenuItem>
            <MenuItem value="1416">FA16-RCS-013</MenuItem>
            <MenuItem value="3520">FA16-RCS-029</MenuItem>
            <MenuItem value="3516">FA16-RCS-030</MenuItem>
            <MenuItem value="1403">FA16-RIS-001</MenuItem>
            <MenuItem value="1420">FA16-RIS-007</MenuItem>
            <MenuItem value="1313">FA16-RIS-016</MenuItem>
            <MenuItem value="1404">FA16-RIS-017</MenuItem>
            <MenuItem value="1287">FA16-RSE-003</MenuItem>
            <MenuItem value="1394">FA16-RSE-004</MenuItem>
            <MenuItem value="4909">FA16-RSE-006</MenuItem>
            <MenuItem value="3649">FA16-RSE-007</MenuItem>
            <MenuItem value="3694">FA16-RSE-009</MenuItem>
            <MenuItem value="3639">FA16-RSE-010</MenuItem>
            <MenuItem value="3620">FA16-RSE-011</MenuItem>
            <MenuItem value="3624">FA16-RSE-017</MenuItem>
            <MenuItem value="1393">FA17-RCS-002</MenuItem>
            <MenuItem value="1326">FA17-RCS-007</MenuItem>
            <MenuItem value="1367">FA17-RCS-011</MenuItem>
            <MenuItem value="1261">FA17-RCS-014</MenuItem>
            <MenuItem value="1341">FA17-RCS-016</MenuItem>
            <MenuItem value="1388">FA17-RCS-017</MenuItem>
            <MenuItem value="1401">FA17-RCS-020</MenuItem>
            <MenuItem value="2486">FA17-RCS-022</MenuItem>
            <MenuItem value="1454">FA17-RCS-024</MenuItem>
            <MenuItem value="1342">FA17-RCS-026</MenuItem>
            <MenuItem value="2480">FA17-RCS-028</MenuItem>
            <MenuItem value="251">FA17-RCS-029</MenuItem>
            <MenuItem value="1304">FA17-RCS-031</MenuItem>
            <MenuItem value="1355">FA17-RCS-032</MenuItem>
            <MenuItem value="1339">FA17-RCS-033</MenuItem>
            <MenuItem value="1359">FA17-RCS-034</MenuItem>
            <MenuItem value="1317">FA17-RCS-038</MenuItem>
            <MenuItem value="2460">FA17-RIS-004</MenuItem>
            <MenuItem value="3562">FA17-RIS-007</MenuItem>
            <MenuItem value="3568">FA17-RIS-008</MenuItem>
            <MenuItem value="1330">FA17-RIS-015</MenuItem>
            <MenuItem value="1526">FA17-RIS-016</MenuItem>
            <MenuItem value="235">FA17-RIS-017</MenuItem>
            <MenuItem value="1343">FA17-RIS-018</MenuItem>
            <MenuItem value="1258">FA17-RIS-021</MenuItem>
            <MenuItem value="3692">FA17-RIS-022</MenuItem>
            <MenuItem value="1369">FA17-RIS-027</MenuItem>
            <MenuItem value="1353">FA17-RIS-031</MenuItem>
            <MenuItem value="1340">FA17-RIS-032</MenuItem>
            <MenuItem value="3881">FA17-RSE-001</MenuItem>
            <MenuItem value="5944">FA17-RSE-002</MenuItem>
            <MenuItem value="1417">FA17-RSE-008</MenuItem>
            <MenuItem value="3567">FA17-RSE-010</MenuItem>
            <MenuItem value="1414">FA17-RSE-012</MenuItem>
            <MenuItem value="234">FA17-RSE-014</MenuItem>
            <MenuItem value="1354">FA17-RSE-015</MenuItem>
            <MenuItem value="1365">FA17-RSE-017</MenuItem>
            <MenuItem value="1508">FA17-RSE-019</MenuItem>
            <MenuItem value="2473">FA17-RSE-020</MenuItem>
            <MenuItem value="2479">FA17-RSE-026</MenuItem>
            <MenuItem value="1349">FA17-RSE-033</MenuItem>
            <MenuItem value="1409">FA17-RSE-034</MenuItem>
            <MenuItem value="237">FA17-RSE-039</MenuItem>
            <MenuItem value="1483">FA17-RSE-041</MenuItem>
            <MenuItem value="1334">FA17-RSE-044</MenuItem>
            <MenuItem value="3643">FA18-RCS-002</MenuItem>
            <MenuItem value="3800">FA18-RCS-003</MenuItem>
            <MenuItem value="1504">FA18-RCS-006</MenuItem>
            <MenuItem value="1463">FA18-RCS-009</MenuItem>
            <MenuItem value="3744">FA18-RCS-011</MenuItem>
            <MenuItem value="3759">FA18-RCS-012</MenuItem>
            <MenuItem value="3757">FA18-RCS-014</MenuItem>
            <MenuItem value="1462">FA18-RCS-016</MenuItem>
            <MenuItem value="3756">FA18-RCS-022</MenuItem>
            <MenuItem value="3768">FA18-RCS-023</MenuItem>
            <MenuItem value="1502">FA18-RCS-024</MenuItem>
            <MenuItem value="3741">FA18-RCS-026</MenuItem>
            <MenuItem value="3767">FA18-RCS-027</MenuItem>
            <MenuItem value="3748">FA18-RCS-033</MenuItem>
            <MenuItem value="3785">FA18-RCS-037</MenuItem>
            <MenuItem value="3640">FA18-RCS-040</MenuItem>
            <MenuItem value="3642">FA18-RCS-042</MenuItem>
            <MenuItem value="3758">FA18-RIS-002</MenuItem>
            <MenuItem value="2496">FA18-RIS-004</MenuItem>
            <MenuItem value="2469">FA18-RIS-005</MenuItem>
            <MenuItem value="1451">FA18-RIS-006</MenuItem>
            <MenuItem value="2458">FA18-RIS-007</MenuItem>
            <MenuItem value="3853">FA18-RIS-009</MenuItem>
            <MenuItem value="2466">FA18-RIS-012</MenuItem>
            <MenuItem value="1492">FA18-RIS-013</MenuItem>
            <MenuItem value="3634">FA18-RIS-014</MenuItem>
            <MenuItem value="2465">FA18-RIS-015</MenuItem>
            <MenuItem value="2470">FA18-RIS-016</MenuItem>
            <MenuItem value="1496">FA18-RSE-001</MenuItem>
            <MenuItem value="2459">FA18-RSE-002</MenuItem>
            <MenuItem value="3658">FA18-RSE-006</MenuItem>
            <MenuItem value="3656">FA18-RSE-007</MenuItem>
            <MenuItem value="1466">FA18-RSE-008</MenuItem>
            <MenuItem value="3654">FA18-RSE-010</MenuItem>
            <MenuItem value="3660">FA18-RSE-011</MenuItem>
            <MenuItem value="1299">FA18-RSE-012</MenuItem>
            <MenuItem value="5981">FA18-RSE-015</MenuItem>
            <MenuItem value="1450">FA18-RSE-016</MenuItem>
            <MenuItem value="3651">FA18-RSE-021</MenuItem>
            <MenuItem value="3631">FA18-RSE-022</MenuItem>
            <MenuItem value="6084">FA18-RSE-023</MenuItem>
            <MenuItem value="3672">FA18-RSE-024</MenuItem>
            <MenuItem value="2482">FA18-RSE-028</MenuItem>
            <MenuItem value="1493">FA18-RSE-030</MenuItem>
            <MenuItem value="3667">FA18-RSE-032</MenuItem>
            <MenuItem value="1503">FA18-RSE-033</MenuItem>
            <MenuItem value="1512">FA18-RSE-034</MenuItem>
            <MenuItem value="1525">FA18-RSE-037</MenuItem>
            <MenuItem value="1460">FA18-RSE-038</MenuItem>
            <MenuItem value="1467">FA18-RSE-039</MenuItem>
            <MenuItem value="3770">FA19-RCS-002</MenuItem>
            <MenuItem value="3686">FA19-RCS-007</MenuItem>
            <MenuItem value="6001">FA19-RCS-008</MenuItem>
            <MenuItem value="5959">FA19-RCS-017</MenuItem>
            <MenuItem value="5977">FA19-RCS-018</MenuItem>
            <MenuItem value="5951">FA19-RCS-021</MenuItem>
            <MenuItem value="6029">FA19-RCS-023</MenuItem>
            <MenuItem value="5987">FA19-RCS-024</MenuItem>
            <MenuItem value="5960">FA19-RCS-026</MenuItem>
            <MenuItem value="6101">FA19-RCS-030</MenuItem>
            <MenuItem value="6015">FA19-RCS-033</MenuItem>
            <MenuItem value="3784">FA19-RCS-039</MenuItem>
            <MenuItem value="6048">FA19-RCS-046</MenuItem>
            <MenuItem value="5937">FA19-RCS-050</MenuItem>
            <MenuItem value="3811">FA19-RCS-052</MenuItem>
            <MenuItem value="3736">FA19-RCS-055</MenuItem>
            <MenuItem value="6055">FA19-RCS-058</MenuItem>
            <MenuItem value="3845">FA19-RCS-059</MenuItem>
            <MenuItem value="3801">FA19-RCS-063</MenuItem>
            <MenuItem value="5942">FA19-RCS-066</MenuItem>
            <MenuItem value="3809">FA19-RCS-073</MenuItem>
            <MenuItem value="6007">FA19-RCS-075</MenuItem>
            <MenuItem value="5934">FA19-RCS-083</MenuItem>
            <MenuItem value="5980">FA19-RCS-089</MenuItem>
            <MenuItem value="3602">FA19-RIS-002</MenuItem>
            <MenuItem value="3754">FA19-RIS-004</MenuItem>
            <MenuItem value="3734">FA19-RIS-009</MenuItem>
            <MenuItem value="5940">FA19-RIS-012</MenuItem>
            <MenuItem value="5971">FA19-RIS-014</MenuItem>
            <MenuItem value="6010">FA19-RIS-015</MenuItem>
            <MenuItem value="6005">FA19-RIS-016</MenuItem>
            <MenuItem value="6100">FA19-RIS-018</MenuItem>
            <MenuItem value="3731">FA19-RIS-020</MenuItem>
            <MenuItem value="3879">FA19-RIS-022</MenuItem>
            <MenuItem value="6049">FA19-RIS-026</MenuItem>
            <MenuItem value="5967">FA19-RIS-030</MenuItem>
            <MenuItem value="3738">FA19-RIS-032</MenuItem>
            <MenuItem value="3865">FA19-RIS-035</MenuItem>
            <MenuItem value="5938">FA19-RSE-011</MenuItem>
            <MenuItem value="6006">FA19-RSE-012</MenuItem>
            <MenuItem value="3848">FA19-RSE-014</MenuItem>
            <MenuItem value="3863">FA19-RSE-015</MenuItem>
            <MenuItem value="3810">FA19-RSE-016</MenuItem>
            <MenuItem value="3752">FA19-RSE-018</MenuItem>
            <MenuItem value="3847">FA19-RSE-020</MenuItem>
            <MenuItem value="5970">FA19-RSE-028</MenuItem>
            <MenuItem value="5985">FA19-RSE-036</MenuItem>
            <MenuItem value="5933">FA19-RSE-037</MenuItem>
            <MenuItem value="3862">FA19-RSE-041</MenuItem>
            <MenuItem value="6072">FA19-RSE-044</MenuItem>
            <MenuItem value="3849">FA19-RSE-048</MenuItem>
            <MenuItem value="3836">FA19-RSE-052</MenuItem>
            <MenuItem value="3850">FA19-RSE-058</MenuItem>
            <MenuItem value="3737">FA19-RSE-059</MenuItem>
            <MenuItem value="6086">FA20-RCS-015</MenuItem>
            <MenuItem value="5936">FA20-RCS-020</MenuItem>
            <MenuItem value="5930">FA20-RCS-021</MenuItem>
            <MenuItem value="6088">FA20-RCS-034</MenuItem>
            <MenuItem value="5979">FA20-RIS-002</MenuItem>
            <MenuItem value="5939">FA20-RIS-003</MenuItem>
            <MenuItem value="5927">FA20-RIS-005</MenuItem>
            <MenuItem value="5929">FA20-RIS-008</MenuItem>
            <MenuItem value="5928">FA20-RIS-010</MenuItem>
            <MenuItem value="5935">FA20-RIS-012</MenuItem>
            <MenuItem value="5926">FA20-RIS-014</MenuItem>
            <MenuItem value="5943">FA21-RCS-016</MenuItem>
            <MenuItem value="3586">SP00-RCS-000</MenuItem>
            <MenuItem value="1389">SP15-RCS-007</MenuItem>
            <MenuItem value="1269">SP15-RCS-015</MenuItem>
            <MenuItem value="1405">SP15-RIS-004</MenuItem>
            <MenuItem value="2522">SP16-RCS-001</MenuItem>
            <MenuItem value="1357">SP16-RCS-015</MenuItem>
            <MenuItem value="1372">SP16-RCS-020</MenuItem>
            <MenuItem value="1400">SP16-RCS-032</MenuItem>
            <MenuItem value="1371">SP16-RIS-001</MenuItem>
            <MenuItem value="2516">SP16-RIS-004</MenuItem>
            <MenuItem value="1331">SP16-RSE-001</MenuItem>
            <MenuItem value="1421">SP16-RSE-011</MenuItem>
            <MenuItem value="1522">SP17-RCS-001</MenuItem>
            <MenuItem value="1511">SP17-RCS-004</MenuItem>
            <MenuItem value="1422">SP17-RCS-009</MenuItem>
            <MenuItem value="1406">SP17-RCS-010</MenuItem>
            <MenuItem value="1391">SP17-RCS-011</MenuItem>
            <MenuItem value="1456">SP17-RCS-012</MenuItem>
            <MenuItem value="1412">SP17-RCS-014</MenuItem>
            <MenuItem value="1410">SP17-RCS-015</MenuItem>
            <MenuItem value="1411">SP17-RCS-016</MenuItem>
            <MenuItem value="1415">SP17-RCS-019</MenuItem>
            <MenuItem value="3695">SP17-RCS-023</MenuItem>
            <MenuItem value="2517">SP17-RCS-024</MenuItem>
            <MenuItem value="1307">SP17-RCS-025</MenuItem>
            <MenuItem value="1457">SP17-RCS-026</MenuItem>
            <MenuItem value="233">SP17-RIS-001</MenuItem>
            <MenuItem value="3566">SP17-RIS-006</MenuItem>
            <MenuItem value="3630">SP17-RIS-010</MenuItem>
            <MenuItem value="1282">SP17-RIS-011</MenuItem>
            <MenuItem value="3571">SP17-RIS-013</MenuItem>
            <MenuItem value="2485">SP17-RSE-001</MenuItem>
            <MenuItem value="1286">SP17-RSE-002</MenuItem>
            <MenuItem value="4913">SP17-RSE-011</MenuItem>
            <MenuItem value="1319">SP17-RSE-013</MenuItem>
            <MenuItem value="259">SP17-RSE-022</MenuItem>
            <MenuItem value="1402">SP17-RSE-025</MenuItem>
            <MenuItem value="3687">SP17-RSE-026</MenuItem>
            <MenuItem value="1423">SP17-RSE-029</MenuItem>
            <MenuItem value="236">SP18-RCS-002</MenuItem>
            <MenuItem value="240">SP18-RCS-005</MenuItem>
            <MenuItem value="1455">SP18-RCS-006</MenuItem>
            <MenuItem value="1378">SP18-RCS-009</MenuItem>
            <MenuItem value="1325">SP18-RCS-011</MenuItem>
            <MenuItem value="1312">SP18-RCS-012</MenuItem>
            <MenuItem value="5978">SP18-RCS-013</MenuItem>
            <MenuItem value="1376">SP18-RCS-014</MenuItem>
            <MenuItem value="232">SP18-RCS-016</MenuItem>
            <MenuItem value="1322">SP18-RCS-023</MenuItem>
            <MenuItem value="3776">SP18-RCS-025</MenuItem>
            <MenuItem value="1362">SP18-RCS-026</MenuItem>
            <MenuItem value="1318">SP18-RCS-027</MenuItem>
            <MenuItem value="1435">SP18-RCS-028</MenuItem>
            <MenuItem value="1482">SP18-RCS-031</MenuItem>
            <MenuItem value="3778">SP18-RCS-032</MenuItem>
            <MenuItem value="1323">SP18-RCS-033</MenuItem>
            <MenuItem value="1495">SP18-RCS-034</MenuItem>
            <MenuItem value="1277">SP18-RCS-035</MenuItem>
            <MenuItem value="2500">SP18-RCS-038</MenuItem>
            <MenuItem value="1520">SP18-RIS-001</MenuItem>
            <MenuItem value="255">SP18-RIS-002</MenuItem>
            <MenuItem value="1320">SP18-RIS-003</MenuItem>
            <MenuItem value="257">SP18-RIS-004</MenuItem>
            <MenuItem value="1347">SP18-RIS-005</MenuItem>
            <MenuItem value="1494">SP18-RIS-007</MenuItem>
            <MenuItem value="6052">SP18-RIS-009</MenuItem>
            <MenuItem value="1356">SP18-RIS-012</MenuItem>
            <MenuItem value="1352">SP18-RIS-016</MenuItem>
            <MenuItem value="6027">SP18-RIS-017</MenuItem>
            <MenuItem value="1516">SP18-RIS-020</MenuItem>
            <MenuItem value="2461">SP18-RIS-021</MenuItem>
            <MenuItem value="1507">SP18-RSE-001</MenuItem>
            <MenuItem value="1488">SP18-RSE-002</MenuItem>
            <MenuItem value="1491">SP18-RSE-004</MenuItem>
            <MenuItem value="1361">SP18-RSE-005</MenuItem>
            <MenuItem value="3592">SP18-RSE-007</MenuItem>
            <MenuItem value="1284">SP18-RSE-008</MenuItem>
            <MenuItem value="1472">SP18-RSE-009</MenuItem>
            <MenuItem value="2515">SP18-RSE-010</MenuItem>
            <MenuItem value="1509">SP18-RSE-011</MenuItem>
            <MenuItem value="3878">SP18-RSE-012</MenuItem>
            <MenuItem value="1368">SP18-RSE-013</MenuItem>
            <MenuItem value="1501">SP18-RSE-017</MenuItem>
            <MenuItem value="1461">SP18-RSE-018</MenuItem>
            <MenuItem value="1413">SP18-RSE-019</MenuItem>
            <MenuItem value="1500">SP18-RSE-020</MenuItem>
            <MenuItem value="1363">SP18-RSE-021</MenuItem>
            <MenuItem value="1288">SP18-RSE-023</MenuItem>
            <MenuItem value="1289">SP18-RSE-024</MenuItem>
            <MenuItem value="2481">SP18-RSE-026</MenuItem>
            <MenuItem value="1497">SP18-RSE-027</MenuItem>
            <MenuItem value="1295">SP18-RSE-029</MenuItem>
            <MenuItem value="1293">SP18-RSE-030</MenuItem>
            <MenuItem value="1390">SP18-RSE-031</MenuItem>
            <MenuItem value="1358">SP18-RSE-032</MenuItem>
            <MenuItem value="1510">SP18-RSE-033</MenuItem>
            <MenuItem value="3790">SP18-RSE-035</MenuItem>
            <MenuItem value="3798">SP19-RCS-001</MenuItem>
            <MenuItem value="3589">SP19-RCS-003</MenuItem>
            <MenuItem value="3665">SP19-RCS-005</MenuItem>
            <MenuItem value="3746">SP19-RCS-006</MenuItem>
            <MenuItem value="3650">SP19-RCS-008</MenuItem>
            <MenuItem value="5950">SP19-RCS-009</MenuItem>
            <MenuItem value="3638">SP19-RCS-010</MenuItem>
            <MenuItem value="3792">SP19-RCS-011</MenuItem>
            <MenuItem value="3779">SP19-RCS-012</MenuItem>
            <MenuItem value="3781">SP19-RCS-013</MenuItem>
            <MenuItem value="6012">SP19-RCS-014</MenuItem>
            <MenuItem value="3828">SP19-RCS-015</MenuItem>
            <MenuItem value="5963">SP19-RCS-018</MenuItem>
            <MenuItem value="3625">SP19-RCS-019</MenuItem>
            <MenuItem value="6013">SP19-RCS-021</MenuItem>
            <MenuItem value="3637">SP19-RCS-023</MenuItem>
            <MenuItem value="3626">SP19-RCS-025</MenuItem>
            <MenuItem value="3730">SP19-RCS-026</MenuItem>
            <MenuItem value="3662">SP19-RCS-027</MenuItem>
            <MenuItem value="3782">SP19-RCS-028</MenuItem>
            <MenuItem value="5974">SP19-RCS-032</MenuItem>
            <MenuItem value="3632">SP19-RCS-033</MenuItem>
            <MenuItem value="3841">SP19-RCS-035</MenuItem>
            <MenuItem value="3764">SP19-RCS-036</MenuItem>
            <MenuItem value="3733">SP19-RCS-041</MenuItem>
            <MenuItem value="3739">SP19-RCS-043</MenuItem>
            <MenuItem value="6033">SP19-RCS-045</MenuItem>
            <MenuItem value="3745">SP19-RCS-046</MenuItem>
            <MenuItem value="5966">SP19-RCS-048</MenuItem>
            <MenuItem value="5956">SP19-RCS-051</MenuItem>
            <MenuItem value="3604">SP19-RCS-054</MenuItem>
            <MenuItem value="3808">SP19-RCS-058</MenuItem>
            <MenuItem value="6011">SP19-RCS-059</MenuItem>
            <MenuItem value="3740">SP19-RCS-060</MenuItem>
            <MenuItem value="3827">SP19-RCS-061</MenuItem>
            <MenuItem value="3789">SP19-RCS-062</MenuItem>
            <MenuItem value="3780">SP19-RCS-066</MenuItem>
            <MenuItem value="5952">SP19-RIS-001</MenuItem>
            <MenuItem value="5941">SP19-RIS-002</MenuItem>
            <MenuItem value="3822">SP19-RIS-005</MenuItem>
            <MenuItem value="3805">SP19-RIS-007</MenuItem>
            <MenuItem value="3591">SP19-RIS-009</MenuItem>
            <MenuItem value="3751">SP19-RIS-010</MenuItem>
            <MenuItem value="5968">SP19-RIS-012</MenuItem>
            <MenuItem value="6077">SP19-RIS-015</MenuItem>
            <MenuItem value="5983">SP19-RIS-017</MenuItem>
            <MenuItem value="5958">SP19-RIS-018</MenuItem>
            <MenuItem value="3799">SP19-RIS-019</MenuItem>
            <MenuItem value="3633">SP19-RIS-021</MenuItem>
            <MenuItem value="3804">SP19-RIS-022</MenuItem>
            <MenuItem value="3641">SP19-RIS-023</MenuItem>
            <MenuItem value="3775">SP19-RIS-024</MenuItem>
            <MenuItem value="5984">SP19-RIS-026</MenuItem>
            <MenuItem value="6079">SP19-RIS-027</MenuItem>
            <MenuItem value="3763">SP19-RIS-031</MenuItem>
            <MenuItem value="3760">SP19-RIS-032</MenuItem>
            <MenuItem value="5965">SP19-RSE-002</MenuItem>
            <MenuItem value="3755">SP19-RSE-004</MenuItem>
            <MenuItem value="3661">SP19-RSE-006</MenuItem>
            <MenuItem value="3732">SP19-RSE-007</MenuItem>
            <MenuItem value="3659">SP19-RSE-008</MenuItem>
            <MenuItem value="4915">SP19-RSE-010</MenuItem>
            <MenuItem value="3783">SP19-RSE-011</MenuItem>
            <MenuItem value="3802">SP19-RSE-014</MenuItem>
            <MenuItem value="5925">SP19-RSE-015</MenuItem>
            <MenuItem value="3769">SP19-RSE-017</MenuItem>
            <MenuItem value="3765">SP19-RSE-020</MenuItem>
            <MenuItem value="3796">SP19-RSE-023</MenuItem>
            <MenuItem value="3846">SP19-RSE-024</MenuItem>
            <MenuItem value="3817">SP19-RSE-025</MenuItem>
            <MenuItem value="3786">SP19-RSE-027</MenuItem>
            <MenuItem value="3823">SP19-RSE-029</MenuItem>
            <MenuItem value="3762">SP19-RSE-030</MenuItem>
            <MenuItem value="5995">SP19-RSE-031</MenuItem>
            <MenuItem value="6017">SP19-RSE-032</MenuItem>
            <MenuItem value="3791">SP19-RSE-034</MenuItem>
            <MenuItem value="6064">SP20-RCS-005</MenuItem>
            <MenuItem value="5932">SP20-RCS-013</MenuItem>
            <MenuItem value="6073">SP20-RCS-016</MenuItem>
            <MenuItem value="6014">SP20-RCS-054</MenuItem>
            <MenuItem value="6068">SP20-RCS-065</MenuItem>
            <MenuItem value="6066">SP20-RCS-069</MenuItem>
            <MenuItem value="6078">SP20-RCS-070</MenuItem>
            <MenuItem value="6082">SP20-RCS-071</MenuItem>
            <MenuItem value="6016">SP20-RCS-072</MenuItem>
            <MenuItem value="3825">SP20-RIS-010</MenuItem>
            <MenuItem value="5961">SP20-RIS-019</MenuItem>
            <MenuItem value="5957">SP20-RIS-022</MenuItem>
            <MenuItem value="3723">SP20-RIS-027</MenuItem>
            <MenuItem value="3726">SP20-RIS-030</MenuItem>
            <MenuItem value="3729">SP20-RIS-031</MenuItem>
            <MenuItem value="5955">SP20-RIS-033</MenuItem>
            <MenuItem value="6089">SP20-RSE-006</MenuItem>
            <MenuItem value="5954">SP20-RSE-017</MenuItem>
            <MenuItem value="5953">SP20-RSE-020</MenuItem>
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
                  width: "20%",
                }}
              >
                Registration No
              </td>
              <td>FA15-RCS-023</td>
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
              <td>Mariam Javaid</td>
            </tr>
            <tr style={{ color: "#333333", backgroundColor: "#F7F6F3" }}>
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
              <td>mariamjaved963@gmail.com</td>
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
                mobile
              </td>
              <td>03345048647</td>
            </tr>
            <tr style={{ color: "#333333", backgroundColor: "#F7F6F3" }}>
              <td
                valign="top"
                style={{
                  backgroundColor: "#E9ECF1",
                  fontWeight: "bold",
                  width: "20%",
                }}
              >
                Thesis Registration
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
                Program
              </td>
              <td>MS (CS)</td>
            </tr>
            <tr style={{ color: "#333333", backgroundColor: "#F7F6F3" }}>
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
              <td>FA15</td>
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
                Thesis Track
              </td>
              <td>Regular</td>
            </tr>
            <tr style={{ color: "#333333", backgroundColor: "#F7F6F3" }}>
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
              <td>CSCL</td>
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
                An Analysis of cognitive, social and teaching presences effects
                on Perceived Learning and Motivation in online collaborative
                learning environment.
              </td>
            </tr>
            <tr style={{ color: "#333333", backgroundColor: "#F7F6F3" }}>
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
              <td>Prof. Dr. Sohail Asghar</td>
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
                Thesis Status
              </td>
              <td>N/A</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
