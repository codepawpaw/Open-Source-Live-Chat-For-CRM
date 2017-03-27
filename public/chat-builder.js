
	var widgetDiv = document.createElement('div');
	widgetDiv.id = 'chat-widget';
	widgetDiv.style.right = '40px';
	widgetDiv.style.bottom = '40px';
	widgetDiv.style.position = 'fixed';
	widgetDiv.style.zIndex = 199999;
  widgetDiv.style.borderRadius = "18px";
	widgetDiv.style.width = '300px';
  widgetDiv.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.3)';
	widgetDiv.style.height = '400px';
	widgetDiv.innerHTML = '<iframe id="chat-iframe" name="inlineframe" frameborder="0" style="width:310px; height:400px; overflow:hidden;"></iframe>';
  document.body.appendChild(widgetDiv);

  // request ajax
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      // append to iframe
      var doc = document.getElementById('chat-iframe').contentWindow.document;
      
      doc.open();
      doc.write(xhr.responseText);
      doc.close();
    }
  }
  xhr.open('GET', 'http://localhost:3000/customer_chat_widget', true);

  xhr.send(null);
