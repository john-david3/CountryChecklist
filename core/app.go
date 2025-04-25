package core

import "log/slog"

func Run() {
	_, err := FetchMenu()
	if err != nil {
		slog.Error("could not fetch countries", "error", err)
	}

	// TODO: change _ to countryMap
}