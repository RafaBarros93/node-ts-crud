import { Document } from "mongoose";

interface UserInterface extends Document {
    email?: string;
    firstName?: string;
    lastName?: string;
}
export default UserInterface;
