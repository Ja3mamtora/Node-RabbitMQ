const amqp = require('amqplib');

async function subscribeToNews(category) {
    const connection = await amqp.connect('amqp://localhost:5672');
    const channel = await connection.createChannel();
    const exchange = 'news_exchange';
    const queue = `${category}`;

    await channel.assertExchange(exchange, 'direct', { durable: false });
    await channel.assertQueue(queue, { exclusive: true });
    channel.bindQueue(queue, exchange, category);

    channel.consume(queue, (message) => {
        const newsArticle = JSON.parse(message.content.toString());
        console.log('Received news article:', newsArticle);
        channel.ack(message); // Acknowledge the message
    });
}

// Example of subscribing to a news category
const category = 'politics';
subscribeToNews(category);
