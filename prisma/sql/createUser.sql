-- @param {String} $1:email
-- @param {String} $2:name
-- @param {String} $3:password
INSERT INTO users (email, name, password, created_at)
VALUES ($1, $2, $3, NOW())
RETURNING id, email, name, created_at;