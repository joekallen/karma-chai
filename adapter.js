(function(window) {
  window.should = window.chai.should();
  window.assert = window.chai.expect;
  window.Assert = window.chai.assert;

  var createWindowWrapper = function createWindowWrapper(type) {
    window[type] = function () {
      var sinon = window.sinon;
      sinon[type].apply(sinon, arguments)
    };
  };

  createWindowWrapper('spy');
  createWindowWrapper('stub');
  createWindowWrapper('mock');
})(window);