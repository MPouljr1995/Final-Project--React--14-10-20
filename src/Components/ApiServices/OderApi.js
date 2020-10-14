import axios from "axios";

const API_URL = "http://localhost:8080/api/orders/";

class OderApi {
    getAllOders() {
        console.log("getAllOders....");
        return axios.get(API_URL);
    }

}
export default new OderApi();