import axios from 'axios';

export default {
   //Form page
    markAsSaved:function(id,data){
        return axios.put("/api/form/"+id,data);
    },
    getAllForms: function(){
        return axios.get("/api/form/");
    },
    //Support page
    getAllSupportTicket: function(){
        return axios.get("/api/support/");
    },

    postSupportTicket: function(name,data){
        return axios.post("/api/support/"+name,data);
    },

    deleteSupportTicketById: function(id){
        return axios.delete("/api/support/"+id);
    }
}