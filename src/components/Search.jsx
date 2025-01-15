import React, { useState } from "react";

const Search = () => {
  const [formData, setFormData] = useState({ district: "", bloodType: "", location: "" });
  const [tableData, setTableData] = useState([]);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { bloodType, location, district } = formData;

    // Simulating fetched data
    const fetchedData = [
      {
        id: 1,
        hospital: "City Hospital",
        bloodAvailable: "A+",
        issueDate: "2025-01-10",
        district: "Asansol",
      },
      {
        id: 2,
        hospital: "Central Clinic",
        bloodAvailable: "O-",
        issueDate: "2025-01-12",
        district: "Kolkata",
      },
      {
        id: 3,
        hospital: "HealthCare Center",
        bloodAvailable: "B+",
        issueDate: "2025-01-13",
        district: "Asansol",
      },
    ];

    // Filter fetched data based on form input
    const filteredData = fetchedData.filter((data) => {
      const matchesBloodType = bloodType ? data.bloodAvailable.toLowerCase() === bloodType.toLowerCase() : true;
      const matchesLocation = location ? data.hospital.toLowerCase().includes(location.toLowerCase()) : true;
      const matchesDistrict = district ? data.district.toLowerCase().includes(district.toLowerCase()) : true;

      return matchesBloodType && matchesLocation && matchesDistrict;
    });

    setTableData(filteredData);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Blood Availability Search</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px", display: "inline-block", textAlign: "left", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
        <label>
          District:
          <input
            type="text"
            name="district"
            value={formData.district}
            onChange={handleInputChange}
            placeholder="Asansol"
            style={{ margin: "0 10px", padding: "8px", borderRadius: "4px" }}
          />
        </label>
        <br />
        <label>
          Blood Type:
          <input
            type="text"
            name="bloodType"
            value={formData.bloodType}
            onChange={handleInputChange}
            placeholder="e.g., A+, B-"
            style={{ margin: "0 10px", padding: "8px", borderRadius: "4px" }}
          />
        </label>
        <br />
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            placeholder="e.g., City Hospital"
            style={{ margin: "0 10px", padding: "8px", borderRadius: "4px" }}
          />
        </label>
        <br />
        <button type="submit" style={{ marginTop: "10px", padding: "10px 20px", backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}>Search</button>
      </form>

      {/* Table */}
      {tableData.length > 0 ? (
        <table
          style={{
            marginTop: "30px",
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Serial No.</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Hospital Name</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Blood Availability</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Issue Date</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={data.id}>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{index + 1}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{data.hospital}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{data.bloodAvailable}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{data.issueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div style={{ marginTop: "30px", textAlign: "center" }}>No data found</div>
      )}
    </div>
  );
};

export default Search;
