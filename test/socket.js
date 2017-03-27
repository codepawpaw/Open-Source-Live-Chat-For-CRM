var socketURL = 'http://localhost:3000';
var expect    = require("chai").expect;
var socket = require("../routes/socket");
var should = require('should');
var io = require('socket.io-client');



describe("Socket", function() {
	describe("Send socket chat to agent", function() {
		var client1 = io.connect(socketURL);
		client1.on('connect', function(data){
			client1.emit('send:chat', {text : "test", from: "agent"});
		});
	});
	describe("Send socket chat to visitor", function() {
		var client1 = io.connect(socketURL);
		client1.on('connect', function(data){
			client1.emit('send:chat', {text : "test", from: "visitor"});
		});
	});
});