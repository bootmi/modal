
build: components index.js modal.css template.js
	@component build --dev

components: component.json
	@component install --dev

modal.css: modal.less variables.less mixins.less
	@lessc modal.less >modal.css

template.js: template.html
	@component convert $<

clean:
	rm -fr build components modal.css template.js

test: build
	# open test/index.html in your browser

.PHONY: clean test
