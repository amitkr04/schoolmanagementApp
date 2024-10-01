import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ChooseUser from "./components/ChooseUser";
import AdminSignIn from "./components/AdminSignIn";
import StudentSignIn from "./components/StudentSignIn";
import TeacherSignIn from "./components/TeacherSignIn";
import AdminDashboard from "../src/pages/Admin/Dashboard";
import StudentDashboard from "../src/pages/Students/Dashboard";
import TeacherDashboard from "../src/pages/Teachers/Dashboard";
import Classes from "./pages/Admin/Classes";
import Exam from "./pages/Admin/Exam";
import Attendance from "./pages/Admin/Attendance";
import Teachers from "./pages/Admin/Teachers";
import Students from "./pages/Admin/Students";
import Assignments from "./pages/Admin/Assignments";
import Library from "./pages/Admin/Library";
import Announcement from "./pages/Admin/Announcement";
import EventCalender from "./pages/Admin/EventCalender";
import SettingsProfile from "./pages/Admin/SettingsProfile";
import Performance from "./pages/Admin/Performance";

//for students

import StudentAssignments from "../src/pages/Students/Assignments";
import ExamSection from "../src/pages/Students/Exams";
import PerformanceSection from "../src/pages/Students/Performance";
import AttendanceSection from "../src/pages/Students/Attendance";
import LibrarySection from "../src/pages/Students/Library";
import AnnouncementSection from "../src/pages/Students/Announcement";
import ProfileSection from "../src/pages/Students/Profile";
import CheckAnnouncementSection from "./pages/Teachers/Announcement";
import AssignmentSection from "./pages/Teachers/Assignments";
import ClassSection from "./pages/Teachers/Classes";
import StudentSection from "./pages/Teachers/Students";
import TeacherSection from "./pages/Teachers/Teachers";
import CheckExamSection from "./pages/Teachers/Exams";
import CheckPerformanceSection from "./pages/Teachers/Performance";
import TeacherProfileSection from "./pages/Teachers/Profile";
import EventSection from "./pages/Teachers/Events";
import CheckAttendanceSection from "./pages/Teachers/Attendance";
import AdminRegister from "./components/AdminRegister";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/choose-user" element={<ChooseUser />} />

        {/* All the sign-in pages/routes */}
        <Route exact path="/admin/register" element={<AdminRegister />} />
        <Route exact path="/admin-signIn" element={<AdminSignIn />} />
        <Route exact path="/student-signIn" element={<StudentSignIn />} />
        <Route exact path="/teacher-signIn" element={<TeacherSignIn />} />

        {/* All the dashboard routes */}

        <Route exact path="/admin/dashboard" element={<AdminDashboard />} />
        <Route exact path="/teacher/dashboard" element={<TeacherDashboard />} />
        <Route exact path="/student/dashboard" element={<StudentDashboard />} />

        {/* Admin section here */}

        <Route exact path="/admin/classes" element={<Classes />} />
        <Route exact path="/admin/exams" element={<Exam />} />
        <Route exact path="/admin/attendance" element={<Attendance />} />
        <Route exact path="/admin/performance" element={<Performance />} />
        <Route exact path="/admin/teachers" element={<Teachers />} />
        <Route exact path="/admin/students" element={<Students />} />
        <Route exact path="/admin/assignments" element={<Assignments />} />
        <Route exact path="/admin/library" element={<Library />} />
        <Route exact path="/admin/communication" element={<Announcement />} />
        <Route exact path="/admin/events" element={<EventCalender />} />
        <Route exact path="/admin/settings" element={<SettingsProfile />} />

        {/* Students sections here  */}

        <Route
          exact
          path="/student/assignments"
          element={<StudentAssignments />}
        />
        <Route exact path="/student/exams" element={<ExamSection />} />
        <Route
          exact
          path="/student/performance"
          element={<PerformanceSection />}
        />
        <Route
          exact
          path="/student/attendance"
          element={<AttendanceSection />}
        />
        <Route exact path="/student/library" element={<LibrarySection />} />
        <Route
          exact
          path="/student/communication"
          element={<AnnouncementSection />}
        />
        <Route exact path="/student/settings" element={<ProfileSection />} />

        {/* Teachers sections here */}

        <Route
          exact
          path="/teacher/communication"
          element={<CheckAnnouncementSection />}
        />
        <Route
          exact
          path="/teacher/assignments"
          element={<AssignmentSection />}
        />
        <Route exact path="/teacher/classes" element={<ClassSection />} />
        <Route exact path="/teacher/students" element={<StudentSection />} />
        <Route exact path="/teacher/teachers" element={<TeacherSection />} />
        <Route exact path="/teacher/exams" element={<CheckExamSection />} />
        <Route
          exact
          path="/teacher/performance"
          element={<CheckPerformanceSection />}
        />
        <Route
          exact
          path="/teacher/attendance"
          element={<CheckAttendanceSection />}
        />
        <Route exact path="/teacher/events" element={<EventSection />} />
        <Route
          exact
          path="/teacher/settings"
          element={<TeacherProfileSection />}
        />
      </Routes>
    </Router>
  );
};

export default App;
