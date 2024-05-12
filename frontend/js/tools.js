const tools = document.getElementById('tools')
import {html_block, dev_tools} from './constants.js' 


const render_dev_tool = (imgUrl, dev_tool) => {
	const tool = document.createElement('div')
	tool.className = "tool"
	const img = document.createElement('img')
	img.setAttribute('src', imgUrl + "/" + dev_tool.img)
	img.className = "tool-img"
	const title = document.createElement('p')
	title.className = 'tool-title'
    title.innerHTML = dev_tool.title

	tool.appendChild(img)
	tool.appendChild(title)
	return tool
}

const render_dev_tools = (section, dev_tools, imgUrl) => {
	dev_tools.map(tool => {
		const dev_tool = render_dev_tool(imgUrl, tool)
		section.appendChild(dev_tool)
	})
}


render_dev_tools(tools, dev_tools, "./images/tools/")
