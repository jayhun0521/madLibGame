console.log('madlibs.js is connected')

function createParagraph(){
    console.log("create paragraph has been logged")
    var wordOne = document.getElementById("proper_noun_1").value;
    var wordTwo = document.getElementById("proper_noun_2").value;
    var wordThree = document.getElementById("quantity").value;
    var wordFour = document.getElementById("verb1").value;
    var wordFive = document.getElementById("noun1").value;
    var wordSix = document.getElementById("adjective1").value;
    var wordSeven = document.getElementById("verb2").value;
    var wordEight = document.getElementById("verb3").value;
    var wordNine = document.getElementById("verb4").value;
    var wordTen = document.getElementById("noun2").value;
    var wordEleven = document.getElementById("verb5").value;
    var wordTwelve = document.getElementById("noun3").value;
    var wordThirteen = document.getElementById("verb6").value;
    var wordFourteen = document.getElementById("noun4").value;
    var wordFifteen = document.getElementById("adjective2").value;
    var wordSixteen = document.getElementById("name").value;
    
    console.log(wordOne, wordTwo, wordThree, wordFour, wordFive, wordSix, wordSeven, wordEight, wordNine, wordTen, wordEleven, wordTwelve, wordThirteen, wordFourteen, wordFifteen)
    

    var paragraph = " <p>My name is " + wordOne + " and I have known " + wordTwo + " for " + wordThree + " years." + " I " + wordFour + " all the way from " + wordFive + " to celebrate today. I am so " + wordSix + " for the parents. My best advice is don't forget to " + wordSeven + " before you " + wordEight + " and " + wordNine + " after the " + wordTen + ". Daddy you should always " + wordEleven + " mommy's " + wordTwelve + " and Mommy, you should always " + wordThirteen + " Daddy's " + wordFourteen + ". You're going to be the " + wordFifteen + " parents ever! Love, " + wordSixteen + ".</p>"

    console.log(paragraph);

    document.getElementById("completed-story").innerHTML = paragraph;

}


