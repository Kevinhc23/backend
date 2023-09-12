import { Router } from "express";
import { allUser, oneUser } from "../Controllers/users/user.get";
import { createUser } from "../Controllers/users/user.post";
import { deleteUser } from "../Controllers/users/user.delete";
import { changePassword } from "../Controllers/users/user.patch";
import { allVisit, oneVisit } from "../Controllers/visits/visit.get";
import { createVisit } from "../Controllers/visits/visit.post";
import { signIn } from "../Controllers/auth/signIn";
import { visitDelete } from "../Controllers/visits/visit.delete";
import { visitState } from "../Controllers/visits/visit.patch";

//validaciones
import { validateUser } from "../Middleware/validate-user";
import { validateVisitorAndCreate } from "../Middleware/validate-visit";

const routes = Router();

// Users
routes.get("/users", allUser);
routes.get("/users/:email", oneUser);
routes.post("/users", validateUser, createUser);
routes.delete("/users/:email", deleteUser);
routes.patch("/users/:email", changePassword);

// Visits
routes.get("/visits", allVisit);
routes.get("/visits/:cedula", oneVisit);
routes.post("/visits", validateVisitorAndCreate, createVisit);
routes.delete("/visits/:id", visitDelete);
routes.patch("/visits/:id", visitState);

// Auth
routes.post("/auth/signin", signIn);

// Rutas no definidas
routes.get("*", (req, res) => {
  res.status(404).json({ message: "Ruta no definida" });
});

export default routes;
