import { Router } from "express";
import { allUser, oneUser } from "../Controllers/users/user.get";
import { createUser } from "../Controllers/users/user.post";
import { deleteUser } from "../Controllers/users/user.delete";
import { changePassword } from "../Controllers/users/user.patch";
import { allVisit, oneVisit } from "../Controllers/visits/visit.get";
import { createVisit } from "../Controllers/visits/visit.post";
import {
  updateStatusVisit,
  updateNotesVisit,
} from "../Controllers/visits/visit.patch";
import { signIn } from "../Controllers/auth/signIn";

//validaciones
import { validateUser } from "../lib/validate-user";
import { validateDni } from "../lib/validate-dni";

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
routes.post("/visits", validateDni, createVisit);
routes.patch("/visits/:cedula/status", updateStatusVisit);
routes.patch("/visits/:cedula/notes", updateNotesVisit);

// Auth
routes.post("/auth/signin", signIn);

// Rutas no definidas
routes.get("*", (req, res) => {
  res.status(404).json({ message: "Ruta no definida" });
});

export default routes;
