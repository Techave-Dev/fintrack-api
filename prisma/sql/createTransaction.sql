-- @param {BigInt} $1:userId
-- @param {BigInt} $2:categoryId
-- @param {Decimal} $3:amount
-- @param {String} $4:type
-- @param {DateTime} $5:date
-- @param {String} $6:description
INSERT INTO transactions (user_id, category_id, amount, type, date, description, created_at)
VALUES ($1, $2, $3, $4, $5, $6, NOW())
RETURNING id, user_id, category_id, amount::text, type, date, description, created_at;