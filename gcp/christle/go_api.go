package main

import (
	"fmt"
	"net/http"
)

// HelloGet is an HTTP Cloud Function.
func GoApi(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, GetHello())
}

func GetHello() string {
	return "Hello, from christle!"
}
