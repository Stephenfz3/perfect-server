import axios from "axios";

export default {
    getFoodPair: function() {
        return axios.get("/api/foodpage")
    }
}