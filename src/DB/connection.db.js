import mongoose from "mongoose";
import dns from "dns";

dns.setServers(["1.1.1.1", "8.8.8.8"]);
const connectionDB = async () => {
  try {
    const url =
      "mongodb+srv://osama22:osama22@cluster0.7d7jz2o.mongodb.net/sarahaApp";
    const result = await mongoose.connect(url);
    console.log(result.models);
    console.log("connect DB 👌");
  } catch (error) {
    console.log("fail to connect DB ❌", error);
  }
};
export default connectionDB;
