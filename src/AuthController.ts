import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

export default class AuthController {
  //hardcoded user
  private user = {
    username: 'admin',
    password: bcrypt.hashSync('password123', 10),
  };

  public login(req: Request, res: Response) {
    dotenv.config();

    const SECRET_KEY = process.env.JWT_SECRET || 'default_secret_key';

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    const { username, password } = req.body;
  
    if (username === this.user.username && bcrypt.compareSync(password, this.user.password)) {
      const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
      return res.status(200).json({ token });
    } else {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  }
}
