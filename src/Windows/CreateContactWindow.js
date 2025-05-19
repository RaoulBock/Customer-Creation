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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewClient((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handle_create_client = async () => {
    const response = await ApiServices.CREATE_CONTACT({
      full_name: newClient.fullName,
      email_address: newClient.email_Address,
      phone_number: newClient.phone_Number,
      address: newClient.address,
      notes: newClient.notes,
    });

    console.log("Server response:", response);

    // Optionally reset the form
    setNewClient({
      fullName: "",
      email_Address: "",
      phone_Number: "",
      address: "",
      notes: "",
    });

    // Optionally show a success message or redirect
  };

  return (
    <div className="body">
      <div class="container">
        <div class="form-container">
          <h1>Create new client.</h1>
          <p>Fill out the form below to create a client.</p>

          <div class="input-group">
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

          <div class="message-field">
            <i class="fas fa-message"></i>
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

          {/* <div class="contact-info">
            <div class="info-item">
              <i class="fas fa-map-marker-alt"></i>
              <span>123 Main Street, City, Country</span>
            </div>
            <div class="info-item">
              <i class="fas fa-envelope"></i>
              <span>contact@example.com</span>
            </div>

            <div class="info-item">
              <i class="fas fa-phone"></i>
              <span>+1 234 567 8900</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CreateContactWindow;
