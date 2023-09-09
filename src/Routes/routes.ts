import { Router } from "express";
import { allUser, oneUser } from "../Controllers/users/user.get";
import { createUser } from "../Controllers/users/user.post";
import { validateUser } from "../services/validate-user";
import { deleteUser } from "../Controllers/users/user.delete";
import { changePassword } from "../Controllers/users/user.patch";

const routes = Router();

// Users
routes.get('/users', allUser);
routes.get('/users/:email', oneUser);
routes.post('/users', validateUser, createUser);
routes.delete('/users/:email', deleteUser);
routes.patch('/users/:email', changePassword);

export default routes;