-- @param {BigInt} $1:id
DELETE FROM transactions
WHERE id = $1;