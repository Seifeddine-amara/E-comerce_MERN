import express from 'express';
import { login, register } from '../services/userService';


const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello from user route');
});

router.post('/register', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const result = await register({ firstName, lastName, email, password });
  res.status(result.statusCode).send(result.data);
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const checkInfo = await login({ email, password });
  res.status(checkInfo.statusCode).send(checkInfo.data);
})

export default router;