/**
 * Ajax
 * stop jquery, use fetch
 */

//old version
$.ajax({
    url: 'http://ip:3000/url',
    type: 'post',
    success: function(data) {
      $('#el').html(data);
    }
  })

 // new version;
async function loadText(url) {
	var response = await fetch(url)
	element.innerHTML = await response.json();
}