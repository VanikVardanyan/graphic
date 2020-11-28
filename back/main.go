package main

import (
	"fmt"
	"net/http"
)

func main() {
	fmt.Println("start listening on :8080")
	http.ListenAndServe(":8080", http.HandlerFunc(handleD3Data))
}

func handleD3Data(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "*")
	w.Header().Set("Access-Control-Allow-Headers", "*")

	if r.Method == "OPTIONS" {
		return
	}

	w.Header().Add("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write([]byte(`{
		"v1": [
		  {"x": "P1", "value": "90.54"},
		  {"x": "P2", "value": "104.19"},
		  {"x": "P3", "value": "150.67"},
		  {"x": "P4", "value": "120.43"},
		  {"x": "P5", "value": "200.34"},
		  {"x": "P6", "value": "167.23"},
		  {"x": "P7", "value": "181.87"},
		  {"x": "P8", "value": "356.3"}
		],
		"v2": [
		  {"x": "P1", "value": "45.01"},
		  {"x": "P2", "value": "132.98"},
		  {"x": "P3", "value": "632.51"},
		  {"x": "P4", "value": "234.12"},
		  {"x": "P5", "value": "78.43"},
		  {"x": "P6", "value": "23.76"},
		  {"x": "P7", "value": "183.65"},
		  {"x": "P8", "value": "165.33"}
		]
	  }`))

}
