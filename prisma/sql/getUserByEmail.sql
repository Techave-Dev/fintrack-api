-- @param {String} $1:email
SELECT
  id,
  email,
  name,
  password,
  created_at 
FROM users
WHERE email = $1
LIMIT 1