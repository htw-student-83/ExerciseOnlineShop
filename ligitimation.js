$(document).ready(function(){
    toShowTheExcersice();
});

function toShowTheExcersice() {
    let zahl1 = Math.round(20*(Math.random(2)));
    let zahl2 = Math.round(20*(Math.random(2)));
    let result = zahl1 + zahl2;
 
    if(zahl1!=0 && zahl2!=0){
        var aufforderung = prompt("Lösen Sie bitte folgende Aufgabe: " + zahl1 + " + " + zahl2, "");
        if(aufforderung!=result){
            alert("Dankeschön für deine Eingabe. Leider ist diese nicht richtig-(. Versuche es erneut!"); 
            toShowTheExcersice();
        }else{
            alert("Dankeschön. Deine Antwort ist richtig. Du kannst nun fortfahren.");
        }
    }
}