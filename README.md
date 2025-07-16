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

```sql
INSERT INTO cartoons (name, release_year, genre, creator) VALUES
('SpongeBob SquarePants', 1999, 'Comedy', 'Stephen Hillenburg'),
('Avatar: The Last Airbender', 2005, 'Action/Adventure', 'Michael Dante DiMartino, Bryan Konietzko'),
('Rugrats', 1991, 'Comedy', 'Arlene Klasky, Gábor Csupó, Paul Germain'),
('The Fairly OddParents', 2001, 'Comedy', 'Butch Hartman'),
('Danny Phantom', 2004, 'Action/Adventure', 'Butch Hartman'),
('Hey Arnold!', 1996, 'Comedy', 'Craig Bartlett'),
('Jimmy Neutron: Boy Genius', 2002, 'Comedy', 'John A. Davis'),
('CatDog', 1998, 'Comedy', 'Peter Hannan'),
('Rocket Power', 1999, 'Action/Adventure', 'Arlene Klasky, Gábor Csupó, Paul Germain'),
('The Wild Thornberrys', 1998, 'Adventure', 'Arlene Klasky, Gábor Csupó, Steve Pepoon');
```

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
