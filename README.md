# daily-chores

An *electron*-based application to check for daily chores.

# Dependencies

First, you'll need to install *node package manager* :

	sudo apt install npm
		or 
	sudo pacman -S npm

then, install *npm*-based dependencies :

	npm install

# Run

Once all prerequisite are met, to start the application :

	npm start

# Unit tests and lint

To run unit tests :

	npm test

To run `jslint`, the Code Quality and Coverage Tool :

	make lint

# Log file

For logging, we use [electron-log](https://www.npmjs.com/package/electron-log).
By default, it writes logs to the following locations:

* on Linux: ~/.config/daily-chores/logs/main.log
* on macOS: ~/Library/Logs/daily-chores/main.log
* on Windows: %USERPROFILE%\AppData\Roaming\daily-chores\logs\main.log

# API documentation

API documentation can be generated with `jsdoc`. Since this binary can't be
found on official arch/manjaro repositories, you have to build it from 
[https://aur.archlinux.org/packages/nodejs-jsdoc](AUR) :

	git clone https://aur.archlinux.org/nodejs-jsdoc.git
	cd nodejs-jsdoc
	less PKGBUILD  # To check for the script
	makepkg
	sudo pamac install nodejs-jsdoc-*-any.pkg.tar.zst

Then, call `npm run doc`. You can now found HTML documentation in the `doc/`
directory.

# License

`daily-chores` is licensed under GPL v3 or later.

# Compatibility

You won't be able to install needed dependencies on i386/32 bits OS because
`npm` versions prior to v10 are not supported anymore on these plateforms.

