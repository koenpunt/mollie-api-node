// Generated by CoffeeScript 1.6.3
/*
  Example 5 - How to retrieve your payments history.
*/


(function() {
  var Mollie, example, _;

  Mollie = require("../lib/mollie");

  _ = require("underscore");

  example = (function() {
    function example(request, response) {
      /*
        Initialize the Mollie API library with your API key.
        See: https://www.mollie.nl/beheer/account/profielen/
      */

      var mollie;
      mollie = new Mollie.API.Client;
      mollie.setApiKey("test_b93kfaAsnngIAT3NysojhYvKEJ5YbP");
      /*
        Get the all payments for this API key ordered by newest.
      */

      mollie.payments.all(function(payments) {
        var payment, _i, _len;
        if (payments.error) {
          console.error(payments.error);
          return response.end();
        }
        response.writeHead(200, {
          "Content-Type": "text/html; charset=utf-8"
        });
        for (_i = 0, _len = payments.length; _i < _len; _i++) {
          payment = payments[_i];
          response.write("€ " + (_.escape(payment.amount)) + ", status: " + (_.escape(payment.status)) + " <br>");
        }
        return response.end();
      });
    }

    return example;

  })();

  module.exports = example;

}).call(this);

/*
//@ sourceMappingURL=5-payments-history.map
*/
