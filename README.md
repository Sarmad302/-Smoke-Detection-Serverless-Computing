# SmokeMonitoring

Smoke detectors are particularly useful in those situations where the fire is likely to generate a substantial amount of smoke before temperature changes are sufficient to actuate a heat detection system and before a fire eye will detect a flame. Smoke detectors use a photoelectric beam between a receiving element and light source. If smoke obscures the beam an alarm is sounded. There are also refraction-type models that measure the light changes that occur within the instrument when smoke particles enter it.


SmokeMonitoring is a simple function made for [Nuclio](https://nuclio.io/), an open source and managed serverless platform that we can run on our home server. It uses [RabbitMQ](https://www.rabbitmq.com/) as broker to share MQTT messages around. It also consist of Mobile Application  [MQTIZER](https://play.google.com/store/apps/details?id=com.sanyamarya.mqtizermqtt_client&hl=en&gl=US) to check Mqtt messages on Mobile Application


This is project for the Serverless Computing class at [Università degli Studi di Salerno](https://www.unisa.it/), I used Nuclio to simulate a fully fledged serverless infrastructure.

### Prerequisite

-   [Docker](https://www.docker.com/)
-   [Nuclio](https://nuclio.io/)
- [RabitMQ](https://www.rabbitmq.com/)
- [Arduino IDE](https://www.arduino.cc/en/software)
- [MQTIZER](%28https://play.google.com/store/apps/details?id=com.sanyamarya.mqtizermqtt_client&hl=en&gl=US%29)

### How to use it

First of all, clone this repository, then you need to start a Docker to start up a docker instance of Nuclio, with the command:  
  
`$ sudo docker run -p 8070:8070 -v /var/run/docker.sock:/var/run/docker.sock -v /tmp:/tmp nuclio/dashboard:stable-amd64`  
  
And to start up a docker instance of RabbitMQ, with the command:  
  
`$ sudo docker run -p 9000:15672 -p 1883:1883 -p 5672:5672 cyrilix/rabbitmq-mqtt`

MQTIZER is a mobile MQTT client that can connect to any broker which shares the network with your phone, and to any broker on the cloud as well
To show Message on Mobile App download Mobile App MQTIZER than Add the Broker on the app having same Ip  as RabitMQ.  Now you will be able to see messages on Mobile Application



### Technologies used


-   [Docker](https://www.docker.com/)
-   [Nuclio](https://nuclio.io/)
- [RabitMQ](https://www.rabbitmq.com/)
- [Arduino IDE](https://www.arduino.cc/en/software)
- [MQTIZER](%28https://play.google.com/store/apps/details?id=com.sanyamarya.mqtizermqtt_client&hl=en&gl=US%29)
### Libraries  used
[ESP8266WiFi](.)

The ESP8266WiFi library provides a wide collection of C++ methods (functions) and properties to configure and operate an ESP8266 module in station and / or soft access point mode.

[Pubsub Client](.)

A client library for MQTT messaging. MQTT is a lightweight messaging protocol ideal for small devices. This library allows you to send and receive MQTT messages
