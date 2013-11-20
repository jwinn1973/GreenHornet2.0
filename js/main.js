(function(){

    var head = document.getElementById('featureHeader');
    var cta = document.getElementById('cta');
    var rTime = document.getElementById('runTime');
    var descrip = document.getElementById('description')
    var descripTwo = document.getElementById('descriptionTwo')
    var oDate = document.getElementById('date');
    var dLink = document.getElementById('descriptionLink');

    var showAudio = function(){
        document.getElementById("audio").style.display ="block";
    }

    // Show Video

    var show_videoOne = function(){
        document.getElementById('cta').style.display = "none";
        document.getElementById('enoughRope').style.display = "none";
        document.getElementById('programmed').style.display = "none";
        document.getElementById("silent").style.display ="block";
        console.log("video is playing")
    }

    var show_videoTwo = function(){
        document.getElementById('cta').style.display = "none";
        document.getElementById('silent').style.display = "none";
        document.getElementById('programmed').style.display = "none";
        document.getElementById("enoughRope").style.display ="block";
        console.log("video is playing")
    }

    var show_videoThree = function(){
        document.getElementById('cta').style.display = "none";
        document.getElementById('silent').style.display = "none";
        document.getElementById("enoughRope").style.display ="none";
        document.getElementById("programmed").style.display ="block";
        console.log("video is playing")
    }


    var displayOne = function(){
        head.innerHTML = "The Silent Gun";
        rTime.innerHTML = "RunTime: 24:07";
        descrip.innerHTML = "In this premiere episode, Dave Bannister is shot at a funeral with 20 witnesses present " +
        "and not a shot was heard, not even from the Green Hornet's" +
        "friend, the District Attorney, who was also attending. A messenger from a Brokerage House," +
        "carrying $5000 in negotiable bonds, is the Silent Gun's second victim. The Green Hornet and Kato respond in" +
        "the infamous Black Beauty and hit the streets to track down the villainous culprit.";
        descripTwo.innerHTML = "";
        dLink.innerHTML = "Episode Two: Give'em Enough Rope";
        oDate.innerHTML = "September 09, 1966";
        next = document.getElementById('descriptionLink')
        next.addEventListener('click', displayTwo, false);
        next.addEventListener('click', show_videoTwo, false)
    }

    var displayTwo = function(){
        head.innerHTML = "Give'em Enough Rope";
        rTime.innerHTML = "RunTime: 24:46";
        descrip.innerHTML = "Publisher Britt Reid employs his alter ego The Green Hornet to bail him out when a " +
        "overzealous reporter, exposing a fake injury insurance scam, leaves Reid's newspaper vulnerable to a libel " +
        "suit. A masked man in a black costume swoops down on a rope, strangling the reporter's source, and the " +
        "reporter alleges the Green Hornet's behind the racket. Reid sweet-talks a luscious libel attorney, while The " +
        "Hornet and sidekick Kato pretend to horn in on the racket. Al Hirt's blaring jazz trumpet backs the action.";
        descripTwo.innerHTML = "";
        dLink.innerHTML = "Episode Three: Programmed For Death";
        oDate.innerHTML = "September 16, 1966";
        next = document.getElementById('descriptionLink')
        next.addEventListener('click', displayThree, false);
        next.addEventListener('click', show_videoThree, false)
    }

    var displayThree = function(){
        head.innerHTML = "Programmed For Death";
        rTime.innerHTML = "RunTime: 24:45";
        descrip.innerHTML = "In this premiere episode, Dave Bannister is shot at a funeral with 20 witnesses present" +
        "and not a shot was heard, not even from the Green Hornet's friend, the District Attorney, who was also" +
        "attending. A messenger from a Brokerage House, carrying $5000 in negotiable bonds, is the Silent" +
        "Gun's second victim. The Green Hornet and Kato respond in the infamous Black Beauty and hit the" +
        "streets to track down the villainous culprit.";
        descripTwo.innerHTML = "";
        dLink.innerHTML = "Episode One: The Silent Gun";
        oDate.innerHTML = "September 23, 1966";
        next = document.getElementById('descriptionLink')
        next.addEventListener('click', displayOne, false);
        next.addEventListener('click', show_videoOne, false)
    }

    // Event Listeners for Programmed For Death

    btnThree = document.getElementById('playThree')
    btnThree_a = document.getElementById('tThree')
    btnThree_b = document.getElementById('dThree')

    btnThree.addEventListener('click', displayThree, false);
    btnThree_a.addEventListener('click', displayThree, false);
    btnThree_b.addEventListener('click', displayThree, false);

    btnThree.addEventListener('click', show_videoThree, false);
    btnThree_a.addEventListener('click', show_videoThree, false);
    btnThree_b.addEventListener('click', show_videoThree, false);

    // Event Listeners for Enough Rope

    btnTwo = document.getElementById('playTwo')
    btnTwo_a = document.getElementById('dTwo')
    btnTwo_b = document.getElementById('tTwo')

    btnTwo.addEventListener('click', displayTwo, false)
    btnTwo_a.addEventListener('click', displayTwo, false)
    btnTwo_b.addEventListener('click', displayTwo, false)

    btnTwo.addEventListener('click', show_videoTwo, false)
    btnTwo_a.addEventListener('click', show_videoTwo, false)
    btnTwo_b.addEventListener('click', show_videoTwo, false)

    // Event Listeners for Silent Gun

    btn = document.getElementById('playOne')
    btn_a = document.getElementById('dOne')
    btn_b = document.getElementById('tOne')

    btn.addEventListener('click', displayOne, false)
    btn_a.addEventListener('click', displayOne, false)
    btn_b.addEventListener('click', displayOne, false)

    btn.addEventListener('click', show_videoOne, false)
    btn_a.addEventListener('click', show_videoOne, false)
    btn_b.addEventListener('click', show_videoOne, false)

    // Audio Event Listener
    audioPlay = document.getElementById('audioTrigger');
    audioPlay.addEventListener('click', showAudio, false);

})(); // end wrapper

