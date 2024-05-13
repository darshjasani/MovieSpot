import axios from "axios";
// for cros not blocking
export default axios.create({
    baseURL:'http://localhost:8080',
    headers:{"ngrok-skip-browser-warning":"true"}
})
