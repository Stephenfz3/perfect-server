import axios from "axios";

export default {
    getFoodPair: function() {
        return axios.get("/api/foodpage");
    },

    getDetails: function(id) {
        return axios.get("/api/foodpage/" + id);
    }

}