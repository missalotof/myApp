import React from 'react'
import Hello from './component.js'
import ReactDom from 'react-dom'


function main() {
    ReactDom.render(<Hello />, document.getElementById('app'));
}

main();


