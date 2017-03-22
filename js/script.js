/**
 * Created by Olya on 11.02.2017.
 */
var deckArr = [];
var packArr = [];
var setArr= [];
var numbers = [1,2,3];
var forms = ['diamond', 'oval', 'worm'];
var colors = ['red', 'green', 'violet'];
var paints = ['empty', 'painted', 'strip'];
var score = 0;

//$(function () {


    var Id = 0;
    for(var i=0;i<numbers.length;i++) {


        for(var l=0;l<colors.length;l++) {

            for (var f = 0; f < paints.length; f++) {


                for (var j = 0; j < forms.length; j++) {
                    packArr.push(getCard(Id, numbers[i], forms[j], colors[l], paints[f]));
                    Id++;
                }
            }

        }

    }



    for(var a=0;a<12;a++) {
        cardSelect(".main-12");
    }

    $('.buttons-more').on('click', function () {
        if(deckArr.length==15) return;
        for(var a=0;a<3;a++) {
            cardSelect(".main-add-3");
        }
        $('.card-left').html(packArr.length);
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

    var newarr = deckArr.filter(function(x) {
        return x.id == id;
    });
    return newarr[0];

    // for (var i=0; i<deckArr.length; i++) {
    //
    //     if (deckArr[i].id == id) return deckArr[i];
    // }
}
function deleteFromArr(card, array, number) {
    for (var i=0; i<array.length; i++) {

        if (array[i].id == card.id) array.splice(i,number);
    }
}

function cardSelect(selector) {
    var rand = Math.floor(Math.random() * packArr.length);
    $(selector).append(packArr[rand].name);
    var card = packArr[rand];
    deckArr.push(card);
    packArr.splice(rand,1);
}


function getFocus(elem) {
    if($(elem).hasClass('card-hover')){
        $(elem).removeClass('card-hover');
        var card = getByValueOnTable(elem.id);

        deleteFromArr(card,setArr,1);
    }else{
        $(elem).addClass('card-hover');
        var card = getByValueOnTable(elem.id);
        setArr.push(card);

        var elements = $('.card-hover');

        if(elements.length==3){

            var formMatch = (setArr[0].form === setArr[1].form && setArr[1].form === setArr[2].form) || (setArr[0].form !== setArr[1].form && setArr[1].form !== setArr[2].form && setArr[0].form !== setArr[2].form);
            var colorMatch = (setArr[0].color === setArr[1].color && setArr[1].color === setArr[2].color) || (setArr[0].color !== setArr[1].color && setArr[1].color !== setArr[2].color && setArr[0].color !== setArr[2].color);
            var numberMatch = (setArr[0].number === setArr[1].number && setArr[1].number === setArr[2].number) || (setArr[0].number !== setArr[1].number && setArr[1].number !== setArr[2].number && setArr[0].number !== setArr[2].number);
            var paintedMatch = (setArr[0].painted === setArr[1].painted && setArr[1].painted === setArr[2].painted) || (setArr[0].painted !== setArr[1].painted && setArr[1].painted !== setArr[2].painted && setArr[0].painted !== setArr[2].painted);


            if(true){
            //if((formMatch == true) && (colorMatch == true) && (numberMatch == true) && (paintedMatch == true) ) {
                $('.modal-true').show();
                $('.modal-false').hide();

                $('.card-hover').remove();

                setArr.forEach(function(x) {
                    deleteFromArr(x,deckArr,1);
                });

                $('.score').html(++score);


                if($('.main-add-3').filter(':parent')) {
                    var cut = $('.main-add-3').children().detach();
                    $('.main-12').prepend(cut);
                }
                if(deckArr.length<12){
                    for(var a=0;a<3;a++) {
                        cardSelect(".main-12");
                    }
                }

            } else {
                $('.modal-false').show();
                $('.modal-true').hide();
            }

            elements.removeClass('card-hover');
            setArr.splice(0, 3);

            $('.card-left').html(packArr.length);
        }
    }

}

