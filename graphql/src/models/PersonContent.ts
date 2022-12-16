import Roles from "./Roles";

interface PersonContent {
    email: String;
    firstName: String;
    lastName: String;
    dob: Date;
    roles: Roles[];
    phoneNumber: String;
}

export default PersonContent;