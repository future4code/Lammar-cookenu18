CREATE TABLE IF NOT EXISTS cookenu_users(
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS cookenu_recipes(
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    author_id VARCHAR(255),
    FOREIGN KEY(author_id) REFERENCES cookenu_users(id)
);

SELECT * FROM cookenu_users;

SELECT * FROM cookenu_recipes;
