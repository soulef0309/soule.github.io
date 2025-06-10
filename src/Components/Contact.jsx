import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #fef7ed 0%, #fef3c7 50%, #fde68a 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
`;

const FormWrapper = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 3rem 2rem;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  margin-bottom: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const Title = styled.h1`
  background: linear-gradient(135deg, #8B4F9F 0%, #5B2A86 50%, #4A1E6B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin: 0 0 2rem 0;
  letter-spacing: -0.5px;
`;

const InputGroup = styled.div`
  margin-bottom: 1.5rem;
  position: relative;
`;

const ValidationMessage = styled.div`
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 1rem 1.25rem;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1rem;
  font-family: inherit;
  background-color: #f8fafc;
  transition: all 0.3s ease;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    background-color: white;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    transform: translateY(-1px);
  }
  
  &::placeholder {
    color: #64748b;
    font-weight: 400;
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 1rem 1.25rem;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1rem;
  font-family: inherit;
  background-color: #f8fafc;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    background-color: white;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    transform: translateY(-1px);
  }
  
  &::placeholder {
    color: #64748b;
    font-weight: 400;
  }
`;

const SendButton = styled.button`
  background: linear-gradient(135deg, #8B4F9F 0%, #5B2A86 50%, #4A1E6B 100%);
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;

const Footer = styled.div`
  background: #3B1F17;
  backdrop-filter: blur(10px);
  color: white;
  text-align: center;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const SuccessMessage = styled.div`
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  padding: 1rem;
  border-radius: 12px;
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: 500;
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
`;

const ErrorMessage = styled.div`
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: white;
  padding: 1rem;
  border-radius: 12px;
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: 500;
  box-shadow: 0 4px 15px rgba(239, 68, 68, 0.3);
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [emailjsLoaded, setEmailjsLoaded] = useState(false);

  // Load EmailJS when component mounts
  useEffect(() => {
    const loadEmailJS = () => {
      if (window.emailjs) {
        setEmailjsLoaded(true);
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
      script.async = true;
      script.onload = () => {
        if (window.emailjs) {
          window.emailjs.init('qBB5lcefv4F0BKzaF');
          setEmailjsLoaded(true);
        }
      };
      script.onerror = () => {
        console.error('Failed to load EmailJS');
        setErrorMessage('Failed to load email service. Please try again later.');
      };
      document.head.appendChild(script);
    };

    loadEmailJS();
  }, []);

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value) return 'Name is required';
        if (value.length < 2) return 'Name must be at least 2 characters';
        if (/\d/.test(value)) return 'Name cannot contain numbers';
        return '';
      case 'email':
        if (!value) return 'Email is required';
        if (!value.includes('@')) return 'Email must include @ symbol';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email address';
        return '';
      case 'phone':
        if (value && value.length !== 10) return 'Phone number must be 10 digits';
        return '';
      case 'message':
        if (!value) return 'Message is required';
        if (value.length < 10) return 'Message must be at least 10 characters';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      const digitsOnly = value.replace(/\D/g, '');
      if (digitsOnly.length <= 10) {
        setFormData(prev => ({
          ...prev,
          [name]: digitsOnly
        }));
        setErrors(prev => ({
          ...prev,
          [name]: validateField(name, digitsOnly)
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
      setErrors(prev => ({
        ...prev,
        [name]: validateField(name, value)
      }));
    }
    
    if (errorMessage) setErrorMessage('');
  };

  const validateInputs = () => {
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      phone: validateField('phone', formData.phone),
      message: validateField('message', formData.message)
    };
    
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleSubmit = async () => {
    if (!validateInputs()) {
      setErrorMessage('Please check your inputs');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // EmailJS configuration
      const serviceID = 'service_ye9hlyf';
      const templateID = 'template_y1ytti5';
      const publicKey = 'qBB5lcefv4F0BKzaF';

      // Template parameters that match your HTML template
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        time: new Date().toLocaleString()
      };

      // Send email using EmailJS
      const response = await window.emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );

      if (response.status === 200) {
        setShowSuccess(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        throw new Error('Failed to send message');
      }

    } catch (err) {
      console.error('EmailJS Error:', err);
      setErrorMessage('Something went wrong. Please try again.');
    }

    setIsSubmitting(false);
  };

  return (
    <Container>
      {/* EmailJS Script - Load dynamically */}
      {typeof window !== 'undefined' && !window.emailjs && (
        <script 
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
          onLoad={() => {
            window.emailjs.init('qBB5lcefv4F0BKzaF');
          }}
        />
      )}
      
      <FormWrapper>
        <Title>Get in Touch</Title>
        
        {showSuccess && (
          <SuccessMessage>
            ✨ Thank you! Your message has been sent successfully.
          </SuccessMessage>
        )}

        {errorMessage && (
          <ErrorMessage>
            ❌ {errorMessage}
          </ErrorMessage>
        )}
        
        <InputGroup>
          <StyledInput
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && (
            <ValidationMessage>
              ❌ {errors.name}
            </ValidationMessage>
          )}
        </InputGroup>
        
        <InputGroup>
          <StyledInput
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <ValidationMessage>
              ❌ {errors.email}
            </ValidationMessage>
          )}
        </InputGroup>
        
        <InputGroup>
          <StyledInput
            type="tel"
            name="phone"
            placeholder="Phone Number (Optional)"
            value={formData.phone}
            onChange={handleChange}
            maxLength={10}
          />
          {errors.phone && (
            <ValidationMessage>
              ❌ {errors.phone}
            </ValidationMessage>
          )}
        </InputGroup>
        
        <InputGroup>
          <StyledTextarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && (
            <ValidationMessage>
              ❌ {errors.message}
            </ValidationMessage>
          )}
        </InputGroup>
        
        <SendButton 
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </SendButton>
      </FormWrapper>
      
      <Footer>
        © 2024 soule9933.github.io - Built with ❤️
      </Footer>
    </Container>
  );
};

export default Contact;