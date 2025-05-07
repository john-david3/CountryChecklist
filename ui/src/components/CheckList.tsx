import { useEffect, useState } from "react";

function CheckList(){
    const [countries, setCountries] = useState({});
    const continents = ["Europe", "Asia", "Africa", "South America", "North America", "Oceania", "Other"];

    useEffect(() => {
        fetch("http://localhost:8080/api/countries")
            .then((res) => res.json())
            .then((data) => setCountries(data))
            .catch((err) => console.error("Failed to fetch countries", err));
    }, []);

    useEffect(() => {
        const tabs = document.querySelectorAll("[tab-type]");
        const tabContents = document.querySelectorAll("[data-tab-content]");
    
        const handleClick = (e) => {
          const targetId = e.currentTarget.getAttribute("tab-type");
          const target = document.getElementById(targetId);
    
          tabs.forEach(t => t.classList.remove("active"));
          tabContents.forEach(c => c.classList.remove("active"));
    
          e.currentTarget.classList.add("active");
          if (target) target.classList.add("active");
        };
    
        tabs.forEach(tab => tab.addEventListener("click", handleClick));
    
        return () => {
          tabs.forEach(tab => tab.removeEventListener("click", handleClick));
        };
      }, []);

    return (
        <section>
            <h1>Check List</h1>
            <ul>
                {Object.entries(countries).map(([code, name]) => (
                    <li key={code}>{name}</li>
                ))}
            </ul>

            <nav>
                <ul className="tabs">
                    {continents.map((continent) => (
                        <li tab-type={continent} className={`tab ${continent === "Europe" ? "active" : ""}`} key={continent}>
                            {continent}
                        </li>
                    ))}
                </ul>
            </nav>

            <section>
                {continents.map((continent) => (
                    <section id={continent} data-tab-content className={continent === "Europe" ? "active" : ""} key={continent}>
                        <h2>{continent}</h2>
                    </section>
                ))}
            </section>
        </section>
    );
}

export default CheckList;
