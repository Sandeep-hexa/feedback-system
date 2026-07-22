import React, { useState } from 'react';
import Register from './register';

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#f4f7fb',
    padding: '24px',
  },
  card: {
    width: '100%',
    maxWidth: '440px',
    background: '#fff',
    borderRadius: '12px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
    padding: '32px',
  },
  title: {
    margin: '0 0 8px',
    fontSize: '28px',
    color: '#1f2937',
  },
  subtitle: {
    margin: '0 0 24px',
    color: '#6b7280',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
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
    background: '#2563eb',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
  },
  linkText: {
    marginTop: '16px',
    color: '#4b5563',
    textAlign: 'center',
  },
  linkButton: {
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
    color: '#065f46',
    fontWeight: 600,
  },
};

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const [showRegister, setShowRegister] = useState(false);

  const handleChange = (event) => {
  
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.email || !formData.password) {
      setMessage('Please enter both your email and password.');
      return;
    }

    setMessage(`Welcome, ${formData.email}!`);
  };

  if (showRegister) {
    return <Register onBack={() => setShowRegister(false)} />;
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Login</h2>
        <p style={styles.subtitle}>Sign in to your feedback account</p>

        <form style={styles.form} onSubmit={handleSubmit}>
          <label style={styles.label} htmlFor="email">
            Email
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
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
              placeholder="Enter your password"
              style={styles.input}
            />
          </label>

          <button type="submit" style={styles.button}>
            Log In
          </button>
        </form>

        <p style={styles.linkText}>
          New store manager?{' '}
          <button type="button" style={styles.linkButton} onClick={() => setShowRegister(true)}>
            Create an account
          </button>
        </p>

        {message ? <p style={styles.message}>{message}</p> : null}
      </div>
    </div>
  );
}

export default Login;
