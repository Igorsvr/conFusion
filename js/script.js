$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carousel-button").click(function(){
        if ($("#carousel-button").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carousel-button").children("span").removeClass('fa-pause');
            $("#carousel-button").children("span").addClass('fa-play');
        }
        else if ($("#carousel-button").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carousel-button").children("span").removeClass('fa-play');
            $("#carousel-button").children("span").addClass('fa-pause');
        }
    });

      $('#loginModalToggle').click(function() {
        $('#loginModal').modal('toggle');
      });
      $('#reserveModalToggle').click(function() {
        $('#reserveModal').modal('toggle');
      });

    });

    /* $('#loginButton').click(function() {
        $('#loginModal').modal('show');
      });
      $('#reserveButton').click(function() {
        $('#reservationModal').modal('show');
      });

    }); */


    /* $(document).ready(function(){
        $("#mycarousel").carousel( { interval: 2000 } );
                      $("#carousel-pause").click(function(){
            $("#mycarousel").carousel('pause');
        });
                    $("#carousel-play").click(function(){
            $("#mycarousel").carousel('cycle');
        });
    });
 
    $(document).ready(function(){
        $("#reserveTableNow").click(function(){
            $("#reserveTableForm").modal('show');
        });
        
        $("#loginButton").click(function(){
            $("#loginModal").modal('show');
        });
    }); */