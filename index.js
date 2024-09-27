window.addEventListener("DOMContentLoaded",()=>{
    alert("Welcome to Word Counter System")
})



let textbox = document.getElementById("textbox");

textbox.addEventListener("input", () => {
    var text = textbox.value;  
    let char = text.length;

   
    document.getElementById("char").innerHTML = char;

  
    text = text.trim();
    let words = text.split(/\s+/);

    
    let cleanList = words.filter(function(el) {
        return el.length > 0;
    });

   
    document.getElementById("word").innerHTML = cleanList.length;

    console.log(cleanList);
    console.log(text);      
});
