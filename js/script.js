/**
 * Created by Olya on 11.02.2017.
 */

$(function () {

    var cardDiamond = '<div class="card-item" style="width: 100px; height: 160px; margin: 20px; border: 1px solid #c5cccf; border-radius: 20px; background-color: #ffffff; display: flex;  justify-content: center; align-items: center; flex-direction: column;"> <div class="card-inside" style="background-color: green; width: 30px; height: 30px; transform: rotate(-45deg) skew(20deg, 20deg);"></div></div>';
    var cardDiamond2 = '<div class="card-item" style="width: 100px; height: 160px; margin: 20px; border: 1px solid #c5cccf; border-radius: 20px; background-color: #ffffff; display: flex;  justify-content: center; align-items: center; flex-direction: column;"> <div class="card-inside" style="background-color: green; width: 30px; height: 30px; transform: rotate(-45deg) skew(20deg, 20deg);"></div><div class="card-inside" style="background-color: green; width: 30px; height: 30px; transform: rotate(-45deg) skew(20deg, 20deg);"></div></div>';
    var cardDiamond3 = '<div class="card-item" style="width: 100px; height: 160px; margin: 20px; border: 1px solid #c5cccf; border-radius: 20px; background-color: #ffffff; display: flex;  justify-content: center; align-items: center; flex-direction: column;"> <div class="card-inside" style="background-color: green; width: 30px; height: 30px; transform: rotate(-45deg) skew(20deg, 20deg);"></div><div class="card-inside" style="background-color: green; width: 30px; height: 30px; transform: rotate(-45deg) skew(20deg, 20deg);"></div><div class="card-inside" style="background-color: green; width: 30px; height: 30px; transform: rotate(-45deg) skew(20deg, 20deg);"></div></div>';

    var arr = [cardDiamond, cardDiamond2, cardDiamond3];

    var rand = Math.floor(Math.random() * arr.length);


    for(var i=0;i<12;i++){
        $(".main-12").append(arr[rand]);
     }

});