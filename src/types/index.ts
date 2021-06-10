import { Request, Response } from "express";
export interface User {
  email: string;
  name: string;
  _id: string;
}

export interface MyRequest extends Request {
  user?: User;
}

export interface MyResponse extends Response {}
