function main(){
  var myPlaces = ["New York USA","London UK","Tokyo Japan","Stockholm Sweden","Nairobi Kenya","Sydney Australia" ];
  var friendPlaces = ["Berlin Germany","New York USA","Helsinki Finland","Beijing China", "Sydney Australia","Stockholm Sweden"];

  for (let myPlacesIndex = 0; myPlacesIndex <= myPlaces.length-1 ; myPlacesIndex++){
      // console.log("Myplace >>"+ myPlaces[myPlacesIndex]);
    for (let friendPlacesIndex = 0; friendPlacesIndex <= friendPlaces.length-1; friendPlacesIndex++){
          // console.log(friendPlaces[friendPlacesIndex]);
      // === means   == means
        if(friendPlaces[friendPlacesIndex] == myPlaces[myPlacesIndex]){
            document.getElementById('city').innerHTML = "We both would like to visit... " + myPlaces[myPlacesIndex];
            // console.log("We both would like to visit... " + myPlaces[myPlacesIndex]);
        }
      }
    }
  }
