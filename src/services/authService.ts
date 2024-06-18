import bcrypt from "bcryptjs";
import User from "../model/userModel";
import { LoginInput, RegisterInput, UserType } from "../types/auth";
import { EMAIL_REGEX } from  "@/constants/regex"
const loginUser = async (data: LoginInput): Promise<UserType> => {
  try {
    const existingUser = await User.findOne({ email: data.email });
    if (!existingUser) throw new Error("Email not found");
    const isMatched = await bcrypt.compare(data.password,existingUser.password);
    if (!isMatched) throw new Error("password not matched");
    return {
      id: existingUser._id,
      email: existingUser.email,
      name: existingUser.name,
      roles: existingUser.roles,
      createdAt: existingUser.createdAt,
    };
  } catch (error) {
    throw error;
  }
};
const registerUser = async (data: RegisterInput):Promise<UserType> => {
  try {
    const emailExists = await User.findOne({ email: data.email });
    if (emailExists) throw new Error("Email already exists");
    const isValidEmail = data.email.match(EMAIL_REGEX);
    if (!isValidEmail) throw new Error("Invalid email address");
    const hashedPassword = bcrypt.hashSync(data.password, 10);
    const existingUser = await User.create({
      ...data,
      password: hashedPassword,
    });
    return {
      id: existingUser._id,
      email: existingUser.email,
      name: existingUser.name,
      roles: existingUser.roles,
      createdAt: existingUser.createdAt,
    };
  } catch (error) {
    throw error;
  }
};
export default {
  registerUser,
  loginUser,
};
