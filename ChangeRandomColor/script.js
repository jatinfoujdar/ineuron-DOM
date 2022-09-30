const btn = document.getElementById("button-62");

const randomColor = () => {
    let val = "0123456789ABCDF";
    let con = "#";

    for (let i = 0; i < 6; i++) {
        con = con + val[Math.floor(Math.random() * 16)];

    }
    return con;
}

function change() {
    document.body.style.backgroundColor = randomColor();
}

btn.addEventListener("click", change);