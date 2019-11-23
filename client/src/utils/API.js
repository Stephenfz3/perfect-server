import axios from "axios";

export default {
    login:function(email,password){
        return new Promise((resolve,reject)=>{
                resolve({id:1, 
                token:"user",
                name:"Stephen Fernandez"});
        });
    },


    getFoodPair: function() {
        return axios.get("/api/foodpage");
    },

    getDetails: function(id) {
        return axios.get("/api/foodpage/"+id );
    }

}