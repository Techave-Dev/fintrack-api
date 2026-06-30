-- @param {BigInt} $1:id
-- @param {String} $2:name
-- @param {String} $3:email
UPDATE users
SET name = $2, email = $3
WHERE id = $1
RETURNING id, email, name, created_at;
