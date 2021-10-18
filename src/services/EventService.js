import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/Skumm/real-world-vue3",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getEvents() {
    return apiClient.get("/db");
  },
  getEvent(id) {
    return apiClient.get("/events/" + id);
  },
};
