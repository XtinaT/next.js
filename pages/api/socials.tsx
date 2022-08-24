import { socials } from "./data/socials";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler (req:NextApiRequest, res:NextApiResponse) {
  if (req.method) {
     res.status(200).json(socials);
  };
 
} 

