$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 200, function(){
   
       
      });
    } 
  });
  	function sectionHeaderChange (section, quote) {
  		var sectionHeader = $("#" + section + " > h2").text();
		$("#" + section + " > h2").hover(function() {
			$(this).css("font-family","Exo,sans-serif");
			$(this).text(quote);
		}, function() {
			$(this).css("font-family","Lobster,cursive");
			$(this).text(sectionHeader);
		});
	};

	sectionHeaderChange("skills","The world is before you and you need not take it or leave it as it was when you came in. - James Baldwin");
	sectionHeaderChange("education","It was books that taught me that the things that tormented me most were the very things that connected me with all the people who were alive, or who had ever been alive. - James Baldwin");
	sectionHeaderChange("work","Far and away the best prize that life has to offer is the chance to work hard at work worth doing. - Theodore Roosevelt");
	sectionHeaderChange("interests","Not all those who wander are lost. – J.R.R. Tolkien");

	 $(".interests").each(function() {
		$(this).css("background-image", "url("+$(this).attr("data-url")+")");
		$(this).find(".inner").css('margin-top', ($(this).height() - $(this).find(".inner").height()) / 2);
	});

	$(".interests").hover(function(e){
		var i = ($(".interests").height() - $(this).find(".content").height() + 20) / 2;
		$(this).find(".overlay").stop().animate({ backgroundColor: 'rgba(0,0,0,0.9)' }, 'slow');
		$(this).find(".content").slideDown("fast","linear");
 		$(this).find(".inner").stop().animate({ marginTop: i }, 'slow');
	}, function(){
		var i = ($(".interests").height() - $(this).find(".title").height()) / 2;
		$(this).find(".overlay").stop().animate({ backgroundColor: 'rgba(0,0,0,0.0.75)' }, 'slow');
		$(this).find(".content").slideUp("fast","linear");
		$(this).find(".inner").stop().animate({ marginTop: i }, 'slow');
	});



});