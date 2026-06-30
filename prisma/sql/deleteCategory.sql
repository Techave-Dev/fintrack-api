-- @param {BigInt} $1:id
DELETE FROM categories
WHERE id = $1;