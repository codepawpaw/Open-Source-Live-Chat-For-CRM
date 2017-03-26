
	var widgetDiv = document.createElement('div');
	widgetDiv.id = 'bornevia-chat-widget';
	widgetDiv.style.right = '40px';
	widgetDiv.style.bottom = '40px';
	widgetDiv.style.position = 'fixed';
	widgetDiv.style.zIndex = 199999;
	//widgetDiv.style.background = "linear-gradient(0deg, #1E2C3D 00%, #3E364E 100%)";
  widgetDiv.style.borderRadius = "18px";
	widgetDiv.style.width = '300px';
  widgetDiv.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.3)';
	widgetDiv.style.height = '400px';
  //widgetDiv.style.transition = 'all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9)';
	widgetDiv.innerHTML = '<iframe id="bornevia-chat-iframe" name="inlineframe" frameborder="0" style="width:310px; height:400px; overflow:hidden;"></iframe>';
  //widgetDiv.innerHTML = '<div id="bornevia-chat-iframe" style="width:310px; height:400px;"></div>';
  document.body.appendChild(widgetDiv);

  // request ajax
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      // append to iframe
      var doc = document.getElementById('bornevia-chat-iframe').contentWindow.document;
      
      //var doc = document.getElementById('bornevia-chat-widget').innerHTML;
      doc.open();
      doc.write(xhr.responseText);
      doc.close();
    }
  }
  xhr.open('GET', 'http://localhost:3000/customer_chat_widget', true);

  xhr.send(null);
