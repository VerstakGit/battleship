package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// FinishedGamesByUserKeyPrefix is the prefix to retrieve all FinishedGamesByUser
	FinishedGamesByUserKeyPrefix = "FinishedGamesByUser/value/"
)

// FinishedGamesByUserKey returns the store key to retrieve a FinishedGamesByUser from the index fields
func FinishedGamesByUserKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
