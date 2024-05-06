# Node-RabbitMQ

This repository contains Node.js examples for various messaging patterns using RabbitMQ.

# Getting Started

## Prerequisites

- [Node.js](https://nodejs.org) installed on your machine
- [Docker](https://www.docker.com/) installed on your machine

## Cloning the Repository

```bash
git clone https://github.com/Ja3mamtora/Node-RabbitMQ.git
cd Node-RabbitMQ
```
## Setting Up RabbitMQ with Docker
```bash
docker run -d --name my-rabbit -p 5672:5672 rabbitmq
```
## Installing Dependencies
```bash
npm install
```

## Running the Examples
- ### Producer-Consumer Pattern
Starting the Producer
```bash
cd producer-consumer
node producer.js
```

Starting the Consumer
```bash
cd producer-consumer
node consumer.js
```

### Publisher-Subscriber Pattern
Starting the Publisher
```bash
cd publisher-subscriber
node publisher.js
```

Starting the Subscriber
```bash
cd producer-subscriber
node subscriber.js
```
