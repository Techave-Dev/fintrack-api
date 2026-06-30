-- @param {BigInt} $1:userId
-- @param {String} $2:type
SELECT 
  id,
  name,
  type, 
  user_id,
  created_at
FROM categories
WHERE user_id = $1 AND ($2 = '' OR type = $2)
ORDER BY created_at DESC;