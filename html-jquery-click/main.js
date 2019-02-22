$(document).ready(function() {
  // YOUR CODE HERE
  // Do NOT create a variable to hold the count value.

  	
	$(".upvote").click(function(){
  		//new answer
      $(".count").text(function(i, value){ 
        return +value + 1;
      });

  })
      //old answer
      // // $(".count").text(count=count+1)    //this works if used with variable
      // $(".count").text(1)
  	// });

	$(".downvote").click(function(){
  		//new answer
      $(".count").text(function(i, value){ 
        return +value - 1;
      });
      //old answer
      // $(".count").text(count=count-1)    //this works if used with variable
      // $(".count").text(-1)    
  	});
});
