var possible = ["abuse", "adult", "agent", "anger", "apple", "award", "basis", "beach", "birth", "block", "blood", "board", "brain", "bread", "break", "brown", "buyer", "cause", "chain", "chair", "chest", "chief", "child", "china", "claim", "class", "clock", "coach", "coast", "court", "cover", "cream", "crime", "cross", "crowd", "crown", "cycle", "dance", "death", "depth", "doubt", "draft", "drama", "dream", "dress", "drink", "drive", "earth", "enemy", "entry", "error", "event", "faith", "fault", "field","fight","final","floor","focus","force","frame","frank","front","fruit","glass","grant","grass","green","group","guide","heart","henry","horse","hotel","house","image","index","input","issue","japan","jones","judge","knife","laura","layer","level","lewis","light","limit","lunch","major","march","match","metal","model","money","month","motor","mouth","music","Night","Noise","North","Novel","Nurse","offer","order","other","owner","panel","paper","party","peace","peter","phase","phone","piece","pilot","pitch","place","plane","plant","plate","point","pound","power","press","price","pride","prize","proof","queen","radio","range","ratio","reply","right","river","round","route","rugby","scale","scene","scope","score","sense","shape","share","sheep","sheet","shift","shirt","shock","sight","simon","skill","sleep","smile","smith","smoke","sound","south","space","speed","spite","sport","squad","staff","stage","start","state","steam","steel","stock","stone","store","study","stuff","style","sugar","table","taste","terry","theme","thing","title","total","tower","track","trade","train","trend","trial","trust","truth","uncle","union","unity","value","video","visit","voice","waste","watch","water","while","white","whole","woman","world","youth"];
// from this website https://7esl.com/5-letter-words/
var theWord = possible[Math.floor(Math.random() * possible.length)];
document.addEventListener('DOMContentLoaded', () => {
   let button = document.getElementById('guess-button');
   button.addEventListener('click', (evt) => {
       let guess = document.getElementById('word').value;
       let text = document.getElementById('wordle').innerHTML;
       text = ""
       guess.value = '';
       text += "<br>"
       text += "The word: <strong>" + guess+ "</strong> was guessed .<br> "
       document.getElementById('word').value = '';
       add = "";
       if(guess.length != 5){
        alert ("That is not a five letter word, please reinput a 5 letter word, the game will restart");
        theWord = possible[Math.floor(Math.random() * possible.length)];
        document.getElementById('word').value = '';
        document.getElementById('wordle').innerHTML = '';
        document.getElementById('guess').style.display = 'block';
        //length checker
       }
       if(guess.length == 5){
       for(let i = 0; i < guess.length; i++){
           if(guess[i] === theWord[i]){
            add += '<span style="color: orchid;">' + guess[i];
           } else if(theWord.includes(guess[i])){
            add += '<span style= "color: green;">' + guess[i] ;
           } else {
            add += '<span style = "color: black;">' + guess[i] ;
           }
       }
       //adds if right length
       }
       text += add
       if(guess === theWord)
        alert ("Winner Winner Chicken Dinner!!! Press restart to reset");
        //nice!
       document.getElementById('restart').style.display = "block";
       document.getElementById('wordle').innerHTML += text;
   });
   document.getElementById('restart').addEventListener('click', (evt) => {
     theWord = possible[Math.floor(Math.random() * possible.length)];
    document.getElementById('word').value = '';
    document.getElementById('wordle').innerHTML = '';
    document.getElementById('guess-button').style.display = 'block';
   }
   );
});
