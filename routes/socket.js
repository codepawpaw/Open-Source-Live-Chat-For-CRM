module.exports = function (socket) {
  socket.on('send:chat', function (data) {
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

};
