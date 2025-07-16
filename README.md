# Node.js + Express + PostgreSQL + Redis 🐘🚀🔥

A Dockerized REST API using:
- **Express** for the web server
- **PostgreSQL** for data storage
- **Redis** for caching

<img width="1060" height="499" alt="image" src="https://github.com/user-attachments/assets/a69ab03b-b13d-402d-b9a1-973de9f36265" />

---

## 📦 Features

- `/cartoons` route with Redis caching
- Docker + Docker Compose setup
- Persistent PostgreSQL and Redis volumes
- Environment-based configuration

---

## 🐳 Run with Docker

```bash
docker-compose up --build
````

Visit: [http://localhost:3000/cartoons](http://localhost:3000/cartoons)

---

## 🗃 PostgreSQL Table

After containers are running:

```sql
CREATE TABLE cartoons (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  release_year INT,
  genre TEXT,
  creator TEXT
);
```

Add sample data as needed.

---

## 📁 Project Structure

```
.
├── Dockerfile
├── docker-compose.yml
├── package.json
├── server.js
└── README.md
```

---

## ⚙️ Environment Variables (via docker-compose)

```env
PGUSER=postgres
PGPASSWORD=root
PGHOST=postgres
PGDATABASE=backpack
PGPORT=5432
REDIS_URL=redis://redis:6379
```
<img width="900" height="600" alt="image" src="https://github.com/user-attachments/assets/d71e0811-6a14-4c0d-ba6f-cd74ad4628e2" />

---
