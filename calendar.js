$( document ).ready(function() {


   $('body').hide();
   $('body').fadeIn(1000);

   var colorIndicator;
   var idMonthIndicator;
   var idDaysIndicator;

	months = ['January','Februari','Mars','April','May','June','July','August','September','October','November','December'];
	days = [31,28,31,30,31,30,31,31,30,31,30,31]
   dayNames = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

	for(i = 1; i <= 12; i++){
   		$('.months').append('<div class="month" id='+i+'><p>'+months[i-1]+'</p></div>');
	}
	//for(j = 1; j<=31; j++){
   //		$('.days').append('<div class="numberDays" id="day'+j+'"><p>'+j+'</p></div>');
   //	}
   for(i = 1; i <= 7; i++){
         $('.months').append('<div class="dayName"><p>'+dayNames[i-1]+'</p></div>');
   }
   $('.month').hover(function(){
      var id = this.id
      if(id != idMonthIndicator){
         colorIndicator = $(this).css('background-color');
         $('#'+id).css({'background':'red'});
      }},
   function(){
      var id = this.id
      if(id != idMonthIndicator){
      $('#'+id).css({'background':'#2a2a5b'});
   }});
   $('.month').click(function(){
      var id = this.id;
      if(idMonthIndicator == undefined){
         idMonthIndicator = id;
         $('#'+idMonthIndicator).css({'background': 'red'})
         $('#select').fadeOut();
         if(id == 1 || id == 3 || id == 5 || id == 7 || id == 8 || id == 10 || id == 12){
            day = 31;
         }
         else if(id == 4 || id == 6 || id == 9 || id == 11){
            day = 30;
         }
         else {
            day = 28;
         }
         for(j = 1; j<=day; j++){
            $('.days').append('<div class="numberDays" style="display:null" id="day'+j+'"><p>'+j+'</p></div>').hide().fadeIn(500);
         }
         $('.numberDays').click(function(){
            var id = this.id;
            insertForm();
            if(idDaysIndicator == undefined){
               idDaysIndicator = id;
               $('#'+idDaysIndicator).css({'background': 'red'});
            }
            else if(id != idDaysIndicator){
               $('#'+idDaysIndicator).css({'background':'#FBF9F3'});
               idDaysIndicator = id;
               $('#'+idDaysIndicator).css({'background': 'red'});
            }
            else{
               $('#'+idDaysIndicator).css({'background':'#FBF9F3'});
               idDaysIndicator = undefined;
            }
            });
         $('.numberDays').hover(function(){
            var id = this.id
            if(id != idDaysIndicator){
               colorIndicator = $(this).css('background-color');
               $('#'+id).css({'background':'red'});
            }},
            function(){
               var id = this.id
               if(id != idDaysIndicator){
                  $('#'+id).css({'background':'#FBF9F3'});
               }});
      ;}
      else if(id != idMonthIndicator){
         $('#'+idMonthIndicator).css({'background':'#2a2a5b'});
         idMonthIndicator = id;
         $('#'+idMonthIndicator).css({'background': 'red'});
         $('.numberDays').remove();
         if(id == 1 || id == 3 || id == 5 || id == 7 || id == 8 || id == 10 || id == 12){
            day = 31;
         }
         else if(id == 4 || id == 6 || id == 9 || id == 11){
            day = 30;
         }
         else {
            day = 28;
         }
            for(j = 1; j<=day; j++){
               $('.days').append('<div class="numberDays" style="display: null" id="day'+j+'"><p>'+j+'</p></div>').hide().fadeIn(500);
            }
         $('.numberDays').click(function(){
            var id = this.id;
            insertForm();
            console.log(idDaysIndicator);
            if(idDaysIndicator == undefined){
               console.log('if1');
               idDaysIndicator = id;
               console.log(idDaysIndicator);
               $('#'+idDaysIndicator).css({'background': 'red'});
            }
            else if(id != idDaysIndicator){
               console.log('if2');
               $('#'+idDaysIndicator).css({'background':'#FBF9F3'});
               idDaysIndicator = id;
               $('#'+idDaysIndicator).css({'background': 'red'});
            }
            else{
               console.log('else');
               $('#'+idDaysIndicator).css({'background':'#FBF9F3'});
               idDaysIndicator = undefined;
            }
            });
         $('.numberDays').hover(function(){
            var id = this.id;
            if(id != idDaysIndicator){
               colorIndicator = $(this).css('background-color');
               $('#'+id).css({'background':'red'});
            }},
            function(){
               var id = this.id
               if(id != idDaysIndicator){
                  $('#'+id).css({'background':'#FBF9F3'});
               }});
      }
      else{
         $('#'+idMonthIndicator).css({'background':'#2a2a5b'});
         idMonthIndicator = undefined;
         $('.numberDays').remove();
         $('#select').fadeIn(); 
      }
   	});
   

   function insertForm(){
      $('body').append('<div class="layer"></div>').hide().fadeIn(800);
      $('body').append('<div class="form"></div>')
   }
});
