
build: components index.js template.js
	@component build --dev

components: component.json
	@component install --dev

template.js: template.html
	@component convert $<

clean:
	rm -fr build components template.js

test: build
	# open test/index.html in your browser

.PHONY: clean test
