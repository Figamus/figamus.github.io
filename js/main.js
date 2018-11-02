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
