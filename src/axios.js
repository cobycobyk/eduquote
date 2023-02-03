import axios from "axios";

const instance = axios.create({
  baseURL: `https://us-central1-quote-builder-a449a.cloudfunctions.net/api`
});

export default instance;

//for function emulation
export const emulator = axios.create({
  baseURL: `http://127.0.0.1:5001/quote-builder-a449a/us-central1/api`
});