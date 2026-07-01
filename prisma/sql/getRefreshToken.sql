-- @param {String} $1:token
SELECT
  id,
  token,
  user_id,
  expires_at,
  revoked,
  created_at
FROM refresh_tokens
WHERE token = $1 AND revoked = false
LIMIT 1;