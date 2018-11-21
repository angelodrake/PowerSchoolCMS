import axios from 'axios';

export default {
   
    markAsSaved:function(id,data){
        return axios.put("/api/form/"+id,data);
    },
    getAllForms: function(){
        return axios.get("/api/form/");
    }
}