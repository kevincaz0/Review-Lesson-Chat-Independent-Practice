var yourName = "Kevin";
var friendsName ="Jackie";
var counter=1;
$(".sent").show();
$(".received").css("background-color","gold");
$(".send2").click(function(){
    var now=$(".your-input").val();
    $(".sent").append("<p>"+now+"</p>");
  
});
$(".send1").click(function(){
    var now=$(".friend-input").val();
    $(".received").append("<p>"+now+"</p>");
    counter+=1;
    $("h4").text("Number of messages received: " + counter);
});














//DON'T CHANGE THIS CODE

var realYourName, realFriendName;

try {
    realYourName = eval('yourName');
    realFriendName = eval('friendsName');
} catch (_e) {}

updateNames();

function updateNames(){
    $(".your-name").text(realYourName);
    $(".friends-name").text(realFriendName);
}