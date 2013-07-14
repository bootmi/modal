
build: components index.js modal.css
	@component build --dev

components: component.json
	@component install --dev

modal.css: modal.less variables.less mixins.less
	@lessc modal.less >modal.css

clean:
	rm -fr build components modal.css

test: build
	# open test/index.html in your browser

.PHONY: clean test
