var typeArray = ["sword","spear","hummer","shield","gun","crossbow","bow","cannon","spell","song"];
var attrArray = ["pp","mm","hh","ww","pw","mw","hw"];
var attrArray2 = ["平","山","平山","水","平水","山水","平山水"];

//武器名稱顯示 2016/11/13

function displayWeapon(type)  {

  var weaponName = "";


  switch (type) {
    case 'sword':weaponName = "刀" ;break;
    case 'spear':weaponName = "槍" ;break;
    case 'hummer':weaponName = "槌" ;break;
    case 'shield':weaponName = "盾" ;break;
    case 'gun':weaponName = "鐵炮" ;break;
    case 'crossbow':weaponName = "弩" ;break;
    case 'bow':weaponName = "弓" ;break;
    case 'cannon':weaponName = "大砲" ;break;
    case 'spell':weaponName = "符" ;break;
    case 'song':weaponName = "歌舞" ;break;
    default: '';
  }
    return weaponName;
}

function transAttr(attr)  {


  var attrName = "";


  switch (attr) {
    case '平':attrName = "pp" ;break;
    case '平山':attrName = "hh" ;break;
    case '山':attrName = "mm" ;break;
    case '水':attrName = "ww" ;break;
    case '平水':attrName = "pw" ;break;
    case '平山水':attrName = "hw" ;break;
    case '山水':attrName = "mw" ;break;
    default: '';
  }
    return attrName;
}

function transAttr2(attr)  {


  var attrName = "";


  switch (attr) {
    case 'pp':attrName = "平" ;break;
    case 'hh':attrName = "平山" ;break;
    case 'mm':attrName = "山" ;break;
    case 'ww':attrName = "水" ;break;
    case 'pw':attrName = "平水" ;break;
    case 'hw':attrName = "平山水" ;break;
    case 'mw':attrName = "山水" ;break;
    default: '';
  }
    return attrName;
}


//計算城娘設計等級數值 2016/11/12

function countValue(){




      $("tbody").empty();   //清除原有頁面上LIST
      $("#tfoottd").empty(); //清除原有TFOOT資訊

      var hp,atk,def,hp0,atk0,def0,hp100,atk100,def100;


      var table = $('<table></table>');

      var lv = document.getElementById('currectlv').value;
      var likeRank = document.getElementById('likeRank').value;

      var xmlDoc = $.parseXML(basedata);


      var xmlDoc2 = $.parseXML(pars);

      var i = 0;

      $.each(typeArray,function(index,value){


          var total = $(xmlDoc2).find(value).length;
          hp0 = parseInt($(xmlDoc).find(value).children('hp').children('lv0').text());
          atk0 = parseInt($(xmlDoc).find(value).children('atk').children('lv0').text());
          def0 = parseInt($(xmlDoc).find(value).children('def').children('lv0').text());
          hp100 = parseInt($(xmlDoc).find(value).children('hp').children('lv100').text());
          atk100 = parseInt($(xmlDoc).find(value).children('atk').children('lv100').text());
          def100 = parseInt($(xmlDoc).find(value).children('def').children('lv100').text());


           $(xmlDoc2).find(value).each(function(){

           var name = $(this).attr('name');
           var attr = $(this).attr('attr');
           var rare = $(this).attr('rare');
           var hpP = $(this).children('hp').text();
           var atkP = $(this).children('atk').text();
           var defP = $(this).children('def').text();


           /* count LV Values 2016/11/12
             A1：LV0基礎值  A2：LV100基礎值  R：係數值  L：好感值  LV：欲計算的等級
             RESULT = Math.floor(R*(A1+Math.floor(A2-A1)*LV/100))*(1+L/1000)
           */

           hp  = Math.floor(Math.floor(Math.floor((hp100-hp0)*lv/100+hp0)*hpP)*(1+likeRank/1000));
           atk = Math.floor(Math.floor(Math.floor((atk100-atk0)*lv/100+atk0)*atkP)*(1+likeRank/1000));
           def = Math.floor(Math.floor(Math.floor((def100-def0)*lv/100+def0)*defP)*(1+likeRank/1000));





          $("tbody").append("<tr id='"+value+"_"+rare+"_"+transAttr(attr)+
          "'><td class=' text-center'>"+(1+i)+
           "<td class=' text-center'>"+displayWeapon(value)+
           "<td class=' text-center'>"+name+
           "</td><td class=' text-center'>"+attr+
           "</td><td class=' text-center'>"+rare+
           "</td><td class=' text-center'>"+hp+
           "</td><td class=' text-center'>"+atk+
           "</td><td class=' text-center'>"+def+
           "</td></tr>");

           i++;

           });

});

    $("#tfoottd").append("城娘資料總數："+i+"位，最後更新日期：2016/11/13");

};

$(document).ready(function () {

    countValue();


});
