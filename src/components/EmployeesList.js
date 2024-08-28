export const EmployeesList = ({ employees, roleLabels }) => {
  return (
    <ol>
      {employees.map((employee) => (
        <li key={employee.id}>
          <div style={{ display: "flex", gap: "10px" }}>
            <div>Nazwa: {employee.name}</div>
            <div>Poziom: {employee.level.toUpperCase()}</div>
            <div>Wiek: {employee.age}</div>
            <div>Rola: {roleLabels[employee.position]}</div>
            <div>Płeć: {employee.gender}</div>
            <div>E-mail: {employee.email}</div>
            <div>Telefon: {employee.phone}</div>
          </div>
        </li>
      ))}
    </ol>
  );
};
