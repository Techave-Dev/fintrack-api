-- @param {BigInt} $1:userId
-- @param {String} $2:type
-- @param {BigInt} $3:categoryId
-- @param {String} $4:fromDate
-- @param {String} $5:toDate
SELECT COUNT(*)::bigint as total
FROM transactions
WHERE user_id = $1
  AND ($2 = '' OR type = $2)
  AND ($3 = 0 OR category_id = $3)
  AND ($4 = '' OR date >= TO_TIMESTAMP($4, 'YYYY-MM-DD'))
  AND ($5 = '' OR date <= TO_TIMESTAMP($5, 'YYYY-MM-DD'));