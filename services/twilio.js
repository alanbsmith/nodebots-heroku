var client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

var twilio = function(name) {
  client.messages.create({
    from: "+13343700424",
    to: "+17203575221",
    body: name + " just RSVP'd!"
  }, function(err, message) { 
      console.log(message.sid);
    });
}

module.exports = twilio;