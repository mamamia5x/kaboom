// watch dir and rerun process

const cp = require("child_process");
const fs = require("fs");

const target = process.argv[2];
const cmd = process.argv[3];
const args = process.argv.slice(4);

function start() {
	return cp.spawn(cmd, args, {
		stdio: "inherit",
	});
}

let proc = start();

fs.watch(target, {
	recursive: true,
}, (ev, fname) => {
	if (fs.existsSync(fname)) {
		proc.kill();
		proc = start();
	}
});
