import { UserModel } from "../../DB/models/user.model.js";
export const signup = async (req, res, next) => {
  try {
    const { fullName, email, password, phone } = req.body;
    console.log(req.body);

    if (await UserModel.findOne({ email })) {
      res.status(409).json({ error_message: "Email Exist" });
    }

    const [user] = await UserModel.create([
      { fullName, email, password, phone },
    ]);

    res.status(201).json({ message: "Done", user });
  } catch (error) {
    res.status(500).json({
      error_message: "Server Error",
      error,
      message: error.message,
      stack: error.stack,
    });
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email, password });
    if (!user) {
      return res.status(404).json({ error_message: "In-valid Login Data" });
    }
    res.json({ message: "Done", user });
  } catch (error) {
    res.status(500).json({
      error_message: "Server Error",
      error,
      message: error.message,
      stack: error.stack,
    });
  }
};
