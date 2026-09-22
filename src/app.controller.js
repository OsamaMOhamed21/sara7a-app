import express from "express";
import authController from "./modules/auth/auth.controller.js";
import userController from "./modules/user/user.controller.js";
import connectionDB from "./DB/connection.db.js";
const bootstrap = async () => {
  const app = express();
  const port = 3000;

  //DB
  await connectionDB();
  // Convert buffer Data
  app.use(express.json());
  // app routing
  app.use("/auth", authController);
  app.use("/user", userController);
  app.get("/", (req, res, next) => res.json({ message: "Done" }));
  
  app.listen(port, 201, () => console.log(`Server is Running in ${port}`));
};
export default bootstrap;
