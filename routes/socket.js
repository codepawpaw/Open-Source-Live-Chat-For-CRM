/*
 * Serve content over a socket
 */

module.exports = function (socket) {
  socket.emit('send:name', {
    name: 'Bob'
  });
  socket.on('send:chat', function (data) {
        console.log("Receive data");
        console.log(data);
        if(data.from == 'agent'){
          socket.broadcast.emit('send:toVisitor', {
            name: data.name, text: data.text
          });
        } else {
          socket.broadcast.emit('send:toAgent', {
            name: data.name, text: data.text
          });
        }
  });


  /*setInterval(function () {
    socket.emit('send:time', {
      time: (new Date()).toString()
    });
  }, 1000);*/
};
