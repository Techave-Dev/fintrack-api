-- @param {BigInt} $1:userId
-- @param {String} $2:type
-- @param {BigInt} $3:categoryId
-- @param {String} $4:fromDate
-- @param {String} $5:toDate
-- @param {Int} $6:limit
-- @param {Int} $7:offset
SELECT id, user_id, category_id, amount::text, type, date, description, created_at
FROM transactions
WHERE user_id = $1
  AND ($2 = '' OR type = $2)
  AND ($3 = 0 OR category_id = $3)
  AND ($4 = '' OR date >= TO_TIMESTAMP($4, 'YYYY-MM-DD'))
  AND ($5 = '' OR date <= TO_TIMESTAMP($5, 'YYYY-MM-DD'))
ORDER BY date DESC, created_at DESC
LIMIT $6 OFFSET $7;