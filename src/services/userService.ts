import userModel, { IUser } from "../models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//Register function 

interface RegisterParams {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export const register = async ({ firstName, lastName, email, password }: RegisterParams) => {
    const findUser = await userModel.findOne({ email });

    if (findUser) {
        return { data: "User already exists", statusCode: 400 };    // 400 is the status code for bad request
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new userModel({
        firstName,
        lastName,
        email,
        password: hashedPassword
    });
    await newUser.save();
    return { data: generateJWT({ firstName, lastName, email }), statusCode: 200 };    // 200 is the status code for OK

}

// Login function

interface LoginParams {
    email: string;
    password: string;
}

export const login = async ({ email, password }: LoginParams) => {
    const findUser = await userModel.findOne({ email });
    if (!findUser) {
        return { data: "Incorrect email or password", statusCode: 400 };
    }
    const passwordMatch = await bcrypt.compare(password, findUser.password);
    if (!passwordMatch) {
        return { data: "Incorrect email or password", statusCode: 400 };
    }
    return { data: generateJWT({ email, firstName: findUser.firstName, lastName: findUser.lastName }), statusCode: 200 };
}

const secretKey = '3K4h7s9Lp2Qr8v1Xw5t6Yz0uAeBcDdEfGgHhIiJjJkKlLmMnNoPqRsStTuUvVwWxXyYzZ';
const generateJWT = (data: any) => {
    return jwt.sign(data, secretKey, { expiresIn: "1h" });
}
