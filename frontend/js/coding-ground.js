import { top_compilers } from "./constants.js";

const compiler_div = document.getElementById('top-compilers');

const create_compiler_div = (img_url, txt) => {
    const compiler = document.createElement('div');
    const compiler_img = document.createElement('img');
    const compiler_txt = document.createElement('p');

    compiler.className = 'compiler';
    compiler_img.setAttribute('src', `./images/coding ground/${img_url}`);
    compiler_txt.innerHTML = txt;

    compiler.appendChild(compiler_img);
    compiler.appendChild(compiler_txt);

    compiler_div.appendChild(compiler);
};

top_compilers.map((compiler) => {
    create_compiler_div(compiler.img, compiler.txt);
});
