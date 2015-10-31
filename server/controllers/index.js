var models = require('../models');
var utils = require('../utils');

module.exports = {
  messages: {
    get: function (req, res) {

      console.log("7:Received GET");
      utils.sendResponse(res, 'our response');


    }, // a function which handles a get request for all messages
    post: function (req, res) {

      console.log("15", req.body);

      // var data = "";
      // req.on('data', function(chunk) {
      //   data += chunk;
      // });
      // req.on('end', function() {
      //   console.log('line 18: ', data);
      // });

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {



      //   utils.collectData(request, function(message) {
      //     message.objectId = ++objectIdCounter;
      //     messages.push(message);
      //     utils.sendResponse(response, {objectId: message.objectId}, 201);
      //   });

    }
  }
};

