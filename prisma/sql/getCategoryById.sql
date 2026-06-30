-- @param {BigInt} $1:id
SELECT 
  id,
  name,
  type,
  user_id,
  created_at
FROM categories
WHERE id = $1;