let faSearch = document.querySelector('.fa-search');

let searchForm = document.querySelector('.search-form');

faSearch.onclick = function () {
    searchForm.classList.toggle('openSearch');
}


// Profile 
let loginBtn = document.getElementById('login-btn');

let singIn = document.querySelector('.login-form-container');

let closeLoginBtn = document.getElementById('close-login-btn');

loginBtn.onclick = () => {
    singIn.style.right = '0px';
}
closeLoginBtn.onclick = () => {
    singIn.style.right = '105%';
}

// form Inputs 
let password = document.getElementById('password');
let singInForm = document.getElementById('singIn');

// UserName Var
let username = document.getElementById('username');
let userNameLabel = document.querySelector('.userName-label');
let msgError = document.getElementById('error');
let msgSuccess = document.getElementById('success');

// Password Var
let passwordLabel = document.querySelector('.password-label');
let passWord = document.getElementById('password');
let errorPass = document.getElementById('error-pass');
let successPass = document.getElementById('success-pass');

singIn.addEventListener('submit', (e) => {
    e.preventDefault();
    if (username.value === "") {
        username.classList.add('error')
        userNameLabel.classList.add('error');
        msgError.classList.add('error');
    } else {
        username.classList.add('success');
        userNameLabel.classList.add('success');
        msgSuccess.classList.add('success');
    }
    if (password.value === "") {
        passwordLabel.classList.add('error');
        passWord.classList.add('error');
        errorPass.classList.add('error');
    } else {
        passwordLabel.classList.add('success');
        passWord.classList.add('success');
        successPass.classList.add('success');
    }
});

window.onscroll = () => {

    window.onscroll = () => {
        if (window.scrollY > 80) {
            document.querySelector('.header .header-2').classList.add('active');
        } else {
            document.querySelector('.header .header-2').classList.remove('active');
        }
    }
}

// Loader
function loader() {
    document.querySelector('.loader-container').classList.add('active');
}

window.onload = function fadeOut() {
    setTimeout(loader, 4000);
}

// Mobile View
let arrowLeft = document.getElementById('arrow-left');
let arrowRight = document.getElementById('arrow-right');
let div = document.querySelectorAll('.swiper-wrapper .box');
let I = 0;

arrowRight.onclick = () => {
    I++;
    for (let i of div) {
        if (I == 0) { i.style.left = "0px"; }
        if (I == 1) { i.style.left = "-120px"; }
        if (I == 2) { i.style.left = "-360px"; }
        if (I == 3) { i.style.left = "-570px"; }
        if (I == 4) { i.style.left = "-800px"; }
        if (I == 5) { i.style.left = "-1000px"; }
        if (I == 6) { i.style.left = "-1220px"; }
        if (I == 7) { i.style.left = "-1350px"; }
        if (I > 7) { I = 7; }
    }
}

arrowLeft.onclick = () => {
    I--;
    for (let i of div) {
        if (I == 0) { i.style.left = "0px"; }
        if (I == 1) { i.style.left = "-120px"; }
        if (I == 2) { i.style.left = "-360px"; }
        if (I == 3) { i.style.left = "-570px"; }
        if (I == 4) { i.style.left = "-800px"; }
        if (I == 5) { i.style.left = "-1050px"; }
        if (I == 6) { i.style.left = "-1250px"; }
        if (I == 7) { i.style.left = "-1350px"; }
        if (I < 0) { I = 0; }
    }
}

let arrowLeft1 = document.getElementById('arrow-left1');
let arrowRight1 = document.getElementById('arrow-right1');
let div1 = document.querySelectorAll('.home .books-slider .swiper-slide');
let I1 = 0;

arrowRight1.onclick = () => {
    I1++;
    for (let i of div1) {
        if (I1 == 0) { i.style.transform = "translateX(0px)"; }
        if (I1 == 1) { i.style.transform = "translateX(-160px)"; }
        if (I1 == 2) { i.style.transform = "translateX(-340px)"; }
        if (I1 == 3) { i.style.transform = "translateX(-530px)"; }
        if (I1 == 4) { i.style.transform = "translateX(-720px)"; }
        if (I1 == 5) { i.style.transform = "translateX(-900px)"; }
        if (I1 == 6) { i.style.transform = "translateX(-1100px)"; }
        if (I1 == 7) { i.style.transform = "translateX(-1200px)"; }
        if (I1 > 7) { I1 = 7; }
    }
}

arrowLeft1.onclick = () => {
    I1--;
    for (let i of div1) {
        if (I1 == 0) { i.style.transform = "translateX(0px)"; }
        if (I1 == 1) { i.style.transform = "translateX(-160px)"; }
        if (I1 == 2) { i.style.transform = "translateX(-340px)"; }
        if (I1 == 3) { i.style.transform = "translateX(-530px)"; }
        if (I1 == 4) { i.style.transform = "translateX(-720px)"; }
        if (I1 == 5) { i.style.transform = "translateX(-900px)"; }
        if (I1 == 6) { i.style.transform = "translateX(-1100px)"; }
        if (I1 < 0) { I1 = 0; }
    }
}

let arrowLeft2 = document.getElementById('arrow-left2');
let arrowRight2 = document.getElementById('arrow-right2');
let div2 = document.querySelectorAll('.wraper .box');
let I2 = 0;

arrowRight2.onclick = () => {
    I2++;
    for (let i of div2) {
        if (I2 == 0) { i.style.transform = "translateX(0px)"; }
        if (I2 == 1) { i.style.transform = "translateX(-360px)"; }
        if (I2 == 2) { i.style.transform = "translateX(-660px)"; }
        if (I2 == 3) { i.style.transform = "translateX(-960px)"; }
        if (I2 == 4) { i.style.transform = "translateX(-1240px)"; }
        if (I2 == 5) { i.style.transform = "translateX(-1540px)"; }
        if (I2 == 6) { i.style.transform = "translateX(-1820px)"; }
        if (I2 > 6) { I2 = 6; }
    }
}

arrowLeft2.onclick = () => {
    I2--;
    for (let i of div2) {
        if (I2 == 0) { i.style.transform = "translateX(0px)"; }
        if (I2 == 1) { i.style.transform = "translateX(-310px)"; }
        if (I2 == 2) { i.style.transform = "translateX(-660px)"; }
        if (I2 == 3) { i.style.transform = "translateX(-960px)"; }
        if (I2 == 4) { i.style.transform = "translateX(-1240px)"; }
        if (I2 == 5) { i.style.transform = "translateX(-1540px)"; }
        if (I2 == 6) { i.style.transform = "translateX(-1840px)"; }
        if (I2 < 0) { I2 = 0; }
    }
}

let arrowLeft3 = document.getElementById('arrow-left3');
let arrowRight3 = document.getElementById('arrow-right3');
let div3 = document.querySelectorAll('.review .box');
let I3 = 0;

arrowRight3.onclick = () => {
    I3++;
    for (let i of div3) {
        if (I3 == 0) { i.style.transform = "translateX(0px)"; }
        if (I3 == 1) { i.style.transform = "translateX(-360px)"; }
        if (I3 == 2) { i.style.transform = "translateX(-700px)"; }
        if (I3 > 2) { I3 = 2; }
    }
}

arrowLeft3.onclick = () => {
    I3--;
    for (let i of div3) {
        if (I3 == 0) { i.style.transform = "translateX(0px)"; }
        if (I3 == 1) { i.style.transform = "translateX(-360px)"; }
        if (I3 == 2) { i.style.transform = "translateX(-700px)"; }
        if (I3 < 0) { I3 = 0; }
    }
}

let arrowLeft4 = document.getElementById('arrow-left4');
let arrowRight4 = document.getElementById('arrow-right4');
let div4 = document.querySelectorAll('.blogs .box');
let I4 = 0;

arrowRight4.onclick = () => {
    I4++;
    for (let i of div4) {
        if (I4 == 0) { i.style.transform = "translateX(0px)"; }
        if (I4 == 1) { i.style.transform = "translateX(-360px)"; }
        if (I4 == 2) { i.style.transform = "translateX(-600px)"; }
        if (I4 > 2) { I4 = 2; }
    }
}

arrowLeft4.onclick = () => {
    I4--;
    for (let i of div4) {
        if (I4 == 0) { i.style.transform = "translateX(0px)"; }
        if (I4 == 1) { i.style.transform = "translateX(-360px)"; }
        if (I4 == 2) { i.style.transform = "translateX(-600px)"; }
        if (I4 < 0) { I4 = 0; }
    }
}
