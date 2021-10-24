Vue.component("booking-delete",{
    template:
    <button v-on:click="deleteRecord(deleteId)"  class='btn btn-danger'></button>
    ,
    methods:{
        deleteRecord: function (id){
            let url='https://api.sheety.co/9b9e71839958ca3f6933373f66e866bf/yy/sheet1'+id;
            fetch(url,{
                method:'DELETE',
            })
            .then(() => {
                alert("Record id"+id+"deleted!")
                app.$children["BookingList"].GetBooking()

            });
        
        }
    },
    props:["deleteId"]

})