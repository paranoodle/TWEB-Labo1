
  function generateRandomPeople () {
    var gender = chance.gender();
    var people = {
      gender : gender,
      name : chance.name({ gender: gender }),
       // greetingDiv = $("#greeting"); 
    //greetingDiv.text(name + " ("+ gender +") !");
    style: (gender === 'Female' ? "alert-danger" : "alert-info")   
    }
    //handlebars
    var templateScript = $("#chance").html();     
    var template = Handlebars.compile(templateScript);
    
    $("#greeting").html(template(people));
  };

  function showCoordinates(x,y){
      var data = { x:x, y:y };
      var template = Handlebars.compile($("#mouseCoordinates").html());
    
  $("#coordinates").html(template(data));
  
  }

  $('#myButton').on('click', function () {
    var $btn = $(this).button('loading');
    // business logic...
    $btn.button('reset');
  });


  function showRooms(){

      $.getJSON("data.json", function(data) {

        $.each(data.rooms, function(key, val) {
          $('#rooms').append("Room : "+ key +", "  + val + '<br>');
        });   
        
      });
  }
