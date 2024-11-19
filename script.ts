let ref_section =document.getElementById('ref')
let ref_btn = document.getElementById('ref_btn')

ref_btn?.addEventListener('click', ()=>{
 ref_section?.classList.toggle('hide')
})

let exp_section =document.getElementById('exp')
let exp_btn = document.getElementById('exp_btn')

exp_btn?.addEventListener('click', ()=>{
 exp_section?.classList.toggle('hide')
})

let lang_section =document.getElementById('lang')
let lang_btn = document.getElementById('lang_btn')

lang_btn?.addEventListener('click', ()=>{
lang_section?.classList.toggle('hide')
})

 let skill_section =document.getElementById('skill')
let skill_btn = document.getElementById('skill_btn')

skill_btn?.addEventListener('click', ()=>{
skill_section?.classList.toggle('hide')
})

let edu_section =document.getElementById('edu')
let edu_btn = document.getElementById('edu_btn')

edu_btn?.addEventListener('click', ()=>{
 edu_section?.classList.toggle('hide')
})
let cnt_section =document.getElementById('cnt')
let cnt_btn = document.getElementById('cnt_btn')

cnt_btn?.addEventListener('click', ()=>{
cnt_section?.classList.toggle('hide')
})

let print_btn = document.getElementById('print_btn')
print_btn?.addEventListener("click",()=>{
    window.print()
})