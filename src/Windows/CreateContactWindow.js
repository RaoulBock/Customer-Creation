import React from "react";
import Input from "../Components/Input/Input";
import Button from "../Components/Button/Button";
import { ApiServices } from "../Utils/ApiServices";

const CreateContactWindow = () => {
  const [newClient, setNewClient] = React.useState({
    fullName: "",
    email_Address: "",
    phone_Number: "",
    address: "",
    notes: "",
  });

  const [clients, setClients] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const clientsPerPage = 7;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewClient((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const [searchTerm, setSearchTerm] = React.useState("");

  const handle_create_client = async () => {
    if (
      newClient.fullName === "" ||
      newClient.email_Address === "" ||
      newClient.phone_Number === "" ||
      newClient.address === ""
    ) {
      console.log("Please fill in all fields");
      return null;
    }

    const response = await ApiServices.CREATE_CONTACT({
      full_name: newClient.fullName,
      email_address: newClient.email_Address,
      phone_number: newClient.phone_Number,
      address: newClient.address,
      notes: newClient.notes,
    });

    console.log("Server response:", response);

    setClients((prev) => [...prev, newClient]);

    setNewClient({
      fullName: "",
      email_Address: "",
      phone_Number: "",
      address: "",
      notes: "",
    });

    // Move to the last page if new entry exceeds current page
    const newTotal = clients.length + 1;
    if (newTotal > currentPage * clientsPerPage) {
      setCurrentPage(Math.ceil(newTotal / clientsPerPage));
    }
  };

  const filteredClients = clients.filter((client) =>
    Object.values(client)
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const indexOfLastClient = currentPage * clientsPerPage;
  const indexOfFirstClient = indexOfLastClient - clientsPerPage;
  const currentClients = filteredClients.slice(
    indexOfFirstClient,
    indexOfLastClient
  );

  const totalPages = Math.ceil(filteredClients.length / clientsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="body">
      <div className="container">
        <div className="form-container">
          <h1>Create new client.</h1>
          <p>Fill out the form below to create a client.</p>

          <div className="input-group">
            <Input
              classIcon={"fas fa-user"}
              name="fullName"
              type="text"
              placeholder="Full name"
              value={newClient.fullName}
              onChange={handleChange}
              required
            />
            <Input
              classIcon={"fas fa-envelope"}
              name="email_Address"
              type="email"
              placeholder="Email address"
              value={newClient.email_Address}
              onChange={handleChange}
              required
            />
            <Input
              classIcon={"fas fa-phone"}
              name="phone_Number"
              type="tel"
              placeholder="Phone number"
              value={newClient.phone_Number}
              onChange={handleChange}
              required
            />
            <Input
              classIcon={"fas fa-tag"}
              name="address"
              type="text"
              placeholder="Address"
              value={newClient.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="message-field">
            <i className="fas fa-message"></i>
            <textarea
              placeholder="Notes"
              name="notes"
              value={newClient.notes}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <Button
            title={"Create client"}
            classIcon={"fas fa-paper-plane"}
            onClick={handle_create_client}
          />

          {clients.length > 0 && (
            <div style={{ marginTop: "30px" }}>
              <h2 style={{ marginBottom: 10 }}>Client List</h2>
              <Input
                classIcon={"fas fa-search"}
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="table-wrapper">
                <table className="client-table">
                  <thead>
                    <tr>
                      <th>Full Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Address</th>
                      <th>Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentClients.map((client, index) => (
                      <tr key={index}>
                        <td>{client.fullName}</td>
                        <td>{client.email_Address}</td>
                        <td>{client.phone_Number}</td>
                        <td>{client.address}</td>
                        <td>{client.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <div className="contact-info">
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>123 Main Street, City, Country</span>
            </div>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <span>contact@example.com</span>
            </div>
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <span>+1 234 567 8900</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateContactWindow;
