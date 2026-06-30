-- @param {BigInt} $1:userId
-- @param {String} $2:name
-- @param {String} $3:type
INSERT INTO categories (user_id, name, type, created_at)
VALUES ($1, $2, $3, NOW())
RETURNING id, name, type, user_id, created_at;