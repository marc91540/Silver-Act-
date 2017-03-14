$(function(){
    
    $('html,body').fadeIn(2500);
        $('#la-grande-epicerie').animate({'right':'200','opacity':'1'},1500,function(){
        $('#produit-boissons').animate({'right':'240','opacity':'1'},1200);
        $('#slide_inside1').animate({'right':'150','opacity':'1'},1500);
    
    });
}); 

$(function(){
    $('#section1').parallax("center",0.6);
    $('#section2').parallax("center",1.0);
    $('#section3').parallax("center",1.2);
});


$(function(){
  $(window).scroll(function(){
        $('h1').text($(this).scrollTop());
        
        $('#section2>#petale2-flou').css('top',function(index,value){return 1100-$(window).scrollTop()*1.0});
        $('#section2>#petale4-flou').css('top',function(index,value){return 2350-$(window).scrollTop()*0.9});
        $('#section2>#petale5-flou').css('top',function(index,value){return 700-$(window).scrollTop()*0.3});
        $('#section2>#petale6-flou').css('top',function(index,value){return 1350-$(window).scrollTop()*0.4});
      
        $('#section2>#petale1-nette').css('top',function(index,value){return 1650-$(window).scrollTop()*0.8});
        $('#section2>#petale3-nette').css('top',function(index,value){return 2350-$(window).scrollTop()*1.3});
      
    });
});  
      
      
      

$(function(){
    
    var close=true;
        $('#onglet').on('click',function(){
            
            if(close==true){
                $('header').animate({'top':'0'},400);
                $('#onglet img').attr('src','images/fermer.png'); 
                close=false; 
                
            }else{
                $('header').animate({'top':'-120'},400);
                $('#onglet img').attr('src','images/ouvrir.png'); 
                close=true;
            }
        });
    });



$(function(){
    
    $('#home').on('click',function(){
        $('html,body').stop().animate({scrollTop:$('#section1').offset().top},1000);return false; 
    });
    
    $('#miss').on('click',function(){
        $('html,body').stop().animate({scrollTop:$('#section2').offset().top},1000);return false;
    });
    
    $('#men').on('click',function(){
        $('html,body').stop().animate({scrollTop:$('#section3').offset().top},2000);return false;
    });

});


$(function(){
    
    $('#retour').on('click',function(){
        $('html,body').stop().animate({scrollTop:$('#section1').offset().top},2000);return false; 
    });

});