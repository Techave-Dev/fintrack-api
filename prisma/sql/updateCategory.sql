-- @param {BigInt} $1:id
-- @param {String} $2:name
-- @param {String} $3:type
UPDATE categories
SET name = $2, type = $3
WHERE id = $1
RETURNING id, name, type, user_id, created_at;