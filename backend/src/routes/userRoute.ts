import express from 'express';
import { login, register } from '../services/userService';


const router = express.Router();

router.get('/', (req, res) => {
  try {
    res.send('Hello from user route');
  } catch (err) {
    res.status(500).send(err);
  }

});

router.post('/register', async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const result = await register({ firstName, lastName, email, password });
    res.status(result.statusCode).json(result.data);
  } catch (err) {
    res.status(500).send(err);
  }

});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const checkInfo = await login({ email, password });
    res.status(checkInfo.statusCode).json(checkInfo.data);
  } catch (err) {
    res.status(500).send(err);
  }

})

export default router;