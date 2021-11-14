# install

install i:
	npm ci
	npm publish --dry-run
	sudo npm link

uninstall:
	sudo npm uninstall -g @hexlet/code

# games

brain-games bg:
	node bin/brain-games.js

brain-even be:
	node bin/brain-even.js

brain-calc bc:
	node bin/brain-even.js

# other

publish:
	npm publish --dry-run

lint l:
	npx eslint .
