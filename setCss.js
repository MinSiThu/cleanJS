/**
 * setting Css
 * stop dom.style.property, use style.cssText or setClass
 */

 //old style
 document.getElementById('el').style.color = 'white';
 document.getElementById('el').style.backgroundColor = 'red';
 document.getElementById('el').style.margin = '5px';
 document.getElementById('el').style.padding = '5px';
 document.getElementById('el').style.textAlign = 'center';

 //new style
 let customStyle = `
 color:white;
 background-color:red;
 margin:5px;
 padding:5px;
 text-align:center;
`
document.getElementById('el').style.cssText = customStyle;

//other
document.getElementById('el').classList.add('textBox');