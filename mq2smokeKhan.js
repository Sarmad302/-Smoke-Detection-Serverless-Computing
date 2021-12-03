const amqp = require('amqplib/callback_api');

// Step 1: Creating the Connection
var func_name = "sarmad";
function send_feedback(message){
amqp.connect('amqp://192.168.1.163', (connError, connection) => {
    if (connError) {
        throw connError;
    }
    // Step 2: Creating Channel
    connection.createChannel((channelError, channel) => {
        if (channelError) {
            throw channelError;
        }
        // Step 3: Assertion of Queue
        const mq2queue = 'mq2smoke'
        channel.assertQueue(mq2queue);
        // Step 4: Sending and Receiving Messages
       channel.sendToQueue(mq2queue, Buffer.from(message));
        console.log(`Message send ${mq2queue}`);
    })
        })}
       
function bin2string(array){
          var result = "";
          for(var i = 0; i < array.length; ++i){
            result+= (String.fromCharCode(array[i]));
          }
          return result;
        }

exports.handler = function(context, event) {
            var initiate = JSON.parse(JSON.stringify(event));
            var trans = bin2string(initiate.body.data);

            context.callback("feedback "+trans);

            console.log("TRIGGER "+trans);
            send_feedback("mq2smoke: "+func_name+" received "+trans);
        };
