package utils

import (
	"bufio"
	"fmt"
	"log/slog"
	"os"

	"country-checklist/database"
)

func SortCountries() {
	f, err := os.Open("utils/countries.txt")
	if err != nil {
		fmt.Println(err)
	}
	defer f.Close()

	europe := []string{"europe"}
	africa := []string{"africa"}
	asia := []string{"asia"}
	south_america := []string{"south america"}
	north_america := []string{"north america"}
	oceania := []string{"oceania"}
	other := []string{"other"}

	scanner := bufio.NewScanner(f)
	for scanner.Scan() {
		country := scanner.Text()

		var i int
		fmt.Print(country, ":")
		fmt.Scan(&i)

		switch i {
		case 1:
			europe = append(europe, country)
		case 2:
			africa = append(africa, country)
		case 3:
			asia = append(asia, country)
		case 4:
			south_america = append(south_america, country)
		case 5:
			north_america = append(north_america, country)
		case 6:
			oceania = append(oceania, country)
		case 7:
			other = append(other, country)
		}
	}

	// Add all the continents to a matrix
	continents := make([][]string, 7)
	continents[0] = europe
	continents[1] = africa
	continents[2] = asia
	continents[3] = south_america
	continents[4] = north_america
	continents[5] = oceania
	continents[6] = other

	err = database.CreateConnection()
	if err != nil {
		slog.Error("database connection could not be created")
		return
	}
	defer database.CloseConnection()

	for _, continent := range continents {
		for j := 1; j < len(continent); j++ {
			err = database.Execute("INSERT INTO countries(country, continent) VALUES (?, ?);",
				continent[j], continent[0])

			if err != nil {
				slog.Error("error inserting country into database", "error", err)
			}
		}
	}

}
