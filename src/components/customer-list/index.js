import React, { useState } from "react";
import "./index.css";

function CustomerList() {
  let [customers, setCustomers] = useState([]);
  console.log(customers);
  const [newCustomer, setNewCustomer] = useState("");
  const handleChange = (e) => {
    setNewCustomer(e.target.value);
  };
  const addCustomer = () => {
  newCustomer && setCustomers([...customers, newCustomer])
  setNewCustomer("")
}
  return (
    <div className="mt-75 layout-column justify-content-center align-items-center">
      <section className="layout-row align-items-center justify-content-center">
        <input
          type="text"
          value={newCustomer}
          onChange={handleChange}
          className="large"
          placeholder="Name"
          data-testid="app-input"
        />
        <button
          type="submit"
          className="ml-30"
          data-testid="submit-button"
          onClick={addCustomer}
        >
          Add Customer
        </button>
      </section>
      {customers.length > 0 ? (
        <ul className="styled mt-50" data-testid="customer-list">
          {customers.map((customer, index) => (
            <li className="slide-up-fade-in" data-testid={`list-item${index}`} key={`list-item${index}`}>
              {customer}
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}

export default CustomerList;