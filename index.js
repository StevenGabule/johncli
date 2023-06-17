#!/usr/bin/env node
const pkgJSON = require('./package.json')
const welcome = require('cli-welcome')

welcome({
	title: pkgJSON.name,
	tagLine: 'Learn NodeJS - Creating CLI',
	description: pkgJSON.description,
	version: pkgJSON.version,
	bgColor: `#FADC00`,
	color: `#000000`,
	bold: true,
	clear: true
})

console.log(`
John Paul Gabule - Software Developer

Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nulla facere omnis autem modi optio laudantium veniam commodi excepturi doloremque? Nam doloribus velit dicta sit dignissimos libero, repellat ab hic enim quae aperiam, magni facilis eius quam harum impedit quidem quod corporis explicabo porro? Doloremque quis modi ratione aliquid temporibus tempora? Veritatis deleniti impedit, consectetur ipsa distinctio accusamus molestiae reprehenderit hic in ut sapiente sed temporibus. Quisquam, eius quae? Inventore aspernatur accusamus nisi! Libero est quis nulla explicabo minima fuga, aspernatur a labore eos placeat ea aliquid sint commodi veritatis aliquam natus similique maiores voluptates harum debitis fugit facilis unde?

🚀 Twitter: https://twitter.com/GabuleP
📰 Github: https://github.com/stevengabule

`);