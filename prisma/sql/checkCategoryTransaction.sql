-- @param {BigInt} $1:categoryId
SELECT COUNT(*)::bigint as total
FROM transactions
WHERE category_id = $1;