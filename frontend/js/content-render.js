const section = document.getElementById('left-section')
import {html_block} from './constants.js' 

function render_block_contents(lang_name, block_topics){
	const contents = document.createElement('div')
	contents.className = "contents"
	block_topics.map((topic) => {
		const cont_block = document.createElement('div')
		cont_block.className = "cont-block"
		const info_block = document.createElement('div')
		info_block.className = "info"
		const cont = document.createElement('p')
		cont.innerHTML = lang_name + " - " + topic

		info_block.appendChild(cont)
		cont_block.appendChild(info_block)
		contents.appendChild(cont_block)
	})
    return contents
}

function render_block(section, lang_contents, img_url, lang_name){

	// creating top image of left section 
	const img = document.createElement('img')
	img.setAttribute('src', img_url)
	img.setAttribute('alt', lang_name)
	img.className = "tut-img"
	section.appendChild(img)

	// creating block contents 
	lang_contents.map((cont_block) => {
		const block = document.createElement('div')
		block.className = "block"
		const head_block = document.createElement('div')
		head_block.className = "block-heading"
		head_block.innerHTML = cont_block.heading
		const contents = render_block_contents(lang_name, cont_block.topics)

		block.appendChild(head_block)
        block.appendChild(contents)
        section.appendChild(block)
	})
}

render_block(section, html_block, "./images/html-mini-logo.jpg", "HTML")