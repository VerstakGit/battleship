package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// ExistingGamesKeyPrefix is the prefix to retrieve all ExistingGames
	ExistingGamesKeyPrefix = "ExistingGames/value/"
)

// ExistingGamesKey returns the store key to retrieve a ExistingGames from the index fields
func ExistingGamesKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
