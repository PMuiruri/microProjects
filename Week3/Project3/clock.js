function main(){
    //Function calls returns the current hour minute and seconds
    var time = new Date();
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();

      /// This will format the hours, minutes and seconds to add a 0 if the time is less than 10
               if (hour < 10) {
                   hour = "0" + hour;
               }
               if (min < 10) {
                   min = "0" + min;
               }
               if (sec < 10) {
                   sec = "0" + sec;
               }
               if(hour <12){
                 document.getElementById('container').innerHTML = hour+" : "+min+" : "+sec +" "+"AM";
               }
               if(hour> 12){
                 document.getElementById('container').innerHTML = hour+" : "+min+" : "+sec+" "+"PM";
                 console.log(hour+":"+min);
               }



    sec++;
    console.log(sec);
    setTimeout(main, 1000);



    // var seconds = 0;
    //     function myFunction(){
    //         seconds++;
    //         console.log(seconds);
    //         setTimeout(myFunction, 1000);
    //     }

}
