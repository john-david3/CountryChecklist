package core

import (
	"encoding/json"
	"log/slog"
	"net/http"
)

func Run() {
	countryMap, err := FetchMenu()
	if err != nil {
		slog.Error("could not fetch countries", "error", err)
	}

	// Send countryMap to the frontend
	http.HandleFunc("/api/countries", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Content-Type", "application/json")
		if err := json.NewEncoder(w).Encode(countryMap); err != nil {
			slog.Error("could not encode countryMap", "error", err)
			http.Error(w, "internal server error", http.StatusInternalServerError)
		}
	})

	slog.Info("Server running on http://localhost:8080")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		slog.Error("server error", "error", err)
	}
}