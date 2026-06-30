-- @param {BigInt} $1:id
SELECT id, email, name, password, created_at
FROM users
WHERE id = $1
LIMIT 1;
