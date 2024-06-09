import { Request, Response } from 'express';
import authService from '../services/authService';
import { Error } from '../types/error';
const loginUser = async (req:Request, res:Response) => {
  try {
    const user=await authService.loginUser(req.body)
    res.json(user)
  } catch (err) {
    const error: Error = err as unknown as Error;
    res.status(500).send(error.message)
  }
};

const registerUser = async (req:Request, res: Response) => {
  try{
  const { email, name, password, confirmPassword } = req.body;
  if (!email || !name || !password)
    return res.status(422).send("Required params are missing");
  if(password!==confirmPassword) 
    res.status(400).send("Password do not match")
  const user = await authService.registerUser(req.body);
  res.json(user);
} catch (err) {
  const error: Error = err as unknown as Error;
  res.status(error.status ||5000).send(error.message);
}
}
export default {
  registerUser,
  loginUser,
};