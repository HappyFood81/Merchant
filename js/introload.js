
function introLoad(val) {
    let loadNum = Math.ceil(Math.random() * 50);
    introLoading.style = "display:block;visibility:visible;";
    function introLoadLoop() {
        if (loadNum < 100) {
            setTimeout(() => {
                loadNum += Math.ceil(Math.random() * 18);
                progressBar.style.backgroundSize = `${loadNum}% 100%`;
                return introLoadLoop();
            }, 200);
        } else {
            progressBar.style.backgroundPosition = `right`;
            setTimeout(() => {
                progressBar.style.backgroundSize = `0% 100%`;
            }, 250);
            progressBar.style.backgroundColor = "#ffac00";

            setTimeout(() => {
                progressBar.style.transform = "translateY(-5vh)";
                introLogo.style.transform = "translateY(-7vh)";
                introLogoName.style.transform = "translateY(-7vh)";
                setTimeout(() => {
                    progressBar.style.transform = "translateY(30vh)";
                    introLogo.style.transform = "translateY(100vh)";
                    introLogoName.style.transform = "translateY(120vh)";
                }, 300)
                setTimeout(() => {
                    setTimeout(() => {
                        introLoading.style.visibility = "hidden";
                        if (val === "main") {
                            window.location = "main.html";
                        } else if (val === "home") {
                            window.location = "index.html";
                        }
                    })
                }, 1500);
            }, 500);
        }
    } introLoadLoop();
}


