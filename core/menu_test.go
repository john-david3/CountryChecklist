package core

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestFetchMenu(t *testing.T){
	t.Run("Expected Result is Correct", func(t *testing.T) {
		result, err := FetchMenu()
		
		assert.Nil(t, err)
		assert.NotNil(t, result)
	})
}