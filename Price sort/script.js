const courses = [
    {
        name:"react course",
        price:"6.3"
    },
    {
        name:" css course",
        price:"2.3"
    },
    {
        name:"html course",
        price:"3.3"
    },
    {
        name:"java course",
        price:"2.4"
    },
];

function generatelist(){
 const ul = document.querySelector(".list-group");
 ul.innerHTML = "";
     courses.forEach((course)  => {

       const li = document.createElement("li")
       li.classList.add("list-group-item")

       const name = document.createTextNode(course.name)
       li.appendChild(name)

       const span = document.createElement("span")

       span.classList.add("float-right")

       const price = document.createTextNode("$" + course.price)

       span.appendChild(price)

       li.appendChild(span)
       ul.appendChild(li)
     })
}
generatelist();



const button = document.querySelector(".sort-btn")

button.addEventListener("click", () => {

    courses.sort( (a,b) => a.price - b.price)
    generatelist();
})