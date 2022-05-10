package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// ActiveGamesByUserKeyPrefix is the prefix to retrieve all ActiveGamesByUser
	ActiveGamesByUserKeyPrefix = "ActiveGamesByUser/value/"
)

// ActiveGamesByUserKey returns the store key to retrieve a ActiveGamesByUser from the index fields
func ActiveGamesByUserKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
