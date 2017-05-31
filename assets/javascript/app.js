var items = [
        item1 = {
            q:"What was the first full length CGI movie?", 
            a1:"A Bug's Life", 
            a2:"Monsters Inc.", 
            a3:"Toy Story", 
            a4:"The Lion King", 
            key:"Toy Story"
            },
        item2 = {
            q:"Which of these is NOT a name of one of the Spice Girls?", 
            a1:"Sporty Spice", 
            a2:"Fred Spice", 
            a3:"Scary Spice", 
            a4:"Posh Spice", 
            key:"Fred Spice"
            },
        item3 = {
            q:"Which NBA team won the most titles in the 90s?", 
            a1:"New york knicks", 
            a2:"Portland Trailblazers", 
            a3:"Losangeles Lakers", 
            a4:"Chicago Bulls", 
            key:"Chicago Bulls"
            },
        item4 = {
            q:'Which group released the hit song, "Small Like Teen Spirit?', 
            a1:"Nirvana", 
            a2:"Backstreet Boys", 
            a3:"The Offspring", 
            a4:"No Doubt", 
            key:"Nirvana"
            },
        item5 = {
            q:'Which popular Disney movie featured the song ,"Circle of Life"?', 
            a1:"Aladdin", 
            a2:"Hercules", 
            a3:"Mulan", 
            a4:"The Lion King", 
            key:"The Lion King"
            },
        item6 = {
            q:'Finish this line from the Fresh Prince of Bel-Air theme song: "I whistled for a cab and when it came near, the license plate said..."', 
            a1:"Dice", 
            a2:"Mirror", 
            a3:"Fresh", 
            a4:"Cab", 
            key:"Fresh"
            },
        item7 = {
            q:"What was Doug's best friend's name?", 
            a1:"Skeeter", 
            a2:"Mark", 
            a3:"Zach", 
            a4:"Cody", 
            key:"Skeeter"
            },
        item8 = {
            q:"What was the name of the principal at Bayside High in Saved By The Bell?", 
            a1:"Mr.Zhou", 
            a2:"Mr.Driggers", 
            a3:"Mr.Belding", 
            a4:"Mr.Page", 
            key:"Mr.Belding"
            }
        ];

var images = [
        "assets/images/toyStroy.gif",
        "assets/images/spiceGirls.gif",
        "assets/images/chicagoBulls.gif",
        "assets/images/nirvana.gif", 
        "assets/images/lionKing.gif",
        "assets/images/freshPlate.gif",
        "assets/images/skeeter.gif",
        "assets/images/mr.belding.gif"
        ];

var isTimerZero = false, isCorrect = false; 
var iterator = 0, correct = 0, wrong = 0, unAnswered = 0; 
var intervalId;
function reset(){
    isCorrect = false;
    isTimerZero = false;
    time = 15;
    $(".results").hide();
    $(".timer-section").html("00:"+time);
    $(".answer-part").show();
    $(".question-part").show();
    $(".question-section").text(items[iterator].q);
    $(".answers").show();
    $(".first").text(items[iterator].a1);
    $(".second").text(items[iterator].a2);
    $(".third").text(items[iterator].a3);
    $(".fourth").text(items[iterator].a4);
    countDown();
    
}

$(".btn").on("click", function(){
    iterator = 0, correct = 0, wrong = 0, unAnswered = 0;
    $(".btn").hide();
    reset();
    
 });

function filler(){
    $(".correct-answer").hide();
    $(".image-holder").hide();
    iterator++;
    reset();
    
}

function countDown(){
    intervalId = setInterval(timer, 1000);
    function timer(){
        if(time > 1){
            time--;
            if (time >= 10){
                $(".timer-section").html("00:"+time);
                
            }else if (time <10){
                $(".timer-section").html("00:0"+time);
            }
        }else {
                $(".timer-section").html("00:00");
                isTimerZero = true;
                isCorrect = false;
                unAnswered++;
                answerOut(iterator);
        }
    }
}
function result(){
    
    $(".correct-answer").hide();
    $(".image-holder").hide();
    $(".question-part").hide();
    $(".answers").hide();
    $(".answer-part").show();
    $(".results").show();
    $(".result-title").text("Results");
    $(".second-result").text("Correct Answers : "+correct);
    $(".third-result").text("Wrong Answers : "+wrong);
    $(".fourth-result").text("Unanswered  : "+unAnswered);
    $(".result-title").css("color", "coral");
    
}

$(".answers").on("click", function(){
    if (iterator < items.length){
        if($(this).text() === items[iterator].key){
            isCorrect = true;
            correct++;
            answerOut(iterator);
            
        }else{
            isCorrect = false;
            wrong++;
            answerOut(iterator);
        }
    }else{
        $(".btn").text("Restart");
        result();
        $(".btn").show();
        
    }
});

function answerOut(iterator){
    $(".answers").hide();
    $(".correct-answer").show();
    $(".image-holder").show();
    $(".correct-answer").css("color", "coral");
    clearInterval(intervalId);
    displayImage(iterator);
    
    if (isCorrect){
        $(".correct-answer").text("Correct...!");
        
    }else{
        $(".correct-answer").text("Correct answer was : "+items[iterator].key);
        
    }
    if (iterator < items.length-1){
        setTimeout(filler, 2000);  
    }else{
        $(".btn").text("Restart");
        $(".btn").show();
        result();
    }
}

function displayImage(iterator) {
    $(".image-holder").html("<img class='img' src='"+images[iterator]+"'>");
    
}
