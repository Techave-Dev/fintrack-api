-- @param {BigInt} $1:id
SELECT id, user_id, category_id, amount::text, type, date, description, created_at
FROM transactions
WHERE id = $1;