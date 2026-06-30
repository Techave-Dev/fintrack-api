-- @param {String} $1:token
-- @param {BigInt} $2:userId
-- @param {DateTime} $3:expiresAt
INSERT INTO refresh_tokens (token, user_id, expires_at, created_at)
VALUES ($1, $2, $3, NOW())
RETURNING id, token, user_id, expires_at, created_at;