import "./styles.css";
import data from "./data.json";
import { useState } from "react";
import { EmployeesList } from "./components/EmployeesList";

const roleLabels = {
  backend_developer: "Backend developer",
  frontend_developer: "Frontend developer",
  project_manager: "Project Manager",
};

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedSections, setExpandedSections] = useState({});
  const roles = Object.keys(roleLabels).sort();
  
  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const toggleSection = (role) => {
    setExpandedSections((prev) => ({
      ...prev,
      [role]: !prev[role],
    }));
  };

  const filteredData = data.filter((employee) =>
    ["name", "email", "phone"].some((key) =>
      employee[key].toLowerCase().includes(searchTerm)
    )
  );

  return (
    <div className="App">
      <h2>Lista pracowników</h2>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearch}
      />
      {roles.map((role) => {
        const employees = filteredData
          .filter((employee) => employee.position === role)
          .sort((a, b) => a.name.localeCompare(b.name));

        return (
          <div key={role}>
            <h3 onClick={() => toggleSection(role)}>{roleLabels[role]}</h3>
            {expandedSections[role] && (
              <EmployeesList employees={employees} roleLabels={roleLabels} />
            )}
          </div>
        );
      })}
    </div>
  );
}
