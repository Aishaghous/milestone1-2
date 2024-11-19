"use strict";
let ref_section = document.getElementById('ref');
let ref_btn = document.getElementById('ref_btn');
ref_btn === null || ref_btn === void 0 ? void 0 : ref_btn.addEventListener('click', () => {
    ref_section === null || ref_section === void 0 ? void 0 : ref_section.classList.toggle('hide');
});
let exp_section = document.getElementById('exp');
let exp_btn = document.getElementById('exp_btn');
exp_btn === null || exp_btn === void 0 ? void 0 : exp_btn.addEventListener('click', () => {
    exp_section === null || exp_section === void 0 ? void 0 : exp_section.classList.toggle('hide');
});
let lang_section = document.getElementById('lang');
let lang_btn = document.getElementById('lang_btn');
lang_btn === null || lang_btn === void 0 ? void 0 : lang_btn.addEventListener('click', () => {
    lang_section === null || lang_section === void 0 ? void 0 : lang_section.classList.toggle('hide');
});
let skill_section = document.getElementById('skill');
let skill_btn = document.getElementById('skill_btn');
skill_btn === null || skill_btn === void 0 ? void 0 : skill_btn.addEventListener('click', () => {
    skill_section === null || skill_section === void 0 ? void 0 : skill_section.classList.toggle('hide');
});
let edu_section = document.getElementById('edu');
let edu_btn = document.getElementById('edu_btn');
edu_btn === null || edu_btn === void 0 ? void 0 : edu_btn.addEventListener('click', () => {
    edu_section === null || edu_section === void 0 ? void 0 : edu_section.classList.toggle('hide');
});
let cnt_section = document.getElementById('cnt');
let cnt_btn = document.getElementById('cnt_btn');
cnt_btn === null || cnt_btn === void 0 ? void 0 : cnt_btn.addEventListener('click', () => {
    cnt_section === null || cnt_section === void 0 ? void 0 : cnt_section.classList.toggle('hide');
});
let print_btn = document.getElementById('print_btn');
print_btn === null || print_btn === void 0 ? void 0 : print_btn.addEventListener("click", () => {
    window.print();
});
