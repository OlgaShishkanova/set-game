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

$(function () {


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

        $( ".buttons-more" ).css('background-color','#c5cccf');

        $('.card-left').html(packArr.length);
    });


    $('.buttons-new-game').on('click', function () {
        location.reload();
    });

    $(".help-window").each(function() {
        var modalWidth = $(this).innerWidth() / 2;

        $(this).css({
            "marginLeft": "-" + modalWidth + "px"
        });

    });

    $('.button-help').on("click", function (e) {
        e.preventDefault();

        var currentModal = $(this).attr("href");

        $('.help-window').fadeIn(500);
        $("body").append("<div class='overlay' id='js-overlay'></div>").addClass("open-modal");
    });

    $(".close-button").on("click", function (e) {
        e.preventDefault();
        $(".help-window").fadeOut(100);
        $("body").removeClass("open-modal");
        $("#js-overlay").remove();
    });

    $("body").on("click","#js-overlay", function () {
        $(".help-window").fadeOut(100);
        $("body").removeClass("open-modal");
        $("#js-overlay").remove();
    });


    $('.buttons-find').on('click',function () {




        for(var i=0;i<deckArr.length;i++) {
            var firstCard =  deckArr[i];
            for(var j=0;j<deckArr.length;j++) {
                var secondCard =  deckArr[j];
                if(firstCard.id == secondCard.id) continue;
                for(var z=0;z<deckArr.length;z++) {
                    var thirdCard =  deckArr[z];
                    if(secondCard.id == thirdCard.id || firstCard.id == thirdCard.id ) continue;
                    if(compare(firstCard, secondCard, thirdCard)){

                        $('#' + firstCard.id).addClass('card-hover-right');
                        $('#' + secondCard.id).addClass('card-hover-right');
                        $('#' + thirdCard.id).addClass('card-hover-right');

                        setTimeout(function () {
                        $('#' + firstCard.id).removeClass('card-hover-right');
                        $('#' + secondCard.id).removeClass('card-hover-right');
                        $('#' + thirdCard.id).removeClass('card-hover-right');

                        }, 2000);
                        return;
                    }
                }
            }
        }

    });


    // var cardDiamond = '<div class="card-item" style="width: 100px; height: 160px; margin: 20px; border: 1px solid #c5cccf; border-radius: 20px; background-color: #ffffff; display: flex;  justify-content: center; align-items: center; flex-direction: column;"> <div class="card-inside" style="background-color: green; width: 30px; height: 30px; transform: rotate(-45deg) skew(20deg, 20deg);"></div></div>';

});
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

function compare(first, second, third){
    var formMatch = (first.form === second.form && second.form === third.form) || (first.form !== second.form && second.form !== third.form && first.form !== third.form);
    var colorMatch = (first.color === second.color && second.color === third.color) || (first.color !== second.color && second.color !== third.color && first.color !== third.color);
    var numberMatch = (first.number === second.number && second.number === third.number) || (first.number !== second.number && second.number !== third.number && first.number !== third.number);
    var paintedMatch = (first.painted === second.painted && second.painted === third.painted) || (first.painted !== second.painted && second.painted !== third.painted && first.painted !== third.painted);

    var result = (formMatch == true) && (colorMatch == true) && (numberMatch == true) && (paintedMatch == true);

    return result;
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


            //if(true){
            if((formMatch == true) && (colorMatch == true) && (numberMatch == true) && (paintedMatch == true) ) {


                $('.modal-true').show();

                setTimeout(function () {
                    $('.modal-true').hide();
                }, 3000);

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

                setTimeout(function () {
                    $('.modal-false').hide();
                }, 2000);

                $('.modal-true').hide();
            }

            elements.removeClass('card-hover');
            setArr.splice(0, 3);
            $( ".buttons-more" ).css('background-color','#66aec4');
            $('.card-left').html(packArr.length);
        }
    }

}

