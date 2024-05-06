const amqp = require('amqplib');

async function publishNews(category, newsArticle) {
    const connection = await amqp.connect('amqp://localhost:5672');
    const channel = await connection.createChannel();
    const exchange = 'news_exchange';

    await channel.assertExchange(exchange, 'direct', { durable: false });
    channel.publish(exchange, category, Buffer.from(JSON.stringify(newsArticle)));

    console.log('News published successfully');
    setTimeout(() => {
        connection.close();
    }, 500);
}

// Example of publishing a news article
const newsArticle = { title: 'Breaking News!', content: 'Something important happened' };
const category = 'politics';
publishNews(category, newsArticle);
