package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestGoApi(t *testing.T) {
	result := GetHello()
	assert.Equal(t, result, "Hello, from christle!")
}
