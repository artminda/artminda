var bgArray = new Array(
    "https://i.imgur.com/McRCner.jpg",
    "https://i.imgur.com/owrCaj3.jpg", "https://i.imgur.com/kNmA7qB.jpg");

var i = 0;

function setInitialBg() {
    $('.bg').css({
        "background-image": "url('" + bgArray[i] + "')",
        "background-size": "cover"
    });
    i++;
};
setInitialBg();


// 1
function slideOffSideBlock() {
    $('#sideBlock').removeClass('is-active-side-block');
    $('#sideBlock').addClass('un-active-side-block');
};

// 2
function fadeOutContent() {
    $('p').removeClass('is-active-content');
    $('p').addClass('un-active-content');
    setTimeout(function () {
        $('h2').removeClass('is-active-content');
        $('h2').addClass('un-active-content');
    }, 100);
};

//3
function loader() {
    setTimeout(function () {
        $('#loader').addClass('load-in');
        setTimeout(function () {
            $('#loader').removeClass('load-in');
        }, 2000);
    }, 500);
};

//4
function changeBg() {
    if (i < 2) {
        $('.bg').css({
            "background-image": "url('" + bgArray[i] + "')",
            "background-size": "cover"
        });
        i++;
    } else {
        $('.bg').css({
            "background-image": "url('" + bgArray[2] + "')",
            "background-size": "cover"
        });
        i = 0;
    }
};

//5
function slideOnSideBlock() {
    $('#sideBlock').removeClass('un-active-side-block');
    $('#sideBlock').addClass('is-active-side-block');
};

//6
function fadeInContent() {
    $('h2').removeClass('un-active-content');
    $('h2').addClass('is-active-content');
    setTimeout(function () {
        $('p').removeClass('un-active-content');
        $('p').addClass('is-active-content');
    }, 100);
};





function mainApp() {
    slideOffSideBlock();
    fadeOutContent();
    loader();
    setTimeout(function () {
        changeBg();
    }, 1200);
    setTimeout(function () {
        slideOnSideBlock();
        setTimeout(function () {
            fadeInContent();
        }, 500);
    }, 2000);
};


// PARALLAX EFFECTS




