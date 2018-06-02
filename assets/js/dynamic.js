// individual Services titles
function changeServiceContent(serviceId1, title1, serviceId2, title2, serviceId3, title3,serviceId4, title4,serviceId5, title5)
{
var ChangeTitle1 = document.getElementById(serviceId1);
var ChangeTitle2 = document.getElementById(serviceId2);
var ChangeTitle3 = document.getElementById(serviceId3);
var ChangeTitle4 = document.getElementById(serviceId4);
var ChangeTitle5 = document.getElementById(serviceId5);
ChangeTitle1.innerHTML = title1;
ChangeTitle2.innerHTML = title2;
ChangeTitle3.innerHTML = title3;
ChangeTitle4.innerHTML = title4;
ChangeTitle5.innerHTML = title5;
};

(function (){
    changeServiceContent("id1","خدمات <br> قطاع الاعمال","id2","خدمات <br>الافراد","id3","الخدمات <br>الاكثر استخداما","id4","جميع <br>الخدمات","id5","خدمات <br> جديدة");
})();


//  individual Services (data 2-ways to fill data )
// 1/from json object *requried* 
// 2/from json file * the commented code*

$(document).ready(function(){

    var arr=[];

    for(var i=0;i<10;i++){
        var indvidualobject= {
         
            "title":i+1+ "نص لوريم ايبسوم القياسي والمستخدم",
            "description": "لوريم ايبسوم هو ببساطة نص شكلى (بمعنى ان الغاية هى الشكل وليس المحتوى ) ويستخدم فى صناعات المطابع ودور النشر . كان لوريم ايبسوم ولا يزال المعيار",
            "link" : "استفد من الخدمة"
          };
          arr[i]=indvidualobject;
    }
    //get data from filled array
    $.each(arr,function(i,item){
        var html='<h2 class="l-s-padding">'+item.title+' </h2>'+'<p class="l-s-padding">'+item.description+'</p>'+'<div class="content-bottom"> <ul><li><img src="assets/images/svg/Services-Electronic-Icon.svg"></li> <li><img src="assets/images/svg/Services-Manual-Icon.svg"></li> </ul> <a href="#">'+item.link+'</a> </div>'
        $('.owl-carousel').owlCarousel().trigger('add.owl.carousel', [jQuery('<div class="item">' + html + '</div>')]).trigger('refresh.owl.carousel');
          
      })
    
    //Get data from Json File 
    /*
    $(function(){
        var $allData = $('.owl-theme .item');
        $.ajax({
    type:'GET',
    url:'./../individualServices.json',
    success: function(data){
      
    
      $.each(data,function(i,item){
        var html='<h2 class="l-s-padding">'+item.title+' </h2>'+'<p class="l-s-padding">'+item.description+'</p>'+'<div class="content-bottom"> <ul><li><img src="assets/images/svg/Services-Electronic-Icon.svg"></li> <li><img src="assets/images/svg/Services-Manual-Icon.svg"></li> </ul> <a href="#">'+item.link+'</a> </div>'
        $('.owl-carousel').owlCarousel().trigger('add.owl.carousel', [jQuery('<div class="item">' + html + '</div>')]).trigger('refresh.owl.carousel');
         
      })
    
    }
        });
    });
    
    
*/
});


