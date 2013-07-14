
/**
 * Module dependencies.
 */

var o = require('jquery')
  , bind = require('bind')
  , each = require('each')
  , template = require('./template');
require('./modal.js');

/**
 * Module exports.
 */

module.exports = function(options){
  var el = o(template)
    , methods
    , wrapper = {};
  render(el, options);

  // map the jquery methods to real methods

  methods = [
    'toggle',
    'show',
    'hide'
  ];
  each(methods, function(method){
    wrapper[method] = function(){
      console.log(el.modal);
      bind(el, el.modal, method).apply(null, arguments);
    };
  });
  wrapper.__proto__ = el;
  return wrapper;
};

/**
 * Render the element.
 */

function render(el, options) {
  var title = options.title || ''
    , msg = options.message || '';
  el.find('h3').text(title);
  if (typeof msg === 'string') el.find('p').text(msg);
  else el.find('p').replaceWith(msg.el || msg);
  el.appendTo(document.body);
  delete options.title;
  delete options.message;
  el.modal(options);
}
