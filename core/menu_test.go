package core

import (
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

func TestFetchMenu(t *testing.T){
	t.Run("Countries are fetched correctly", func(t *testing.T) {
		result, err := FetchMenu()
		
		require.NoError(t, err)
		assert.NotNil(t, result)
	})
}
