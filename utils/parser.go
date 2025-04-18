package utils

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
)

type Topology struct {
	Type string
	Objects map[string]Objects
}

type Objects struct {
	Type string
	Geometries []Geometry
}

type Geometry struct {
	Type string
	Arcs json.RawMessage
	ID string
	Properties struct {
		Name string
	}
}

func ParseJson() {
	resp, err := http.Get("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json")
	if err != nil {
		fmt.Println(err)
		return
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		fmt.Println(err)
		return
	}

	var topology Topology

	err = json.Unmarshal(body, &topology)
	if err != nil {
		fmt.Println(err)
		return
	}

	f, err := os.OpenFile("utils/countries.txt", os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)
	if err != nil{
		fmt.Println(err)
	}
	defer f.Close()

	countries := topology.Objects["countries"].Geometries
	for _, country := range countries {
		_, err := f.WriteString(country.Properties.Name + "\n")
		if err != nil{
			fmt.Println(err)
		}
		fmt.Println("Country Name:", country.Properties.Name)
	}
}
