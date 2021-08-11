
$(function(){
  $('#counter').attr('src',$('#counter').data('ancounter')+'+'+document.referrer+'+'+document.host);
  $('.menu,#top,input[type=button],input[type=submit]').button().css({'font-weight':'bold','font-size':'10pt'});
  $('.menu').css({'height':'32px','display':'table-cell','vertical-align':'middle'});
  $('textarea,input[type=text],select').css({'border':'1px solid #cccccc','border-radius':'3px'});
  $('.contents').css('border-radius','5px');
  $('hr').css({'height':'1px','border':'0','border-top':'1px solid #cccccc','margin':'1em 0','padding':'0'});
  $('body,td').css('font-family','Meiryo,Osaka,Arial,sans-serif');
  $('html').css({'height':'100%','overflow-y':'scroll'});
  $('#title').css({'cursor':'pointer','letter-spacing':'0.1em','font-weight':'bold','font-family':'Meiryo,Osaka,Arial,sans-serif','color':'#ffffff','font-size':'40pt','text-shadow':'0 1px 0 #bbb,0 2px 0 #bbb,0 3px 0 #aaa,0 4px 0 #aaa,0 5px 0 #999,0 6px 1px #000,0 0px 3px #000,0 1px 3px #000,0 3px 5px #000,0 5px 10px #000,0 5px 20px #000'});
  $('a img').css('border','none');
  $('#counter').css({'margin-top':'-2px','margin-left':'10px'});
  $('.outside').css('text-decoration','none');
});
jQuery(function(t){t.datepicker.regional.ja={closeText:"閉じる",prevText:"&#x3C;前",nextText:"次&#x3E;",currentText:"今日",monthNames:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],monthNamesShort:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],dayNames:["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"],dayNamesShort:["日","月","火","水","木","金","土"],dayNamesMin:["日","月","火","水","木","金","土"],weekHeader:"週",dateFormat:"yy/mm/dd",firstDay:0,isRTL:!1,showMonthAfterYear:!0,yearSuffix:"年"},t.datepicker.setDefaults(t.datepicker.regional.ja)});
