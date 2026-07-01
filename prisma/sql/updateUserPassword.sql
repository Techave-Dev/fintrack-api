-- @param {BigInt} $1:id
-- @param {String} $2:password
UPDATE users
SET password = $2
WHERE id = $1;
