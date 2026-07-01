-- @param {BigInt} $1:user_id
UPDATE refresh_tokens
SET revoked = true
WHERE user_id = $1 AND revoked = false;
