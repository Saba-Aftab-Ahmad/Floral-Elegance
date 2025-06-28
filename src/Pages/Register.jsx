//import React, { useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    email: '',
    password: '',
    confirmPassword: '',
    experience: '',
    yearsExperience: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registration Submitted');
  };

  return (
    <>
      <Header title="Floral Elegance - Register" />
      <main>
        <section className="form-section">
          <h2>Registration Form</h2>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>Personal Information</legend>
              <label>First Name:<input type="text" name="firstName" value={formData.firstName} onChange={handleChange} /></label>
              <label>Last Name:<input type="text" name="lastName" value={formData.lastName} onChange={handleChange} /></label>
              <label>Date of Birth:<input type="date" name="dob" value={formData.dob} onChange={handleChange} /></label>
              <label>Email*:<input type="email" name="email" value={formData.email} onChange={handleChange} required /></label>
              <label>Password*:<input type="password" name="password" value={formData.password} onChange={handleChange} required /></label>
              <label>Confirm Password*:<input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required /></label>
            </fieldset>
            <fieldset>
              <legend>Experience with Flowers</legend>
              <label>Experience Level*
                <select name="experience" value={formData.experience} onChange={handleChange} required>
                  <option value="">-- Select --</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                  <option value="professional">Professional</option>
                </select>
              </label>
              <label>Years of Experience*:<input type="number" name="yearsExperience" value={formData.yearsExperience} onChange={handleChange} required /></label>
            </fieldset>
            <div className="form-buttons">
              <button type="submit">Register</button>
              <button type="reset">Reset</button>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Register;