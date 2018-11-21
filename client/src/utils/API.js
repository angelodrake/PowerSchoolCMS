import axios from 'axios';

export default {
   
    markAsSaved:function(name,data){
        return axios.put("/user/api/form/"+name,data);
    },
    getAllForms: function(){
        return axios.get("/user/api/form/");
    }
}