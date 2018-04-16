$(document).ready(function(){
  $("#search").click(function(){
      // Function to get the User's input
      var searchTerm = $("#userInput").val();
      //Api url with searchTerm
      var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?";

      $.ajax({
        type:"GET",
        url:url,
        async:false,
        dataType:"json",
        success: function(data){
            // Get heading console.log(data[1][0]);
            // Get description console.log(data[2][0]);
            // console.log(data[3][0]);
            $('#output').html(' ');
            for(let i= data.length-1; i >=0; i--){
              $('#output').prepend("<li><a  href="+data[3][i]+">"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
            }
            $('#userInput').val('');
        },

        error: function (errormessage){
          alert("Error")
        }
      });
  });
  // search using Enter key on the keyboard
  $("#userInput").keypress(function(e){
  if(e.which==13){
    $("#search").click();
  }
});
}
);
