import axios from "axios";

const instance = axios.create({
  baseURL: "https://book-a-ccok-server.herokuapp.com"
});
export default instance;
