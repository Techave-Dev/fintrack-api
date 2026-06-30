-- @param {BigInt} $1:id
-- @param {BigInt} $2:categoryId
-- @param {Decimal} $3:amount
-- @param {String} $4:type
-- @param {DateTime} $5:date
-- @param {String} $6:description
UPDATE transactions
SET category_id = $2, amount = $3, type = $4, date = $5, description = $6
WHERE id = $1
RETURNING id, user_id, category_id, amount::text, type, date, description, created_at;