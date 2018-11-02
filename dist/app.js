(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
about = () => {
    document.querySelector("#about").innerHTML = `
    <div class="container text-center">
    <img class="rounded-circle" src="./img/temp-image.jpg" alt="Profile Image" width="300" height="300"></img>
        <div class="row">
            <div class="col-lg-10 mx-auto">
                <h2>About Me</h2>
                <p class="lead mb-5">Since 2005 I've been involved in the graphic design field. I've utilized the skills acquired during my education to produce a variety of products for both print and web. In 2010, I transitioned into an opportunity to be involved in the emerging 3D imaging and 3D printing industry, allowing me to learn new skills and having more input on company wide decisions. I continue to maintain a practice at Graphic Design, but decided to transition into a development environment, having discovered a passion for it. I pursued an education in an environment that fostered my passion.</p>
                
            </div>
        </div>
    </div>`
}

{/* <a class="btn btn-dark btn-xl js-scroll-trigger" href="#services">What We Offer</a> */}
module.exports = about
},{}],2:[function(require,module,exports){
footer = () => {
    document.querySelector("#footer").innerHTML = `
    <div class="container">
        <p class="text-muted small mb-0">Copyright &copy; Daniel Figueroa 2018</p>
    </div>`
}

module.exports = footer
},{}],3:[function(require,module,exports){
header = () => {
    document.querySelector("#header").innerHTML = `
    <div class="container text-center my-auto">
        <h1 class="mb-1 text-light deepshd">Daniel Figueroa</h1>
        <h3 class="mb-5 text-light deepshd">
            <em>Software Developer</em>
        </h3>
        <a class="btn btn-primary btn-xl js-scroll-trigger" href="#links">Find Out More</a>
    </div>
    <div class="overlay"></div>`
}

module.exports = header
},{}],4:[function(require,module,exports){
links = () => {
    document.querySelector("#links").innerHTML = `
    <div class="container">
        <div class="content-section-heading">
            <h3 class="text-secondary mb-0">Links</h3>
        </div>
        <ul class="list-inline mb-5">
            <li class="list-inline-item">
                <a class="social-link rounded-circle text-white mr-3" href="https://www.linkedin.com/in/daniel-figueroa/">
                    <i class="icon-social-linkedin"></i>
                </a>
            </li>
            <li class="list-inline-item">
                <a class="social-link rounded-circle text-white" href="https://github.com/Figamus">
                    <i class="icon-social-github"></i>
                </a>
            </li>
        </ul>
    </div>`
}

module.exports = links
},{}],5:[function(require,module,exports){
"use strict";

let navbar = require("./navbar");
let header = require("./header");
let links = require("./links");
let about = require("./about");
let skills = require("./skills");
// let resume = require("./resume");
let portfolio = require("./portfolio");
// let action = require("./action");
let footer = require("./footer");

navbar();
header();
links();
about();
skills();
// resume();
portfolio();
// action();
footer();

$('html, body').scrollTop($('html, body')[0].scrollHeight)
// $('html, body').animate({
//     scrollTop: target.offset().top
// }, 1000, "easeInOutExpo");

},{"./about":1,"./footer":2,"./header":3,"./links":4,"./navbar":6,"./portfolio":7,"./skills":8}],6:[function(require,module,exports){
navbar = () => {
    document.querySelector("#sidebar-wrapper").innerHTML = `
    <ul class="sidebar-nav">
        <li class="sidebar-brand">
            <a class="js-scroll-trigger" href="#page-top">Top of Page</a>
        </li>
        <li class="sidebar-nav-item">
            <a class="js-scroll-trigger" href="#page-top">Daniel Figueroa</a>
        </li>
        <li class="sidebar-nav-item">
            <a class="js-scroll-trigger" href="#links">Links</a>
        </li>
        <li class="sidebar-nav-item">
            <a class="js-scroll-trigger" href="#about">About</a>
        </li>
        <li class="sidebar-nav-item">
            <a class="js-scroll-trigger" href="#services">Skills</a>
        </li>
        <li class="sidebar-nav-item">
            <a class="js-scroll-trigger" href="#portfolio">Portfolio</a>
        </li>
    </ul>`
}

module.exports = navbar
},{}],7:[function(require,module,exports){
portfolio = () => {
    document.querySelector("#portfolio").innerHTML = `
    <div class="container">
        <div class="content-section-heading text-center">
            <h3 class="text-secondary mb-0">Portfolio</h3>
            <h2 class="mb-5">Recent Projects</h2>
        </div>
        <div class="row no-gutters">
            <div class="col-lg-6">
                <a class="portfolio-item" href="#">
                    <span class="caption">
                        <span class="caption-content">
                            <h2>Stationary</h2>
                            <p class="mb-0">A yellow pencil with envelopes on a clean, blue backdrop!</p>
                        </span>
                    </span>
                    <img class="img-fluid" src="img/portfolio-1.jpg" alt="">
                </a>
            </div>
            <div class="col-lg-6">
                <a class="portfolio-item" href="#">
                    <span class="caption">
                        <span class="caption-content">
                            <h2>Ice Cream</h2>
                            <p class="mb-0">A dark blue background with a colored pencil, a clip, and a tiny ice
                                cream cone!</p>
                        </span>
                    </span>
                    <img class="img-fluid" src="img/portfolio-2.jpg" alt="">
                </a>
            </div>
            <div class="col-lg-6">
                <a class="portfolio-item" href="#">
                    <span class="caption">
                        <span class="caption-content">
                            <h2>Strawberries</h2>
                            <p class="mb-0">Strawberries are such a tasty snack, especially with a little sugar on
                                top!</p>
                        </span>
                    </span>
                    <img class="img-fluid" src="img/portfolio-3.jpg" alt="">
                </a>
            </div>
            <div class="col-lg-6">
                <a class="portfolio-item" href="#">
                    <span class="caption">
                        <span class="caption-content">
                            <h2>Workspace</h2>
                            <p class="mb-0">A yellow workspace with some scissors, pencils, and other objects.</p>
                        </span>
                    </span>
                    <img class="img-fluid" src="img/portfolio-4.jpg" alt="">
                </a>
            </div>
        </div>
    </div>`
}

module.exports = portfolio
},{}],8:[function(require,module,exports){
skills = () => {
    document.querySelector("#services").innerHTML = `
    <div class="container">
        <div class="content-section-heading">
        <h3 class="text-secondary mb-0">Technologies studied and practiced with</h3>
        <h2 class="mb-5">Skills</h2>
        </div>
        <div class="row">
            <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
                <span class="service-icon rounded-circle mx-auto mb-3">
                    <i class="icon-screen-smartphone"></i>
                </span>
                <h4>
                    <strong>Responsive</strong>
                </h4>
                <p class="text-faded mb-0">Looks great on any screen size!</p>
            </div>
            <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
                <span class="service-icon rounded-circle mx-auto mb-3">
                    <i class="icon-pencil"></i>
                </span>
                <h4>
                    <strong>Redesigned</strong>
                </h4>
                <p class="text-faded mb-0">Freshly redesigned for Bootstrap 4.</p>
            </div>
            <div class="col-lg-3 col-md-6 mb-5 mb-md-0">
                <span class="service-icon rounded-circle mx-auto mb-3">
                    <i class="icon-like"></i>
                </span>
                <h4>
                    <strong>Favorited</strong>
                </h4>
                <p class="text-faded mb-0">Millions of users
                    <i class="fas fa-heart"></i>
                    Start Bootstrap!</p>
            </div>
            <div class="col-lg-3 col-md-6">
                <span class="service-icon rounded-circle mx-auto mb-3">
                    <i class="icon-mustache"></i>
                </span>
                <h4>
                    <strong>Question</strong>
                </h4>
                <p class="text-faded mb-0">I mustache you a question...</p>
            </div>
        </div>
    </div>`
}

module.exports = skills
},{}]},{},[5]);
