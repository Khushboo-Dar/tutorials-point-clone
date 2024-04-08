import { top_compilers, top_programming_languages, Data_science, web_technologies, document_editors, online_terminals } from "./constants.js";
import { scroll_div } from "./common.js";

const compiler_div = document.getElementById('top-compilers');
const tab_list = document.getElementById('tab-list');

const create_compiler_div = (img_url, txt, box) => {
    const compiler = document.createElement('div');
    const compiler_img = document.createElement('img');
    const compiler_txt = document.createElement('p');

    compiler.className = 'compiler';
    compiler_img.setAttribute('src', `./images/logos/${img_url}`);
    compiler_img.className = "compiler-img"
    compiler_txt.innerHTML = txt;

    compiler.appendChild(compiler_img);
    compiler.appendChild(compiler_txt);

    box.appendChild(compiler);
};

const show_tab = (tabName) => {
    document.getElementById(tabName).style.display = 'flex';
    document.getElementsByClassName('tab')[0].className += ' active-tab';
}

const populateTab = (tabName, data) => {
    const tabContent = document.getElementById(tabName)
    tabContent.innerHTML = ''
    data.map((item) => {
        create_tab_box(item.url, item.txt, tabContent) //function defined in index.js
    })
}

//makes the compilers and tabs scrollable
scroll_div(tab_list)
scroll_div(compiler_div)

// renders all top compilers in coding-ground.html 
top_compilers.map((compiler) => {
    create_compiler_div(compiler.img, compiler.txt, compiler_div);
});

document.addEventListener("DOMContentLoaded", () => {
    show_tab('top-programming-langs');
});

populateTab('top-programming-langs', top_programming_languages)
populateTab('DataScience', Data_science)
populateTab('onlineTerminals', online_terminals)
populateTab('WebTechnologies', web_technologies)
populateTab('docEditors', document_editors)


function Click(){
    console.log("hello")
}