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

# Unit tests

To run unit tests :

	npm test

# Log file

For logging, we use [electron-log](https://www.npmjs.com/package/electron-log).
By default, it writes logs to the following locations:

* on Linux: ~/.config/daily-chores/logs/main.log
* on macOS: ~/Library/Logs/daily-chores/main.log
* on Windows: %USERPROFILE%\AppData\Roaming\daily-chores\logs\main.log

# License

`daily-chores` is licensed under GPL v3 or later.

# Compatibility

You won't be able to install needed dependencies on i386/32 bits OS because
`npm` versions prior to v10 are not supported anymore on these plateforms.

