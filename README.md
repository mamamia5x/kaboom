![logo](misc/kaboom.png)

kaboom.js is a JavaScript library that helps you make games fast and fun!

[website](https://kaboomjs.com/)

### Example

```html
<script src="https://kaboomjs.com/lib/0.4.1/kaboom.js"></script>
<script type="module">

// initialize kaboom context
const k = kaboom();

// define a scene
k.scene("main", () => {

	// add a text at position (100, 100)
	k.add([
		k.text("ohhimark", 32),
		k.pos(100, 100),
	]);

});

// start the game
k.start("main");

</script>
```

paste this directly into an `html` file and start playing around!

### Usage

the recommended way is to [download](https://kaboomjs.com/lib/latest/kaboom.js) a local copy of the library and use it directly, the source should be easy to read and modify (still in progress of documenting the source)

you can also use CDN

```html
<script src="https://kaboomjs.com/lib/@version/kaboom.js"></script>
```

all available version tags can be found in CHANGELOG.md, or github releases

special version tags:
- `dev`: current master with the newest unreleased features / fixes, but not guaranteed to be stable
- `latest`: latest release

the script will expose a `window.kaboom` function to initialize a kaboom context, returning an object containing

```js
const k = kaboom();

k.init();
k.scene(...);
k.start(...);
```

You can also import all functions to global namespace by giving a `global` flag

```js
kaboom({
	global: true,
});

init();
scene(...);
start(...);
```

However, it is possible to use a module version of kaboomjs.

```html
<script type="module" src="script.js"></script>
```

`script.js`:
```js
import kaboom from "https://kaboomjs.com/lib/0.4.1/kaboom.mjs";

const k = kaboom();

k.init();
k.scene(...);
k.start(...);

```

Using the module version means that there will be no `window.kaboom` available and kaboom must be imported.

### Dev

use examples to test / add features

1. `npm run dev`
1. go to http://localhost:8000/examples
1. edit examples in `examples/`

### Misc

featured on [Console 50](https://console.substack.com/p/console-50)
