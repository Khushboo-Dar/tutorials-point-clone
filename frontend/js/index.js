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

function openTab(elemnt, tabName){
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove('active-tab')
    }
    document.getElementById(tabName).style.display = "flex";
    elemnt.className += " active-tab"
}


