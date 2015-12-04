$(document).ready(function(){
  $('.bxslider').bxSlider(
  	{
  		auto: true,
  		controls: false,
  		pager: false,
  		minSlides:1,
  		maxSlides: 3,
  		slidewidth:0,
  		slidemargin: 0

  	
  	 });
});

   $(function() {
      var today = new Date,
          dayOfWeek = today.getDay(),
          days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          hours;

      if ( dayOfWeek !== 0 && dayOfWeek !== 6 ) {
         hours = 'We’re open';
      } else {
         hours = 'We’re closed!';
      }

      $('.day-of-week').text(days[dayOfWeek]);
      $('.business-hours').text(hours);

   });

     $(function() {
        $( "#datepicker" ).datepicker();
        });
      