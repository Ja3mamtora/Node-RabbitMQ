const amqp = require('amqplib');

async function sendFaultAlert(faultMessage) {
    const connection = await amqp.connect('amqp://localhost:5672');
    const channel = await connection.createChannel();
    const exchange = 'fault_exchange';

    await channel.assertExchange(exchange, 'fanout', { durable: false });
    channel.publish(exchange, '', Buffer.from(faultMessage));

    console.log('Fault alert sent');
    setTimeout(() => {
        connection.close();
    }, 500);
}

// Example of sending a fault alert
const faultMessage = 'Machine A has encountered a fault';
sendFaultAlert(faultMessage);
