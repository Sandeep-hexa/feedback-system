import React, { useState } from 'react';

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#f8fafc',
    padding: '24px',
  },
  card: {
    width: '100%',
    maxWidth: '460px',
    background: '#fff',
    borderRadius: '12px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
    padding: '32px',
  },
  title: {
    margin: '0 0 8px',
    fontSize: '28px',
    color: '#111827',
  },
  subtitle: {
    margin: '0 0 24px',
    color: '#6b7280',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    color: '#374151',
    fontWeight: 600,
  },
  input: {
    padding: '12px 14px',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '16px',
    outline: 'none',
  },
  button: {
    padding: '12px 16px',
    border: 'none',
    borderRadius: '8px',
    background: '#16a34a',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
  },
  linkButton: {
    marginTop: '16px',
    background: 'none',
    border: 'none',
    color: '#2563eb',
    cursor: 'pointer',
    padding: 0,
    fontSize: '15px',
    fontWeight: 600,
  },
  message: {
    marginTop: '12px',
    color: '#166534',
    fontWeight: 600,
  },
};

function Register({ onBack }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    storeName: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.fullName || !formData.email || !formData.password || !formData.storeName) {
      setMessage('Please complete all required fields.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }

    setMessage(`Store manager account created for ${formData.storeName}.`);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Register</h2>
        <p style={styles.subtitle}>Create an account for your store management team</p>

        <form style={styles.form} onSubmit={handleSubmit}>
          <label style={styles.label} htmlFor="fullName">
            Full name
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your full name"
              style={styles.input}
            />
          </label>

          <label style={styles.label} htmlFor="email">
            Email
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="manager@example.com"
              style={styles.input}
            />
          </label>

          <label style={styles.label} htmlFor="storeName">
            Store name
            <input
              id="storeName"
              name="storeName"
              type="text"
              value={formData.storeName}
              onChange={handleChange}
              placeholder="Your store name"
              style={styles.input}
            />
          </label>

          <label style={styles.label} htmlFor="password">
            Password
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              style={styles.input}
            />
          </label>

          <label style={styles.label} htmlFor="confirmPassword">
            Confirm password
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter password"
              style={styles.input}
            />
          </label>

          <button type="submit" style={styles.button}>
            Register
          </button>
        </form>

        <button type="button" style={styles.linkButton} onClick={onBack}>
          Back to login
        </button>

        {message ? <p style={styles.message}>{message}</p> : null}
      </div>
    </div>
  );
}

export default Register;
