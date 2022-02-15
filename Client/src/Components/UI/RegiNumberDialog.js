import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";
import { preventOverflow } from "@popperjs/core";

export default function DialogSelect(props) {
  const [open, setOpen] = React.useState(false);

  let data = {
    session: "--",
    year: "--",
    discipline: "--",
    rollNo: "--",
  };

  const handleChange = (event) => {
    /* props.onRegNum({ data[event.target.name]: event.target.value }); */
    data[event.target.name] = event.target.value;
    console.log(data);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    /* const data = new FormData(event.currentTarget);
    const a = data.get("age"); */
    // props.onProgram(data.program);

    props.onRegNum(data);
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };

  return (
    <div>
      <Button fullWidth variant="outlined" onClick={handleClickOpen}>
        Enter Registration Number Here
      </Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Fill the form</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-label">Session</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="session"
                name="session"
                variant="standard"
                defaultValue=""
                /* value="" */
                label="session"
                onChange={handleChange}
              >
                {/* <MenuItem value="">
                  <em>-</em>
                </MenuItem> */}
                <MenuItem value={"SP"}>SP</MenuItem>
                <MenuItem value={"FA"}>FA</MenuItem>
              </Select>
            </FormControl>
            <TextField
              sx={{ m: 1, maxWidth: 120 }}
              autoComplete="given-name"
              name="year"
              variant="standard"
              placeholder="00"
              id="year"
              label="Year"
              onChange={handleChange}
            />

            <FormControl sx={{ m: 1, width: 120 }}>
              <InputLabel id="demo-simple-select-label">Discipline</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="discipline"
                name="discipline"
                variant="standard"
                /* value="" */
                label="Discipline"
                onChange={handleChange}
              >
                <MenuItem value={"CS"}>CS</MenuItem>
                <MenuItem value={"SE"}>SE</MenuItem>
                <MenuItem value={"IS"}>IS</MenuItem>
              </Select>
            </FormControl>
            <TextField
              sx={{ m: 1, width: 120 }}
              autoComplete="given-name"
              name="rollNo"
              variant="standard"
              placeholder="000"
              id="rollNo"
              label="Roll No."
              onChange={handleChange}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
