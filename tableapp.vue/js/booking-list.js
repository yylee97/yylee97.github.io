let refreshNow= document.getElementById("refreshNowBtn")
refreshNow.addEventListener("click",function(){
    GetBooking()
})

function GetBooking(){
    let url = 'https://api.sheety.co/9b9e71839958ca3f6933373f66e866bf/yy/sheet1';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            let bookingNameList= document.getElementById("bookingNameList")

            for (let k= bookingNameList.rows.length -1; k>0; k--){
                bookingNameList.deleteRow(k)
            }

            for (let i=0; i < json.bookings.length;i++)
});
}