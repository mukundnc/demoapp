import Person from "./Person";
import Roles from "./Roles"

interface PersonRole {
    id: Number;
    role: Roles;
    person: Person;
}

export default PersonRole;