import React from "react";
import TextField from "@mui/material/TextField";

import { left } from "@popperjs/core";
import { margin } from "@mui/system";
import Button from "@mui/material/Button";
import axios from "axios";
import { Box } from "@mui/system";

export default function AddManageProgram() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    axios.post("", {
      /* email: userEmail,
      password: userPassword, */
    });

    // eslint-disable-next-line no-console

    console.log({
      regNumber: data.get("RegistrationNumber"),
      password: data.get("Name"),
      fathersName: data.get("Father'sName"),
      email: data.get("EmailAddress"),
      currentSemester: data.get("CurrentSemester"),
      courseCompletion: data.get("CourseWorkCompletion"),
      coursesPassed: data.get("CoursesPassed"),
      supervisor: data.get("Supervisor"),
      coSupervisor: data.get("Co-Supervisor"),
      synopsisTitle: data.get("Synopsis/ThesisTitle"),
      synopsisTrack: data.get("SynopsisTrack"),
      date: data.get("Date"),
    });
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          id="standard-basic"
          color="secondary"
          sx={{ width: "100%", marginBottom: "15px" }}
          label="Program"
          variant="outlined"
        />

        <TextField
          id="standard-basic"
          color="secondary"
          sx={{ width: "100%", marginBottom: "15px" }}
          label="Long Name"
          variant="outlined"
        />

        <TextField
          id="standard-basic"
          color="secondary"
          sx={{ width: "100%", marginBottom: "15px" }}
          label="Min Semesters"
          variant="outlined"
        />

        <TextField
          id="standard-basic"
          color="secondary"
          sx={{ width: "48%", marginBottom: "15px" }}
          label="Min Semesters"
          variant="outlined"
        />

        <TextField
          id="standard-basic"
          color="secondary"
          sx={{ width: "48%", marginLeft: "4%", marginBottom: "15px" }}
          label="Max Semesters"
          variant="outlined"
        />

        <TextField
          id="standard-basic"
          color="secondary"
          sx={{ width: "48%", marginBottom: "15px" }}
          label="Duration (Years)"
          variant="outlined"
        />

        <TextField
          id="standard-basic"
          color="secondary"
          sx={{ width: "48%", marginLeft: "4%", marginBottom: "15px" }}
          label="Credits"
          variant="outlined"
        />

        <TextField
          id="standard-basic"
          color="secondary"
          sx={{ width: "100%", marginBottom: "15px" }}
          label="Min Semesters"
          variant="outlined"
        />

        <Button
          type="submit"
          variant="contained"
          color="secondary"
          size="large"
        >
          Add Program
        </Button>
      </Box>
    </>
  );
}
