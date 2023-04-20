import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const NumberInput = ({ setFormData, formData }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  function handlePhoneNumberChange(value, country) {
    setPhoneNumber(value);
    setFormData({ ...formData, phone: "+" + value });
  }
  console.log(phoneNumber);
  return (
    <PhoneInput
      country="in"
      value={phoneNumber}
      inputStyle={{ backgroundColor: "#B0E2DF80" }}
      onChange={handlePhoneNumberChange}
    />
  );
};

export default NumberInput;
