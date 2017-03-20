/**
 * Created by Olya on 11.02.2017.
 */
var arr = [];
var myArr = [];
var numbers = [1,2,3];
var myForms = ['diamond', 'oval', 'worm'];
var colors = ['red', 'green', 'violet'];
var paints = ['empty', 'painted', 'strip'];

//$(function () {


    var Id = 0;
    for(var i=0;i<numbers.length;i++) {


        for(var l=0;l<colors.length;l++) {

            for (var f = 0; f < paints.length; f++) {


                for (var j = 0; j < myForms.length; j++) {
                    myArr.push(getCard(Id, numbers[i], myForms[j], colors[l], paints[f]));
                    Id++;
                }
            }

        }

    }



    for(var a=0;a<12;a++) {
        cardSelect(".main-12");
    }

    $('.buttons-more').one('click', function () {
        for(var a=0;a<3;a++) {
            cardSelect(".main-add-3");
        }
    });


    $('.buttons-new-game').on('click', function () {
        location.reload();
    });


    // var cardDiamond = '<div class="card-item" style="width: 100px; height: 160px; margin: 20px; border: 1px solid #c5cccf; border-radius: 20px; background-color: #ffffff; display: flex;  justify-content: center; align-items: center; flex-direction: column;"> <div class="card-inside" style="background-color: green; width: 30px; height: 30px; transform: rotate(-45deg) skew(20deg, 20deg);"></div></div>';

//});
function getCard (id, number, myForm, color, paint) {
    var cardItself = {
        form: myForm,
        color: color,
        number: number,
        painted: paint,
        id: id,
        name: '<div onclick="getFocus(this)" class="card" id="' + id +'"><img class="card-img" src="images/' + number + '-' + color + '-' + myForm +'-' + paint +'.jpg" alt=""></div>'
    };
    return cardItself;
}
function getByValueOnTable(id) {
    for (var i=0; i<arr.length; i++) {

        if (arr[i].id == id) return arr[i];
    }
}
function cardSelect(selector) {
    var rand = Math.floor(Math.random() * myArr.length);
    $(selector).append(myArr[rand].name);
    var card = myArr[rand];
    arr.push(card);
    myArr.splice(rand,1);
}
function getFocus(elem) {
    $(elem).toggleClass('card-hover');
    var g = getByValueOnTable(elem.id);
    var h =7;

    var elements = document.getElementsByClassName('card-hover');

    if(elements.length>3){
        alert('НИ')
    }
}

