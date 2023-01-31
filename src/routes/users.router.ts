import express from 'express';
import { DeleteResult } from 'typeorm';
import { User } from '../data/entry/User';
import userService from '../services/user.service';
const router = express.Router();

router.get('/', async (req, res) => {
  const users: User[] = await userService.getAll()
  res.send(users);
});

router.get('/:id', async (req, res) => {
  const user: User = await userService.get(+req.params.id)
  res.send(user);
});

router.post('/getBy', async (req, res) => {
  const users: User[] = await userService.getBy(req.body)
  res.send(users);
});

router.post('/', async (req, res) => {
  const user: User = await userService.add(req.body)
  res.send(user);
});

router.delete('/:id', async (req, res) => {
  const result: DeleteResult = await userService.remove(+req.params.id)
  res.send(result);
});

router.put('/:id', async (req, res) => {
  const user: User = await userService.update(+req.params.id, req.body)
  res.send(user);
});

export default router;
