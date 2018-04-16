$(document).ready(function(){
  $("#userInput").click(function(){
      // Function to get the User's input
      var searchTerm = $("#userInput").val();
      //Api url with searchTerm
      var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?";

      $.ajax({
        type:"GET",
        url:url,
        async:false,
        dataType:"json";
        success: function(data){
            console.log(data);
        },
        error: function (errormessage){
          alert("Error")
        }
      })
  });
}
);
