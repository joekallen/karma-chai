(function(window) {
  window.should = window.chai.should();
  window.assert = window.chai.expect;
  window.Assert = window.chai.assert;

  window.spy = function(){
    var sinon = window.sinon;
    sinon.spy.apply(sinon,arguments)
  };

  window.stub = function(){
    var sinon = window.sinon;
    sinon.stub.apply(sinon,arguments)
  };
})(window);