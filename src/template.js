/**
 * template
 * stop '', use ``
 */

//old version
var MESSAGE_TEMPLATE =
'<div class="message-container">' +
  '<div class="chatTable"> <div class="spacing"><div class="pic"></div></div>' +
  '<div class="name"></div><div class="chatTime">'+ new Date() +'</div></div>' +
  '<div class="message"></div>' +
'</div>';

//
let MESSAGE_TEMPLATE = `
    <div class="message-container">
        <div class="chatTable"> <div class="spacing">
        <div class="pic"></div>
    </div>

    <div class="name"></div>
    <div class="chatTime">${new Date()}</div>
    </div>

    <div class="message"></div>
    </div>
`