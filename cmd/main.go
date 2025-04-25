package main

import (
	"country-checklist/core"
	"country-checklist/utils"
)

func main(){
	core.Run()
	utils.SortCountries()
}