package database

import (
	"database/sql"
	"log"

	_ "github.com/mattn/go-sqlite3"
)

var db *sql.DB

func CreateConnection(){
	var err error

	db, err = sql.Open("sqlite3", "database/app.db")
	if err != nil{
		log.Fatal(err)
	}
}

func Execute(query string, args ...interface{}){
	if db == nil{
		log.Fatal("DB needs to be initialised before executed on")
	}

	_, err := db.Exec(query, args...)
	if err != nil{
		log.Fatal(err)
	}
}

func Fetch(query string, args ...interface{}) *sql.Rows{
	if db == nil{
		log.Fatal("DB needs to be initialised before queried on")
	}

	rows, err := db.Query(query, args...)
	if err != nil{
		log.Fatal(err)
	}
	defer rows.Close()

	return rows
}


func CloseConnection(){
	db.Close()
}
