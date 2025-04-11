package main

import (
	"bufio"
	"fmt"
	"os"
)

func sort_countries(){
	f, err := os.Open("utils/countries.txt")
	if err != nil{
		fmt.Println(err)
	}
	defer f.Close()

	europe := []string{}
	africa := []string{}
	asia := []string{}
	south_america := []string{}
	north_america := []string{}
	oceania := []string{}
	other := []string{}

	scanner := bufio.NewScanner(f)
	for scanner.Scan() {
		country := scanner.Text()

		var i int
		fmt.Print(country, ":")
		fmt.Scan(&i)
	
		switch i{
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

	fmt.Println(europe)
	fmt.Println(africa)
	fmt.Println(asia)
	fmt.Println(south_america)
	fmt.Println(north_america)
	fmt.Println(oceania)
	fmt.Println(other)

}

func main(){
	sort_countries()
}