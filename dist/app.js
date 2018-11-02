(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
about = () => {
    document.querySelector("#about").innerHTML = `
    <div class="container text-center">
    <img class="rounded-circle profile-image" src="./img/temp-image.jpg" alt="Profile Image" width="300" height="300"></img>
        <div class="row">
            <div class="col-lg-10 mx-auto">
                <h2>About Me</h2>
                <p class="lead mb-5">Since 2005 I've been involved in the graphic design field. I've utilized the skills acquired during my education to produce a variety of products for both print and web. In 2010, I transitioned into an opportunity to be involved in the emerging 3D imaging and 3D printing industry, allowing me to learn new skills and having more input on company wide decisions. I continue to maintain a practice at Graphic Design, but decided to transition into a development environment, having discovered a passion for it. I pursued an education in an environment that fostered my passion.</p>
                <a class="btn btn-primary btn-xl js-scroll-trigger" href="#services">Skills</a>
            </div>
        </div>
    </div>`
}

module.exports = about
},{}],2:[function(require,module,exports){
footer = () => {
    document.querySelector("#footer").innerHTML = `
    <div class="container">
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
        <div class="container">
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
        </div>
        <a class="btn btn-primary btn-xl js-scroll-trigger" href="#links">Find Out More</a>
    </div>
    <div class="overlay"></div>`
}

module.exports = header
},{}],4:[function(require,module,exports){
"use strict";

let navbar = require("./navbar");
let header = require("./header");
// let links = require("./links");
let about = require("./about");
let skills = require("./skills");
// let resume = require("./resume");
let portfolio = require("./portfolio");
// let action = require("./action");
let footer = require("./footer");

navbar();
header();
// links();
about();
skills();
// resume();
portfolio();
// action();
footer();

$('html, body').ready(function(){
    $(this).scrollTop(0);
});

},{"./about":1,"./footer":2,"./header":3,"./navbar":5,"./portfolio":6,"./skills":7}],5:[function(require,module,exports){
navbar = () => {
    document.querySelector("#sidebar-wrapper").innerHTML = `
    <ul class="sidebar-nav">
        <li class="sidebar-brand">
            <p class="text-white">Navigation</p>
        </li>
        <li class="sidebar-nav-item">
            <a class="js-scroll-trigger" href="#page-top">Daniel Figueroa</a>
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
},{}],6:[function(require,module,exports){
portfolio = () => {
    document.querySelector("#portfolio").innerHTML = `
    <div class="container">
        <div class="content-section-heading text-center">
            <h3 class="text-secondary mb-0">Portfolio</h3>
            <h2 class="mb-5">Recent Projects</h2>
        </div>
        <div class="row no-gutters">
            <div class="col-lg-6 mx-auto">
                <a class="portfolio-item" href="https://github.com/Figamus/sale-sleuth">
                    <span class="caption">
                        <span class="caption-content">
                            <h2>Sale Sleuth</h2>
                            <p class="mb-0">A price tracking website</p>
                        </span>
                    </span>
                    <img class="img-fluid" src="img/SaleSleuth1.jpg" alt="">
                </a>
            </div>
        </div>
    </div>`
}
{/* <div class="col-lg-6 mx-auto">
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
            <div class="col-lg-6 mx-auto">
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
            <div class="col-lg-6 mx-auto">
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
                </div> */}
module.exports = portfolio
},{}],7:[function(require,module,exports){
skills = () => {
    document.querySelector("#services").innerHTML = `
    <div class="container">
        <div class="content-section-heading">
        <h2 class="mb-5">Skill Set</h2>
        </div>
        <div class="row">

            <div class="col-lg-3 col-md-6 mb-5 mb-lg-0 mx-auto">
                <img class="" src="./img/icon-html.png" alt="Profile Image" width="125" height="125"></img>
                <h4>
                    <strong>HTML</strong>
                </h4>
                <p class="text-faded mb-0"></p>
            </div>

            <div class="col-lg-3 col-md-6 mb-5 mb-lg-0 mx-auto">
                <img class="" src="./img/icon-css.png" alt="Profile Image" width="125" height="125"></img>
                <h4>
                    <strong>CSS</strong>
                </h4>
                <p class="text-faded mb-0"></p>
            </div>

            <div class="col-lg-3 col-md-6 mb-5 mb-md-0 mx-auto">
            <img class="" src="./img/icon-javascript.png" alt="Profile Image" width="125" height="125"></img>
                <h4>
                    <strong>Javascript</strong>
                </h4>
                <p class="text-faded mb-0"></p>
            </div>

            <div class="col-lg-3 col-md-6 mx-auto">
            <img class="" src="./img/icon-react.png" alt="Profile Image" width="125" height="125"></img>
                <h4>
                    <strong>React</strong>
                </h4>
                <p class="text-faded mb-0"></p>
            </div>

            <div class="col-lg-3 col-md-6 mb-5 mb-lg-0 mx-auto">
                <img class="" src="./img/icon-npm.png" alt="Profile Image" width="125" height="125"></img>
                <h4>
                    <strong>NPM</strong>
                </h4>
                <p class="text-faded mb-0"></p>
            </div>

            <div class="col-lg-3 col-md-6 mb-5 mb-lg-0 mx-auto">
                <img class="rounded-circle" src="./img/icon-git.png" alt="Profile Image" width="125" height="125"></img>
                <h4>
                    <strong>Git</strong>
                </h4>
                <p class="text-faded mb-0"></p>
            </div>

            <div class="col-lg-3 col-md-6 mb-5 mb-lg-0 mx-auto">
                <img class="rounded-circle" src="./img/icon-github.png" alt="Profile Image" width="125" height="125"></img>
                <h4>
                    <strong>Github</strong>
                </h4>
                <p class="text-faded mb-0"></p>
            </div>

            <div class="col-lg-3 col-md-6 mb-5 mb-lg-0 mx-auto">
                <img class="" src="./img/icon-browserify.png" alt="Profile Image" width="125" height="125"></img>
                <h4>
                    <strong>Browserify</strong>
                </h4>
                <p class="text-faded mb-0"></p>
            </div>

        <div class="col-lg-3 col-md-6 mb-5 mb-lg-0 mx-auto">
        <img class="" src="./img/icon-grunt.png" alt="Profile Image" width="125" height="125"></img>
            <h4>
                <strong>Grunt</strong>
            </h4>
            <p class="text-faded mb-0"></p>
        </div>

        <div class="col-lg-3 col-md-6 mb-5 mb-md-0 mx-auto">
        <img class="" src="./img/icon-bootstrap.png" alt="Profile Image" width="125" height="125"></img>
            <h4>
                <strong>Bootstrap</strong>
            </h4>
            <p class="text-faded mb-0"></p>
        </div>

        <div class="col-lg-3 col-md-6 mx-auto">
        <img class="" src="./img/icon-visual-studio.png" alt="Profile Image" width="125" height="125"></img>
            <h4>
                <strong>Visual Studio</strong>
            </h4>
            <p class="text-faded mb-0"></p>
        </div>
        <div class="col-lg-3 col-md-6 mx-auto">
        <img class="" src="./img/icon-sql-server.png" alt="Profile Image" width="125" height="125"></img>
            <h4>
                <strong>SQL Server</strong>
            </h4>
            <p class="text-faded mb-0"></p>
        </div>

        <div class="col-lg-3 col-md-6 mx-auto">
        <img class="" src="./img/icon-csharp.png" alt="Profile Image" width="125" height="125"></img>
            <h4>
                <strong>C#</strong>
            </h4>
            <p class="text-faded mb-0"></p>
        </div>

        <div class="col-lg-3 col-md-6 mx-auto">
        <img class="" src="./img/icon-aspnet-core.png" alt="Profile Image" width="125" height="125"></img>
            <h4>
                <strong>ASP.NET Core</strong>
            </h4>
            <p class="text-faded mb-0"></p>
        </div>

        </div>
        <a class="btn btn-light btn-xl js-scroll-trigger" href="#portfolio">Projects</a>
    </div>`
}
// HTML
// CSS
// JavaScript
// React
// Browserify
// Grunt
// Bootstrap SQL
// C#
// .NET Core
// Photoshop
// Illustrator
// InDesign
// 3DS Max
module.exports = skills
},{}]},{},[4]);
