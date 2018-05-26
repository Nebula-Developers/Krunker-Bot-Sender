const yargs = require("yargs");

const io = require("socket.io-client");
const msgpack = require("socket.io-msgpack-parser");

// Wildcard command in case we want to add a 'probe' option later
yargs.command("* <num> <ip>", "Bots a server.", () => {
	yargs.positional("num", {
		description: "The number of bots to add.",
		type: "number",
	});
	yargs.positional("ip", {
		alias: "server",
		description: "The IP/server code to connect to.",
		type: "string",
	});
	yargs.option("name", {
		type: "string",
	});
}, args => {
	setInterval(()=>{
		const socket = io.connect("", {
			parser: msgpack,
		});
		socket.on("connect", () => {
			console.log("yes");
		});
	}, 200);
});
yargs.argv;