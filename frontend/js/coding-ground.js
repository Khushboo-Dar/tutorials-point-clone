import { top_compilers } from "./constants.js";
import { scroll_div } from "./common.js";

const compiler_div = document.getElementById('top-compilers');
const tab_list = document.getElementById('tab-list');
const tabs = document.getElementsByClassName('tab')

const create_compiler_div = (img_url, txt) => {
    const compiler = document.createElement('div');
    const compiler_img = document.createElement('img');
    const compiler_txt = document.createElement('p');

    compiler.className = 'compiler';
    compiler_img.setAttribute('src', `./images/logos/${img_url}`);
    compiler_img.className = "compiler-img"
    compiler_txt.innerHTML = txt;

    compiler.appendChild(compiler_img);
    compiler.appendChild(compiler_txt);

    compiler_div.appendChild(compiler);
};


//makes the compilers and tabs scrollable
scroll_div(tab_list)
scroll_div(compiler_div)

// renders all top compilers in coding-ground.html 
top_compilers.map((compiler) => {
    create_compiler_div(compiler.img, compiler.txt);
});

