let count = 0;

let value = document.getElementById("value");

let btns = document.querySelectorAll(".btn");

btns.forEach(function(item){
    item.addEventListener("click", function(val){
      
        let style = val.currentTarget.classList;

        if(style.contains("increse")){
            count++;
        } 
        else if(style.contains("decrease")){
            count--;
        }
        else if(style.contains("reset")){
            count = 0;
        }
        if(count > 0){
            value.style.color = "green"
        }else{
            value.style.color = "red"
        }
        value.textContent = count;
    })
})



// let inc = document.getElementById("increse");
// let dec = document.getElementById("decrease");
// let reset = document.getElementById("reset");