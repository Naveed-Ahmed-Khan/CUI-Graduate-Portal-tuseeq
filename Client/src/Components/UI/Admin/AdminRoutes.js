import ManagePrograms from "../../Pages/managePrograms";
import AddManageProgram from "../../Pages/AddManageProgram";
import AddManageSupervisoryCommittee from "../../Pages/AddManageSupervisoryCommittee";
import AddProgressReport from "../../Pages/AddProgressReport";
import AddSession from "../../Pages/AddSession";
import AddStudent from "../../Pages/AddStudent";
import ChangePassword from "../../Pages/ChangePassword";
import Home from "../../Pages/Home";
import ManageProgressReport from "../../Pages/ManageProgressReport";
import ManageSession from "../../Pages/ManageSession";
import ManageStudent from "../../Pages/ManageStudent";
import ManageSupervisoryCommittee from "../../Pages/ManageSupervisoryCommittee";
import ProgramWiseReports from "../../Pages/ProgramWiseReports";
import SendNotification from "../../Pages/SendNotification";
import SendNotificationAll from "../../Pages/SendNotificationAll";
import SendNotificationMS from "../../Pages/SendNotificationMS";
import EvaluateSynopsisMS from "../../Pages/EvaluateSynopsisMS";
import EvaluateSynopsisPhD from "../../Pages/EvaluateSynopsisPhD";
import SessionWiseReports from "../../Pages/SessionWiseReports";
import SupervisorReports from "../../Pages/SuperivorReports";
import SupervisorWiseReports from "../../Pages/SupervisorWiseReports";
import ManageNotification from "../../Pages/managenotification";
import SynopsisWiseReports from "../../Pages/SynopsisWiseReports";
import ThesisWiseReports from "../../Pages/ThesisWiseReports";
import ViewFaculty from "../../Pages/ViewFaculty";
import ViewMSStudentDetail from "../../Pages/ViewMSStudentDetail";
import ViewPhDStudentDetail from "../../Pages/ViewPhDStudentDetail";
import AdminDashboard from "../../../Dashboards/AdminDashboard";

import SendSynopsisReport from "../../Pages/SendSynopsisReport";
import SendThesisReport from "../../Pages/SendThesisReport";
import ViewSynopsisReport from "../../Pages/ViewSynopsisReport";
import ViewThesisReport from "../../Pages/ViewThesisReport";
import PendingThesis from "../../Pages/PendingThesis";
import ManageSynopsisSchedule from "../../Pages/ManageSynopsisSchedule";
import GenerateSynopsisReport from "../../Pages/GenerateSynopsisReport";
import GenerateThesisReport from "../../Pages/GenerateThesisReport";
import ManageThesisSchedule from "../../Pages/ManageThesisSchedule";

import React from "react";
import { Route, Routes } from "react-router-dom";
import SynopsisSubmission from "../../Pages/SynopsisSubmission";
import ThesisSubmission from "../../Pages/ThesisSubmission";
import EditProfile from "../../Pages/EditProfile";
import ViewAnnouncement from "../../Pages/ViewAnnouncement";
import ViewNotification from "../../Pages/ViewNotification";
import SignUp from "../../UI/SignUp";
import SignIn from "../SignIn";
import EvaluateThesisMS from "../../Pages/EvaluateThesisMS";
import EvaluateThesisPhD from "../../Pages/EvaluateThesisPhD";

import AddFaculty from "../../Pages/AddFaculty";
import { useSelector } from "react-redux";
import ManageMsDeadline from "../../Pages/ManageMsDeadline";
import ManageSynopsisScheduleBulk from "../../Pages/ManageSynopsisScheduleBulk";
import ManageThesisScheduleBulk from "../../Pages/ManageThesisScheduleBulk";
const AdminRoutes = (props) => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  console.log(isLoggedIn);
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Dashboard" element={<AdminDashboard />}>
        <Route index element={<Home />} />
        <Route path="/Dashboard/ManagePrograms" element={<ManagePrograms />} />
        <Route path="/Dashboard/AddPrograms" element={<AddManageProgram />} />
        <Route path="/Dashboard/ManageSessions" element={<ManageSession />} />
        <Route path="/Dashboard/AddSessions" element={<AddSession />} />
        <Route path="/Dashboard/ViewFaculty" element={<ViewFaculty />} />
        <Route path="/Dashboard/AddFaculty" element={<AddFaculty />} />
        <Route path="/Dashboard/ManageStudents" element={<ManageStudent />} />
        <Route path="/Dashboard/AddStudent" element={<AddStudent />} />
        <Route
          path="/Dashboard/ManageMsDeadline"
          element={<ManageMsDeadline />}
        />
        <Route
          path="/Dashboard/ManageSynopsisSchedule"
          element={<ManageSynopsisSchedule />}
        />
        <Route
          path="/Dashboard/ManageSynopsisScheduleBulk"
          element={<ManageSynopsisScheduleBulk />}
        />
        <Route
          path="/Dashboard/GenerateSynopsisReport"
          element={<GenerateSynopsisReport />}
        />
        <Route
          path="/Dashboard/ViewSynopsisReport"
          element={<ViewSynopsisReport />}
        />
        <Route
          path="/Dashboard/SendSynopsisReport"
          element={<SendSynopsisReport />}
        />

        <Route
          path="/Dashboard/ManageThesisSchedule"
          element={<ManageThesisSchedule />}
        />
        <Route
          path="/Dashboard/ManageThesisScheduleBulk"
          element={<ManageThesisScheduleBulk />}
        />
        <Route
          path="/Dashboard/GenerateThesisReport"
          element={<GenerateThesisReport />}
        />
        <Route
          path="/Dashboard/ViewThesisReport"
          element={<ViewThesisReport />}
        />
        <Route
          path="/Dashboard/SendThesisReport"
          element={<SendThesisReport />}
        />

        <Route
          path="/Dashboard/ManageProgressReport"
          element={<ManageProgressReport />}
        />

        <Route
          path="/Dashboard/AddProgressReport"
          element={<AddProgressReport />}
        />
        <Route
          path="/Dashboard/ManageSupervisoryCommittee"
          element={<ManageSupervisoryCommittee />}
        />
        <Route
          path="/Dashboard/AddSupervisoryCommittee"
          element={<AddManageSupervisoryCommittee />}
        />
        <Route
          path="/Dashboard/EvaluateSynopsis(MS)"
          element={<EvaluateSynopsisMS />}
        />
        <Route
          path="/Dashboard/EvaluateSynopsis(PhD)"
          element={<EvaluateSynopsisPhD />}
        />
        <Route path="/Dashboard/PendingThesis" element={<PendingThesis />} />
        <Route
          path="/Dashboard/EvaluateThesis(MS)"
          element={<EvaluateThesisMS />}
        />
        <Route
          path="/Dashboard/EvaluateThesis(PhD)"
          element={<EvaluateThesisPhD />}
        />
        <Route
          path="/Dashboard/ManageNotification"
          element={<ManageNotification />}
        />
        <Route
          path="/Dashboard/SendNotification(PhD)"
          element={<SendNotification />}
        />
        <Route
          path="/Dashboard/SendNotification(MS)"
          element={<SendNotificationMS />}
        />
        <Route
          path="/Dashboard/SendNotificationtoAll"
          element={<SendNotificationAll />}
        />
        <Route
          path="/Dashboard/ViewMSStudentDetails"
          element={<ViewMSStudentDetail />}
        />
        <Route
          path="/Dashboard/ViewPhDStudentDetails"
          element={<ViewPhDStudentDetail />}
        />
        <Route
          path="/Dashboard/Supervisor'sReport"
          element={<SupervisorReports />}
        />
        <Route
          path="/Dashboard/Program-WiseReport"
          element={<ProgramWiseReports />}
        />
        <Route
          path="/Dashboard/Synopsis-WiseReport"
          element={<SynopsisWiseReports />}
        />
        <Route
          path="/Dashboard/Session-WiseReport"
          element={<SessionWiseReports />}
        />
        <Route
          path="/Dashboard/Thesis-WiseReport"
          element={<ThesisWiseReports />}
        />
        <Route path="/Dashboard/ChangePassword" element={<ChangePassword />} />
        <Route
          path="/Dashboard/ViewSupervisorProgram-WiseReport"
          element={<SupervisorWiseReports />}
        />

        <Route
          path="/Dashboard/SynopsisSubmission"
          element={<SynopsisSubmission />}
        />
        <Route
          path="/Dashboard/ThesisSubmission"
          element={<ThesisSubmission />}
        />
        <Route
          path="/Dashboard/ViewAnnouncement"
          element={<ViewAnnouncement />}
        />
        <Route
          path="/Dashboard/ViewNotification"
          element={<ViewNotification />}
        />
        <Route path="/Dashboard/EditProfile" element={<EditProfile />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
