/**
 * Learnir Javascript
 * Welcome to the Learnir Javascript sdk, get your content right in the browser anywhere and everywhere.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.LearnirJavascript);
  }
}(this, function(expect, LearnirJavascript) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new LearnirJavascript.Consumer();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Consumer', function() {
    it('should create an instance of Consumer', function() {
      // uncomment below and update the code to test Consumer
      //var instance = new LearnirJavascript.Consumer();
      //expect(instance).to.be.a(LearnirJavascript.Consumer);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new LearnirJavascript.Consumer();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new LearnirJavascript.Consumer();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new LearnirJavascript.Consumer();
      //expect(instance).to.be();
    });

  });

}));
