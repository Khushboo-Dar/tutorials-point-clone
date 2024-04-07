import { top_compilers, tabList } from "./constants.js";


const compiler_div = document.getElementById('top-compilers');
const tab_list = document.getElementById('tab-list');

const scroll_div = (slider) => {
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        e.preventDefault()
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
    });
    slider.addEventListener('mouseup', () => {
        isDown = false;
    });

    slider.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX)*1.5 ; //scroll speed
        slider.scrollLeft = scrollLeft - walk;
    });
}

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

const create_tabList = (txt) => {
    const tab = document.createElement('div')
    const text = document.createElement('p')

    text.innerHTML = txt
    tab.className = 'tab'

    tab.appendChild(text)
    tab_list.appendChild(tab)
}

//makes the compilers and tabs scrollable
scroll_div(tab_list)
scroll_div(compiler_div)


// renders all top compilers in coding-ground.html 
top_compilers.map((compiler) => {
    create_compiler_div(compiler.img, compiler.txt);
});

//renders all the tabs in learning section
tabList.map((tab) => {
    create_tabList(tab)
})
