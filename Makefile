# install

install i:
	npm ci
	npm publish --dry-run
	sudo npm link

reinstall ri: uninstall install

uninstall:
	sudo npm uninstall -g brain-games

# games

brain-games bg:
	node bin/brain-games.js

brain-even be:
	node bin/brain-even.js

brain-calc bc:
	node bin/brain-calc.js

brain-progression bp:
	node bin/brain-progression.js

# other

publish:
	npm publish --dry-run

lint l:
	npx eslint .
