import Login from "./Pages/Login";
import Otp from "./Pages/Otp";
import Register from "./Pages/Register";
import Dashboard from "./Pages/User/Dashboard";
import ForgotPassword from "./Pages/ForgotPassword";
import Patientview from "./Pages/User/patient/Patientview"
import Patientsummery from "./Pages/User/patient/Patientsummery"
import PatientAllSummery from "./Pages/User/patient/PatientAllSummery"
import SecureMessage from "./Pages/User/SecureMessage/SecureMessage"
import SecureAdd from "./Pages/User/SecureMessage/SecureAdd"
import SecureSetting from "./Pages/User/SecureMessage/SecureSetting"

var routes = [
    { path: "/login", icon: "fa fa-home", name: "Login", component: Login, layout: "/auth" },
    { path: "/otp", icon: "fa fa-home", name: "Login", component: Otp, layout: "/auth" },
    { path: "/register", icon: "fa fa-home", name: "Register", component: Register, layout: "/auth" },
    { path: "/forgot", icon: "fa fa-home", name: "ForgotPassword", component: ForgotPassword, layout: "/auth" },
    { path: "/patient", icon: "fa fa-home", name: "Dashboard", component: Dashboard, layout: "/user" },
    { path: "/patientview", icon: "fa fa-home", name: "Dashboard", component: Patientview, layout: "/user" },
    { path: "/patientsummary", icon: "fa fa-home", name: "Dashboard", component: Patientsummery, layout: "/patients" },
    { path: "/patientallsummary", icon: "fa fa-home", name: "Dashboard", component: PatientAllSummery, layout: "/patients" },
    { path: "/patientView", icon: "fa fa-home", name: "Dashboard", component: Patientsummery, layout: "/patients" },
    { path: "/SecureMessage", icon: "fa fa-home", name: "Dashboard", component: SecureMessage, layout: "/user" },
    { path: "/SecureAdd", icon: "fa fa-home", name: "Dashboard", component: SecureAdd, layout: "/user" },
    { path: "/SecureSetting", icon: "fa fa-home", name: "Dashboard", component: SecureSetting, layout: "/user" },
    
];
export default routes;
