import axios from "axios";

const instance = axios.create({
  baseURL: "https://book-a-cook-server.herokuapp.com/"
});
export default instance;
