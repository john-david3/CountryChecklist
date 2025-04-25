package core

import (
	"country-checklist/database"
	"log/slog"
)

func FetchMenu() (map[string][]string, error) {
	countryMap := make(map[string][]string)
	continents := [7]string{"europe",
		"africa",
		"asia",
		"south america",
		"north america",
		"oceania",
		"other"}

	err := database.CreateConnection()
	if err != nil {
		slog.Error("database connection could not be created", "error", err)
		return nil, err
	}
	defer database.CloseConnection()

	for _, continent := range continents {
		v, err := database.Fetch("SELECT country FROM countries WHERE continent = ?;", continent)
		if err != nil {
			slog.Error("error fetching country from database", "error", err)
		}

		countries, err := database.DBRowToStringList(v)
		if err != nil {
			slog.Error("Error converting row to string", "error", err)
			return nil, err
		}
		countryMap[continent] = countries

	}

	return countryMap, nil
}
