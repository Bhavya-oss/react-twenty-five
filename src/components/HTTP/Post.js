import React, { useState } from "react";

function Post() {
  const afterFormData = {
    firstName: "",
    lastName: "",
    firstNameError: "",
    lastNameError: "",
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    firstNameError: "",
    lastNameError: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function validate() {
    let firstNameError = "";
    let lastNameError = "";

    if (formData.firstName === "") {
      firstNameError = "Enter FirstName";
    }
    if (formData.lastName === "") {
      lastNameError = "Enter LastName";
    }

    if (firstNameError || lastNameError) {
      setFormData({ ...formData, firstNameError, lastNameError });
      return false; // Return false if there are errors
    }

    return true;
  }

  async function handleSubmit(e) {
    e.preventDefault(); // Prevent page reload on form submission

    const isValid = validate(); // Validate the form
    if (isValid) {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              firstName: formData.firstName,
              lastName: formData.lastName,
            }),
          }
        );

        if (response.ok) {
          console.log("Submitted successfully");
          setFormData(afterFormData); // Reset the form after successful submission
        } else {
          console.log("Error submitting the form", response.statusText);
        }
      } catch (error) {
        console.error("Error posting data", error);
      }
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />
      <p>{formData.firstNameError}</p>

      <input
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />
      <p>{formData.lastNameError}</p>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Post;
