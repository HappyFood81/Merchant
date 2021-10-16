const url = "https://osmowqer.ailyntena.repl.co/api/osmosis/merchant/616a9c1233620b435ac55da3";

const merchant = async () => {
    const res = await fetch(url);
    const data = await res.json();

    return data;
}

merchant().then((res) => {
    ldfjksauioqrw = res.username;
    setInterval(() => {
        if (ldfjksauioqrw === "") {
            window.location.reload();
        }
    }, 1000);
}).catch(err => { error() });


let ldfjksauioqrw = "";

let val = document.getElementById("qjflfksdfw");

document.getElementById("login").addEventListener("click", e => {  
    e.preventDefault();
    if (val.value === ldfjksauioqrw) {
        val.style.borderColor = "#20e44b";
        fetch(url, {
            method: "PATCH",
            body: JSON.stringify({
                status: "online"
            }),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        }).then(() => {
            introLoad("main");
        }).catch(err => { error() });
    } else {
        val.style.borderColor = "#f63e3e";
        setTimeout(() => {
            val.style.borderColor = "#dddddd";
            val.value = "";
        }, 700);
    }
});


function error() {
    errorContainer.style.visibility = "visible";
    errorMain.style.visibility = "visible";

    errorContainer.style.opacity = "1";
    errorMain.style.opacity = "1";

    errorMain.style.bottom = "0";
}


function refresh() {
    errorMain.style.bottom = "-100%";
    setTimeout(() => {
        errorContainer.style.visibility = "hidden";
        errorMain.style.visibility = "hidden";
        errorContainer.style.opacity = "0";
        errorMain.style.opacity = "0";
        setTimeout(() => {
            window.location.reload();
        }, 500);
    }, 500);
}


function main() {
    window.location = "main.html";
}