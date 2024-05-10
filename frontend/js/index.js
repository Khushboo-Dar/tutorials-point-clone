const create_tab_box = (img_url, txt, box) => {
    const tab = document.createElement('div')
    const compiler = document.createElement('div');
    const compiler_img = document.createElement('img');
    const compiler_txt = document.createElement('p');

    tab.className = 'tab-box'
    compiler.className = 'tabLink';
    compiler_img.className = "tab-compiler-img"

    compiler_img.setAttribute('src', `./images/logos/${img_url}`);
    compiler_txt.innerHTML = txt;

    compiler.appendChild(compiler_img);
    tab.appendChild(compiler)
    tab.append(compiler_txt)

    box.appendChild(tab);
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


