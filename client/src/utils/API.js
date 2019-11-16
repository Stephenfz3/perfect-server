import axios from "axios";

export default {
    login:function(email,password){
        return new Promise((resolve,reject)=>{
                resolve({id:1, 
                token:"user"});
        });
    },


    getFoodPair: function() {
        return axios.get("/api/foodpage")
    }
}