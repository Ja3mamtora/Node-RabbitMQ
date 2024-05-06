const amqp = require('amqplib');

async function listenForFaultAlerts() {
    const connection = await amqp.connect('amqp://localhost:5672');
    const channel = await connection.createChannel();
    const exchange = 'fault_exchange';
    const queue = 'component_queue';

    await channel.assertExchange(exchange, 'fanout', { durable: false });
    await channel.assertQueue(queue, { exclusive: true });
    channel.bindQueue(queue, exchange, '');

    channel.consume(queue, (message) => {
        const faultMessage = message.content.toString();
        console.log('Received fault alert:', faultMessage);
        channel.ack(message); // Acknowledge the message
    });

}

// Example of a component listening for fault alerts
listenForFaultAlerts();
