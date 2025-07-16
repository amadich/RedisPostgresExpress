const express = require('express');
const { Pool } = require('pg');
const { createClient } = require('redis');

const app = express();
const port = 3000;

// PostgreSQL connection pool
const pool = new Pool({
  user: process.env.PGUSER || 'postgres',
  host: process.env.PGHOST || 'localhost',
  database: process.env.PGDATABASE || 'backpack',
  password: process.env.PGPASSWORD || 'root',
  port: parseInt(process.env.PGPORT, 10) || 5431,
});

// Redis client
const redisClient = createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379',
});

redisClient.on('error', (err) => {
  console.error('Redis Client Error', err);
});

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/cartoons', async (req, res) => {
  try {
    const cachedData = await redisClient.get('cartoons');
    if (cachedData) {
      console.log('Cache hit');
      return res.json(JSON.parse(cachedData));
    }

    const result = await pool.query('SELECT * FROM "cartoons"');
    const data = result.rows;

    await redisClient.set('cartoons', JSON.stringify(data), {
      EX: 3600,
    });

    console.log('Cache miss');
    res.json(data);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).send('Internal Server Error');
  }
});

async function startServer() {
  try {
    await redisClient.connect();
    console.log('Connected to Redis');

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (err) {
    console.error('Error starting server:', err);
  }
}

startServer();
