const screenWidth = screen.width;
const screenHeight = screen.height;

function logo() {
    window.location.reload();
}

const merchantURL = "https://osmowqer.ailyntena.repl.co/api/osmosis/merchant";

let container = document.getElementById("home");

let navUser = document.getElementById("navUser");
let navTheme = document.getElementById("navTheme");


const navList = document.getElementById("navList");
const navFood = document.getElementById("navFood");
const navRider = document.getElementById("navRider");

function icons() {
    if (screenWidth > 599 && screenHeight > 700) {
        navUser.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' height='36px' viewBox='0 0 24 24' width='36px' fill='#aaaaaa'><path d='M0 0h24v24H0z' fill='none'/><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'/></svg>";
        navTheme.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' id='navThemeSvg' height='36px' viewBox='0 0 24 24' width='36px' fill='#aaaaaa'><path d='M0 0h24v24H0z' fill='none'/><path d='M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18V6c3.31 0 6 2.69 6 6s-2.69 6-6 6z'/></svg>";
        navList.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' id='listOrders' class='nav-svg' enable-background='new 0 0 20 20' height='36px' viewBox='0 0 20 20' width='36px' fill='#383838'><rect fill='none' height='20' width='20'/><path d='M4.5,5h11C16.33,5,17,5.6,17,6.34v1.57c0,0.74-0.67,1.34-1.5,1.34h-11C3.67,9.25,3,8.65,3,7.91V6.34C3,5.6,3.67,5,4.5,5z M4.5,15h11c0.83,0,1.5-0.6,1.5-1.34v-1.57c0-0.74-0.67-1.34-1.5-1.34h-11c-0.83,0-1.5,0.6-1.5,1.34v1.57C3,14.4,3.67,15,4.5,15z'/></svg>"
        navFood.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' id='prepareOrders' class='nav-svg' enable-background='new 0 0 20 20' height='36px' viewBox='0 0 20 20' width='36px' fill='#383838'><g><rect fill='none' height='20' width='20'/></g><g><g><path d='M5,12.78C4.64,13.11,4.35,13.53,4.18,14H16c0-2.21-1.79-4-4-4c-1.62,0-3,0.96-3.63,2.34C7.96,12.13,7.5,12,7,12 c-0.17,0-0.34,0.02-0.5,0.04V7H8c0.65,0,1.2-0.42,1.41-1H16V5H9.41C9.2,4.42,8.65,4,8,4H4v0.5h1v0.75H4v0.5h1V6.5H4V7h1V12.78z M6,12.18c-0.18,0.06-0.34,0.14-0.5,0.24V7H6V12.18z M8,6.5H6.5V5.75H8V6.5z M8,4.5v0.75H6.5V4.5H8z M5.5,4.5H6v0.75H5.5V4.5z M5.5,5.75H6V6.5H5.5V5.75z'/><polygon points='3,15 4,16 16,16 17,15'/></g></g></svg>"
        navRider.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' id='riderOrders' class='nav-svg' enable-background='new 0 0 20 20' height='36px' viewBox='0 0 20 20' width='36px' fill='#383838'><g><rect fill='none' height='20' width='20'/></g><g><g><path d='M15,7.5C15,6.67,14.33,6,13.5,6H12v1h1.5C13.78,7,14,7.22,14,7.5v1.29L10.79,12H9V8H6c-1.66,0-3,1.34-3,3v2h2 c0,1.1,0.9,2,2,2s2-0.9,2-2h2.21L15,9.21V7.5z M7,14c-0.55,0-1-0.45-1-1h2C8,13.55,7.55,14,7,14z'/><rect height='1' width='4' x='5' y='6'/><path d='M15,11c-1.1,0-2,0.9-2,2c0,1.1,0.9,2,2,2s2-0.9,2-2C17,11.9,16.1,11,15,11z M15,14c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1 s1,0.45,1,1C16,13.55,15.55,14,15,14z'/></g></g></svg>"
    } else if (screenWidth < 599 && screenHeight < 830 ) {
        navUser.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='#aaaaaa'><path d='M0 0h24v24H0z' fill='none'/><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'/></svg>";
        navTheme.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' id='navThemeSvg' height='24px' viewBox='0 0 24 24' width='24px' fill='#aaaaaa'><path d='M0 0h24v24H0z' fill='none'/><path d='M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18V6c3.31 0 6 2.69 6 6s-2.69 6-6 6z'/></svg>";
        navList.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' id='listOrders' class='nav-svg' enable-background='new 0 0 24 24' height='24px' viewBox='0 0 24 24' width='24px' fill='#383838'><rect fill='none' height='24' width='24'/><path d='M3,17v-2c0-1.1,0.9-2,2-2h14c1.1,0,2,0.9,2,2v2c0,1.1-0.9,2-2,2H5C3.9,19,3,18.1,3,17z M3,7v2c0,1.1,0.9,2,2,2h14 c1.1,0,2-0.9,2-2V7c0-1.1-0.9-2-2-2H5C3.9,5,3,5.9,3,7z'/></svg>"
        navFood.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' id='prepareOrders' class='nav-svg' enable-background='new 0 0 24 24' height='24px' viewBox='0 0 24 24' width='24px' fill='#383838'><g><rect fill='none' height='24' width='24'/></g><g><path d='M2,19h20l-2,2H4L2,19z M5,6h1v1H5V6z M5,4h1v1H5V4z M9,4v1H7V4H9z M9,7H7V6h2V7z M6,15.23c-0.36,0.11-0.69,0.28-1,0.47V8h1 V15.23z M4,16.52C3.62,16.96,3.32,17.45,3.16,18h16.82c0.01-0.16,0.03-0.33,0.03-0.5c0-3.04-2.46-5.5-5.5-5.5 c-2.29,0-4.25,1.4-5.08,3.4C8.84,15.15,8.19,15,7.5,15c-0.17,0-0.33,0.02-0.5,0.04V8h2c1.03,0.06,1.9-0.96,2-2h10V5H11 c-0.1-1.05-0.97-1.97-2-2H3v1h1v1H3v1h1v1H3v1h1V16.52z'/></g></svg>"
        navRider.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' id='riderOrders' class='nav-svg' enable-background='new 0 0 24 24' height='24px' viewBox='0 0 24 24' width='24px' fill='#383838'><g><rect fill='none' height='24' width='24'/></g><g><g><path d='M19,7c0-1.1-0.9-2-2-2h-3v2h3v2.65L13.52,14H10V9H6c-2.21,0-4,1.79-4,4v3h2c0,1.66,1.34,3,3,3s3-1.34,3-3h4.48L19,10.35V7 z M7,17c-0.55,0-1-0.45-1-1h2C8,16.55,7.55,17,7,17z'/><rect height='2' width='5' x='5' y='6'/><path d='M19,13c-1.66,0-3,1.34-3,3s1.34,3,3,3s3-1.34,3-3S20.66,13,19,13z M19,17c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1 S19.55,17,19,17z'/></g></g></svg>"
    }
} icons();





let firstPage = true;
let secondPage = false;
let thirdPage = false;

let listOrders = document.getElementById("listOrders");
let prepareOrders = document.getElementById("prepareOrders");
let riderOrders = document.getElementById("riderOrders");

let mainSecondArr = ["one", "two", "three"];
let navThemeSvg = document.getElementById("navThemeSvg");

const header = document.querySelector("header");
headerHeight = window.getComputedStyle(header, null).getPropertyValue("height");


let darkMode = false;

function user(val) {
    if (val) {
        userBox.style.top = `${headerHeight}`;
    } else userBox.style.top = "-100%";
}

let navBoolean;

if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "false");
    navBoolean = false;
} else {
    navBoolean = localStorage.getItem("theme") === "false" ? false : true;
    navThemeFunc();
}

function navThemeFunc() {
    if (!navBoolean) {
        darkMode = true;
        navChecker();
        navThemeSvg.style.transform = "rotate(180deg)";
        document.querySelector(".main-header").className += " white-color";
        document.querySelectorAll(".main-sub").forEach(e => e.className += " white-color");
        document.querySelector(".main-first").className += " white-bg white-shadow";
        document.querySelectorAll(".nav-svg").forEach(e => e.className += " white-grey-svg");
        document.querySelectorAll(".main-second1").forEach(e => e.className += " white-shadow");
        document.querySelector(".nav").className += " white-bg";
        document.querySelector(".container").className += " black-bg";
        document.querySelector("header").className += " black-grey-border black-bg";
        document.querySelectorAll(".section-header").forEach(e => e.className += " white-color");
        document.querySelectorAll(".section-box").forEach(e => e.className += " white-shadow");
        document.querySelector(".user-box").className += " white-bg";
        document.querySelectorAll(".user-box-section").forEach(e => e.className = "user-box-section border-top-green");
        localStorage.setItem("theme", "true");
        navBoolean = true;
    } else {
        darkMode = false;
        navChecker();
        navThemeSvg.style.transform = "rotate(0)";
        document.querySelector(".main-header").className = "main-header";
        document.querySelectorAll(".main-sub").forEach(e => e.className = "main-sub");
        document.querySelector(".main-first").className = "main-first";
        document.querySelectorAll(".nav-svg").forEach(e => e.className = "nav-svg");
        for (i = 0; i < mainSecondArr.length; i++) {
            document.querySelector(`.main-second1:nth-child(${i + 1})`).className = `main-second1 main-${mainSecondArr[i]}`;
        }
        document.querySelector(".nav").className = "nav";
        document.querySelector(".container").className = "container";
        document.querySelector("header").className = "header";
        document.querySelectorAll(".section-header").forEach(e => e.className = "section-header");
        document.querySelectorAll(".new").forEach(e => e.className = "section-box new");
        document.querySelectorAll(".preparing").forEach(e => e.className = "section-box preparing");
        document.querySelectorAll(".finished").forEach(e => e.className = "section-box finished");
        document.querySelector(".user-box").className = "user-box black-bg";
        document.querySelectorAll(".user-box-section").forEach(e => e.className = "user-box-section border-top-black");
        localStorage.setItem("theme", "false");
        navBoolean = false;
    }
} navThemeFunc();







let section1 = document.querySelector(".section-slide1");
let section2 = document.querySelector(".section-slide2");
let section3 = document.querySelector(".section-slide3");


function nav(val) {
    setTimeout(() => {
        window.location = "#home";
    }, 250);

    if (val === "navList") {
        firstPage = true;
        secondPage = false;
        thirdPage = false;

        section1.style.left = "0";
        section2.style.left = "100%";
        section3.style.left = "200%";

        navChecker();
    } else if (val === "navFood") {
        firstPage = false;
        secondPage = true;
        thirdPage = false;

        section1.style.left = "-100%";
        section2.style.left = "0";
        section3.style.left = "100%";

        navChecker();
    } else if (val === "navRider") {
        firstPage = false;
        secondPage = false;
        thirdPage = true;
        
        section1.style.left = "-200%";
        section2.style.left = "-100%";
        section3.style.left = "0";
        
        navChecker();
    }
} 
function navChecker() {
    if (firstPage === true && darkMode === false) {
        listOrders.style.fill = "#cacaca";
        prepareOrders.style.fill = "#383838";
        riderOrders.style.fill = "#383838";
    } else if (firstPage === true && darkMode === true) {
        listOrders.style.fill = "#cacaca";
        prepareOrders.style.fill = "#00492d";
        riderOrders.style.fill = "#00492d";
    } else if (secondPage === true && darkMode === false) {
        listOrders.style.fill = "#383838";
        prepareOrders.style.fill = "#cacaca";
        riderOrders.style.fill = "#383838";
    } else if (secondPage === true && darkMode === true) {
        listOrders.style.fill = "#00492d";
        prepareOrders.style.fill = "#cacaca";
        riderOrders.style.fill = "#00492d";
    } else if (thirdPage === true && darkMode === false) {
        listOrders.style.fill = "#383838";
        prepareOrders.style.fill = "#383838";
        riderOrders.style.fill = "#cacaca";
    }  else if (thirdPage === true && darkMode === true) {
        listOrders.style.fill = "#00492d";
        prepareOrders.style.fill = "#00492d";
        riderOrders.style.fill = "#cacaca";
    } 
}







let NEW = document.getElementById("NEW");
let PREPARING = document.getElementById("PREPARING");
let FINISHED = document.getElementById("FINISHED");

NEW.onclick = () => window.location = "#newOrders";
PREPARING.onclick = () => nav("navFood");
FINISHED.onclick = () => nav("navRider");





let threshold = screenWidth / 2 - 50;
let dist;
let swipeStart;
let swipeEnd;


container.addEventListener("touchstart", e => {
    let touch = e.changedTouches[0];
    swipeStart = touch.pageX;
});


container.addEventListener("touchend", e => {
    let touch = e.changedTouches[0];
    swipeEnd = touch.pageX;
    dist = Math.abs(Number(swipeStart) - Number(swipeEnd));
    swipe();
});

function swipe() {
    let midScreen = screenWidth / 2 ;
    let swipeLocation = ( Number(swipeStart)) > midScreen ? "right" : "left";

    if (firstPage === true) {
        if (swipeLocation === "right" && dist > threshold && swipeEnd < midScreen) {
            return nav("navFood");
        }
    } else if (secondPage === true) {
        if (swipeLocation === "right" && dist > threshold && swipeEnd < midScreen) {
            return nav("navRider");
        } else if (swipeLocation === "left" && dist > threshold && swipeEnd > midScreen) {
            return nav("navList");
        }
    } else if (thirdPage === true) {
        if (swipeLocation === "left" && dist > threshold && swipeEnd > midScreen) {
            return nav("navFood");
        }
    }
}



const customerURL = "https://osmowqer.ailyntena.repl.co/api/osmosis/customer";
const merchantRawURL = "https://osmowqer.ailyntena.repl.co/api/osmosis/merchant/raw";




let errorContainer = document.getElementById("errorContainer");
let errorMain = document.getElementById("errorMain");


async function dataCustomer() {
    const res = await fetch(customerURL);
    const data = await res.json();

    return data;
}



const newOrders = document.getElementById("newOrders");
const prepOrders = document.getElementById("preparing");
const finsOrders = document.getElementById("finished");

const wrapper1 = document.getElementById("sectionWrapper1");
const wrapper2 = document.getElementById("sectionWrapper2");
const wrapper3 = document.getElementById("sectionWrapper3");

let allNewOrder = [];
let allPrepOrder = [];
let allFinsOrder = [];


let newOrderLength = 0;
let prepOrderLength = 0;
let finsOrderLength = 0;

async function dataMerchant() {
    const res = await fetch(merchantURL);
    const data = await res.json();

    return data;
}

dataCustomer().then(d => {
    let profit = document.getElementById("profit");

    dataMerchant().then(d => {
        const merchant = d[0];
        const merchantProfit = merchant.profit;
        profit.innerHTML = `₱${merchantProfit}`;
    });
    
    if (d.length > 0) {
        newOrderGen(d);
    } else {
        return dataCustomer();
    }
}).then(() => {
    if (darkMode) {
        for (i = 0; i < allNewOrder.length; i++) {
    
            let foodNumber = allNewOrder[i].foodNumber;
            wrapper1.innerHTML += `
            <section id="section${i}">
            <div class="section-box new white-shadow">
                <div class="section-box-stc">#${foodNumber} Order</div>
                <div class="section-box-btn" onclick="seeNewOrder(${i})">See Order</div>
            </div>
            </section>
            `
        }


        for (i = 0; i < allPrepOrder.length; i++) {

            let foodNumber = allPrepOrder[i].foodNumber;
            wrapper2.innerHTML += `
            <section id="section${i}">
            <div class="section-box preparing white-shadow">
                <div class="section-box-stc">#${foodNumber} Order</div>
                <div class="section-box-btn" onclick="seePrepOrder(${i})">See Order</div>
            </div>
            </section>
            `
        }
    } else if (!darkMode) {
        for (i = 0; i < allNewOrder.length; i++) {
            
            let foodNumber = allNewOrder[i].foodNumber;
            wrapper1.innerHTML += `
            <section id="section${i}">
                <div class="section-box new">
                    <div class="section-box-stc">#${foodNumber} Order</div>
                    <div class="section-box-btn" onclick="seeNewOrder(${i})">See Order</div>
                </div>
            </section>
            `;
        }

        for (i = 0; i < allPrepOrder.length; i++) {
            
            let foodNumber = allPrepOrder[i].foodNumber;
            wrapper2.innerHTML += `
            <section id="section${i}">
                <div class="section-box preparing">
                    <div class="section-box-stc">#${foodNumber} Order</div>
                    <div class="section-box-btn" onclick="seePrepOrder(${i})">See Order</div>
                </div>
            </section>
            `;
        }
    }
}).catch(err => {
    return error();
});




let foodNumGrp = [];

function newOrderGen(val) {
    const d = val;

    wrapper1.innerHTML = "";
    wrapper2.innerHTML = "";
    wrapper3.innerHTML = "";
    
    d.forEach(d => {
        const id = d._id;
        const order = d.orders;
        
        const name = d.name;
        const phone = d.phone;
        const address = d.house;
        const resto = d.resto;
        const subTotal = d.subTotal;
        const email = d.email;
        const time = d.time.substr(0, 8);
        const delFee = d.delFee;

        const newOrder = d.newOrder;
        const preparing = d.preparing;
        const finished = d.finished;

        

        if (newOrder === "true" && preparing === "false" && finished === "false") {
            newOrderLength += 1;

            const t = new Date();
            const hour = t.getHours();
            const minutes = t.getMinutes();
            let foodNumber = Number(hour) + Number(minutes);
    
            function foodNumGen() {
                if (foodNumGrp.length === 0) {
                    foodNumGrp.push(foodNumber);
                } else if (foodNumGrp.length > 0) {
                    foodNumGrp.map(num => {
                        if (foodNumber === num) {
                            foodNumber = Number(foodNumber) + 1;
                            return foodNumGen();
                        } else {
                            foodNumGrp.push(foodNumber);
                        }
                    });
                }
            } foodNumGen();

            let newInfo = {
                name: name,
                phone: phone,
                address: address,
                resto: resto,
                delFee: delFee,
                email: email,
                time: time,
                total: subTotal,
                id: id,
                newOrder: newOrder,
                preparing: preparing,
                finished: finished,
                orders: [],
                foodNumber: foodNumber,
            }


            for (i = 0; i < order.length; i++) {
                let brackets = {};

                let foodName = order[i][0];
                let numOfOrder = order[i][1];
                let foodAddOns = order[i][3];
                let foodFlavor = order[i][4];
                let foodTotalPrice = order[i][5];


                brackets.name = foodName;
                brackets.num = numOfOrder;
                brackets.add = foodAddOns;
                brackets.flavor = foodFlavor;
                brackets.total = foodTotalPrice;

                newInfo.orders.push(brackets);
            }
            
            allNewOrder.push(newInfo);

        } else if (preparing === "true" && newOrder === "false" && finished === "false") {
            prepOrderLength += 1;

            let newInfo = {
                name: name,
                phone: phone,
                address: address,
                resto: resto,
                delFee: delFee,
                email: email,
                time: time,
                total: subTotal,
                id: id,
                newOrder: newOrder,
                preparing: preparing,
                finished: finished,
                orders: d.orders,
                foodNumber: d.foodNumber,
            }

            let foodNumber = Number(newInfo.foodNumber);

            foodNumGrp.push(foodNumber);

            allPrepOrder.push(newInfo);
        } else if (newOrder === "false" && preparing === "false" && finished === "true") {
            finsOrderLength += 1;
        }
    });
}



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



let orderShowcase = document.querySelector(".order-showcase");
let orderContainer = document.querySelector(".order-container");
let orderMain = document.getElementById("orderMain");
let orderTime = document.getElementById("orderTime");
let orderFoodNum = document.getElementById("orderFoodNum");





function seeNewOrder(i) {
    orderShowcase.style.visibility = "visible";
    orderContainer.style.visibility = "visible";

    setTimeout(() => {
        orderShowcase.style.opacity = "1";
        orderContainer.style.opacity = "1";
    }, 20);

    const orderInfo = allNewOrder[i];
    orderTime.innerHTML = `${orderInfo.time}`;
    orderFoodNum.innerHTML = `#${orderInfo.foodNumber}`;

    orderMain.innerHTML = "";

    const a = i;
    
    for (i = 0; i < orderInfo.orders.length; i++) {
        const orders = orderInfo.orders[i];
        const b = i;
        
        if (orders.add.length > 3 && orders.flavor.length > 3) {
            orderMain.innerHTML += `
            <div class="order-box" id="${a}${b}">
                <div class="order-box-des1">
                    <div class="order-name">${orders.name}</div>
                    <div class="order-number">${orders.num}×</div>
                    <div class="order-price">₱${orders.total}</div>
                </div>

                <div class="order-box-flavor">Flavor: ${orders.flavor}</div>

                <div class="order-box-des2">
                    <div class="order-addons">${orders.add}</div>
                    <div class="order-box-des2-btn"><button onclick="newOrderRemove(${a}, ${b})">Remove</button></div>
                </div>
            </div>
            `;
        } else if (orders.add === "---" && orders.flavor === "---") {
            orderMain.innerHTML += `
            <div class="order-box" id="${a}${b}">
                <div class="order-box-des1">
                    <div class="order-name">${orders.name}</div>
                    <div class="order-number">${orders.num}×</div>
                    <div class="order-price">₱${orders.total}</div>
                </div>

                <div class="order-box-des2">
                    <div class="order-addons"></div>
                    <div class="order-box-des2-btn"><button onclick="newOrderRemove(${a}, ${b})">Remove</button></div>
                </div>
            </div>
            `;
        } else if (orders.add.length > 3 && orders.flavor === "---") {
            orderMain.innerHTML += `
            <div class="order-box" id="${a}${b}">
                <div class="order-box-des1">
                    <div class="order-name">${orders.name}</div>
                    <div class="order-number">${orders.num}×</div>
                    <div class="order-price">₱${orders.total}</div>
                </div>

                <div class="order-box-des2">
                    <div class="order-addons">${orders.add}</div>
                    <div class="order-box-des2-btn"><button onclick="newOrderRemove(${a}, ${b})">Remove</button></div>
                </div>
            </div>
            `;
        } else if (orders.add === "---" && orders.flavor.length > 3) {
            orderMain.innerHTML += `
            <div class="order-box" id="${a}${b}">
                <div class="order-box-des1">
                    <div class="order-name">${orders.name}</div>
                    <div class="order-number">${orders.num}×</div>
                    <div class="order-price">₱${orders.total}</div>
                </div>

                <div class="order-box-flavor">Flavor: ${orders.flavor}</div>

                <div class="order-box-des2">
                    <div class="order-box-des2-btn"><button onclick="newOrderRemove(${a}, ${b})">Remove</button></div>
                </div>
            </div>
            `;
        }
    }
    orderMain.innerHTML += `
        <div class="order-box" style="opacity:0;"></div>
    `;

    document.getElementById("orderBtn").innerHTML = `<button onclick="newToPreparing(${a})">We'll Prepare</button>`
}






function seePrepOrder(i) {
    orderShowcase.style.visibility = "visible";
    orderContainer.style.visibility = "visible";

    setTimeout(() => {
        orderShowcase.style.opacity = "1";
        orderContainer.style.opacity = "1";
    }, 20);

    const orderInfo = allPrepOrder[i];
    orderTime.innerHTML = `${orderInfo.time}`;
    orderFoodNum.innerHTML = `#${orderInfo.foodNumber}`;

    orderMain.innerHTML = "";

    const a = i;
    
    for (i = 0; i < orderInfo.orders.length; i++) {
        const orders = orderInfo.orders[i];
        const b = i;
        
        if (orders.add.length > 3 && orders.flavor.length > 3) {
            orderMain.innerHTML += `
            <div class="order-box" id="${a}${b}">
                <div class="order-box-des1">
                    <div class="order-name">${orders.name}</div>
                    <div class="order-number">${orders.num}×</div>
                    <div class="order-price">₱${orders.total}</div>
                </div>

                <div class="order-box-flavor">Flavor: ${orders.flavor}</div>

                <div class="order-box-des2">
                    <div class="order-addons">${orders.add}</div>
                </div>
            </div>
            `;
        } else if (orders.add === "---" && orders.flavor === "---") {
            orderMain.innerHTML += `
            <div class="order-box" id="${a}${b}">
                <div class="order-box-des1">
                    <div class="order-name">${orders.name}</div>
                    <div class="order-number">${orders.num}×</div>
                    <div class="order-price">₱${orders.total}</div>
                </div>

                <div class="order-box-des2">
                    <div class="order-addons"></div>
                </div>
            </div>
            `;
        } else if (orders.add.length > 3 && orders.flavor === "---") {
            orderMain.innerHTML += `
            <div class="order-box" id="${a}${b}">
                <div class="order-box-des1">
                    <div class="order-name">${orders.name}</div>
                    <div class="order-number">${orders.num}×</div>
                    <div class="order-price">₱${orders.total}</div>
                </div>

                <div class="order-box-des2">
                    <div class="order-addons">${orders.add}</div>
                </div>
            </div>
            `;
        } else if (orders.add === "---" && orders.flavor.length > 3) {
            orderMain.innerHTML += `
            <div class="order-box" id="${a}${b}">
                <div class="order-box-des1">
                    <div class="order-name">${orders.name}</div>
                    <div class="order-number">${orders.num}×</div>
                    <div class="order-price">₱${orders.total}</div>
                </div>

                <div class="order-box-flavor">Flavor: ${orders.flavor}</div>
            </div>
            `;
        }
    }
    orderMain.innerHTML += `
        <div class="order-box" style="opacity:0;"></div>
    `;

    document.getElementById("orderBtn").innerHTML = `
        <button onclick="newToPreparing(${a})" style="margin-right:calc(0.8em + 2vw);background:#1e1e1e;">Your Rider</button> 
        <button onclick="newToPreparing(${a})">HappyFood Rider</button> 
    `
}








function seeNewOrderCls() {
    setTimeout(() => {
        orderMain.innerHTML = "";
    }, 300);
    orderShowcase.style = "visibility:hidden;opacity:0;";
    orderContainer.style = "visibility:hidden;opacity:0;";
}



function newOrderRemove(a, b) {
    setTimeout(() => {
        seeNewOrder(a);
    }, 300);

    const orderInfo = allNewOrder[a];
    let orders = orderInfo.orders;
    
    orders.splice(b, 1);

    orderInfo.total = 0;

    orderInfo.orders = orders;
    orderInfo.orders.forEach(o =>{
        orderInfo.total += Number(o.total);
    });

    const orderBox = document.getElementById(`${a}${b}`);
    const sectionBox = document.getElementById(`section${a}`);

    if (!orders.length) {
        orderBox.style = "transform:translateX(100%);opacity:0;";
        setTimeout(() => {
            orderBox.remove();
                setTimeout(() => {
                    seeNewOrderCls();
                    setTimeout(() => {
                        sectionBox.style = "transform:translateX(100%);opacity:0;";
                        setTimeout(() => {
                            sectionBox.remove();
                            newOrderLength--;
                        }, 300);
                    }, 300);
                }, 100);
        }, 300);

        fetch(`${customerURL}/${orderInfo.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type" : "application/json; charset=UTF-8"
            }
        }).then(res => {
            if (!res.ok) {
                return error();
            }
        }).catch(() => {
            return error() 
        });
    } else {
        orderBox.style = "transform:translateX(100%);opacity:0;";
        setTimeout(() => {
            orderBox.remove();
        }, 500);
    }
}


function newToPreparing(a) {
    let orderInfo = allNewOrder[a];
    
    fetch(`${customerURL}/${orderInfo.id}`, {
        method: "PATCH",
        body: JSON.stringify({
            orders: orderInfo.orders,
            newOrder: "false",
            preparing: "true",
            finished: "false",
            foodNumber: orderInfo.foodNumber,
            total: orderInfo.total,
            time: orderInfo.time,
        }),
        headers: {
            "Content-Type" : "application/json; charset=UTF-8"
        }
    }).then(res => {
        if (res.ok) {
            seeNewOrderCls();
            setTimeout(() => {
                window.location.reload();
            }, 300);
        } else if (!res.ok) {
            return error();
        }
    }).catch(err => { return error() });
}


setInterval(() => {
    window.location.reload();
}, 60_000)





setInterval(() => {
    newOrders.innerHTML = newOrderLength;
    prepOrders.innerHTML = prepOrderLength;
    finsOrders.innerHTML = finsOrderLength;
}, 1000);




function signOut() {
    
}
