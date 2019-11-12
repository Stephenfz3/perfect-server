import axios from "axios";

export default {
    // Get All  In A Category
    getCategory: function() {
        return axios.get("/api/menu");
    },

    //Get All in A subCategory
    getSubCategory: function() {
        return axios.get("/api/menu/subcategory");
    },

    // Deletes Item form ShoppingCart
    deleteItem: function(id) {
        return axios.delete("/api/menu/subcategory/"+id)
    },

    // Saves item to ShoppingCart
    saveItem: function(itemData) {
        return axios.post("api/menu", itemData);
    }
};