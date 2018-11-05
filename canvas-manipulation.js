
     	$.urlParam = function(name){
	    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	    return results[1] || 0;
    	}

	      window.onload = function() {


	      var picture = $.urlParam('picture');
	      var username = decodeURI($.urlParam('username'));
        var deepfry = $.urlParam('deepfry');

        console.log("Name: " + username + " | Picture: " + picture + " | Deepfry: " + deepfry);

        if (picture == "null") picture = "https://cdn.glitch.com/48172e68-2ade-44c8-a3e6-558e7b90b4f0%2Fimportant.png?1540636040558";



	      var canvas = document.getElementById("canvas");
	      var context = canvas.getContext("2d");


	      context.beginPath();
				context.rect(0, 0, 1000, 1000);
				context.fillStyle = "white";
				context.fill();




				base_image = new Image();
  			base_image.src = picture;


  				base_image.onload = function(){
    					context.drawImage(base_image, 0, 0, 200, 200);
  				}


          if (deepfry == "true")
          {

          lit_image = new Image();
          lit_image.src = "https://mbtskoudsalg.com/images/lit-emoji-png-2.png";

    			lit_image.onload = function(){
    					context.drawImage(lit_image, 70, 120, 120, 70);
  				}
          }

  				context.font = "30px Arial";
  				context.fillStyle = "black";
				  context.fillText("sasuga " + username + "-sama", 235,100);

          if (deepfry == "true") context.filter = 'contrast(100)';
	          var dataUrl = canvas.toDataURL();
        }

        console.log("Meme created...");
