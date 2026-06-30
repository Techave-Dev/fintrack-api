-- @param {BigInt} $1:userId
-- @param {String} $2:fromDate
-- @param {String} $3:toDate
SELECT 
  c.id,
  c.name,
  c.type,
  SUM(t.amount)::text as total
FROM transactions t
JOIN categories c ON t.category_id = c.id
WHERE t.user_id = $1
  AND ($2 = '' OR date >= TO_TIMESTAMP($2, 'YYYY-MM-DD'))
  AND ($3 = '' OR date <= TO_TIMESTAMP($3, 'YYYY-MM-DD'))
GROUP BY c.id, c.name, c.type
ORDER BY total DESC;