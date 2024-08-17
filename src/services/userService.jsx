import axios from "../config/axios";

const listUser = async () => {
  const users = await axios.get("/listuser");
  console.log(users.data);
};

const checkUser = async () => {
  const user = await axios.get("/checkuser");
  return user;
};

export { listUser, checkUser };
