import { useEffect, useState } from "react";

function CheckList(){
    const [countries, setCountries] = useState({});

    useEffect(() => {
        fetch("http://localhost:8080/api/countries")
            .then((res) => res.json())
            .then((data) => setCountries(data))
            .catch((err) => console.error("Failed to fetch countries", err));
    }, []);

    return (
        <div>
            <h1>Check List</h1>
            <ul>
                {Object.entries(countries).map(([code, name]) => (
                    <li key={code}>{name}</li>
                ))}
            </ul>
        </div>
    );
}

export default CheckList;