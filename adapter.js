var should;

(function(window) {
  window.should = window.chai.should();
  window.assert = window.chai.expect;
  window.Assert = window.chai.assert;
})(window);