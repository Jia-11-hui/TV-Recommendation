// Declare your genre arrays here
let comedy=["https://m.media-amazon.com/images/M/MV5BYjA1NWQyNzYtZTlmNy00YjYzLWJlNDUtMjA5ZWY2YTM2M2ZlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg","https://m.media-amazon.com/images/M/MV5BOTNjOGVkYTctYjE1ZS00MTBhLTlkOTAtMGUzODZlNjAxMGM3XkEyXkFqcGdeQXVyNDk3MzMwMTI@._V1_QL75_UX190_CR0,0,190,281_.jpg","https://m.media-amazon.com/images/M/MV5BYzhjMDIwOTgtYmMwNC00ZDIyLWJiMzUtMDM0YTY3M2VmOWNiXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg"];
console.log(comedy);
let bestComedy=comedy[0];
console.log(bestComedy);
let action=["https://m.media-amazon.com/images/M/MV5BNjRiYTIzZmUtMTFkNS00ZTM0LWE4ODAtMDliMGE4NzM5ZjVlXkEyXkFqcGdeQXVyNDQ0MTYzMDA@._V1_.jpg","https://m.media-amazon.com/images/M/MV5BOGM4MTZlZDQtZDdjNC00NGEwLTlhYjktNTY0NDlhYzg3ZmRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg","https://play-lh.googleusercontent.com/Ql-PzYuVe9l53RFLuCtf5DyyQy91pxwp1Qk9TmDSxyvTrXF_EVKXF_U8UNcdKObk6APdQQ"];
let anime=["https://m.media-amazon.com/images/M/MV5BMDI3ZDY4MDgtN2U2OS00Y2YzLWJmZmYtZWMzOTM3YWFjYmUyXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg","https://img01.sogoucdn.com/v2/thumb/resize/w/258/h/360/t/0/retype/ext/auto/q/75?appid=200839&url=http%3A%2F%2Fimg04.sogoucdn.com%2Fapp%2Fa%2F07%2F8525fc5caf6eda127a55c38ee554fc0c","https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/98ea4207e23a2ea3e3af39ad641d8800.jpe"];
// Make sure to declare your HTML elements as variables! 
let result = document.querySelector(".result");
// Submit Button 
let submitButton = document.querySelector(".submit"); 
// Suggest Button 
let suggestButton= document.querySelector(".suggest");

let input2 = document.querySelector(".input2").value;

submitButton.onclick = function() {
let input1 = document.querySelector(".input1").value;
    if(input1 === "comedy"){
    for(let comedyimage of comedy){
        let img="<img src='" + comedyimage + "'>";
    result.insertAdjacentHTML("beforeend",img);}
 
    }
    else if(input1==="action"){
for(let actionimage of action){
let img="<img src='" + actionimage + "'>";
    result.insertAdjacentHTML("beforeend",img);}

        
    }
    else if (input1==="anime"){
    for(let animeimage of anime){
    let img="<img src='" + animeimage + "'>";
 result.insertAdjacentHTML("beforeend",img);}
    }
};

suggestButton.onclick=function(){
let imageinput=document.querySelector(".input2").value;
    comedy.push(imageinput);
    action.push(imageinput);
    anime.push(imageinput);
    let image="<img src='" + imageinput + "'>";
       result.insertAdjacentHTML("beforebegin","<p>"+"Thank you for suggestion"+"</p>");
};

