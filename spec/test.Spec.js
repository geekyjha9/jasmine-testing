import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jasmine-dom';
import App from '../src/App.jsx';

describe('App component tests', () => {
  it('should display the text "Vite + React" in an h1 tag', () => {
    render(<App />);
    const headingElement = screen.getByText(/Vite \+ React/i);
    expect(headingElement.tagName).toBe('H1');
  });

  it('should display the text "Vite + h2 + React" in an h2 tag', () => {
    render(<App />);
    const headingElement = screen.getByText(/Vite \+ h2 \+ React/i);
    expect(headingElement.tagName).toBe('H2');
  });

  it('should correctly increment counter when button is clicked', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /count is/i });
    fireEvent.click(button);
    expect(button.textContent).toContain('count is 1');
  });

  it('should toggle visibility of the counter button', () => {
    render(<App />);
    const toggleButton = screen.getByText(/Toggle Counter Visibility/i);
    const counterButton = () => screen.getByText(/count is/i);
    fireEvent.click(toggleButton);
    expect(screen.queryByText(/count is/i)).toBeNull(); // Should not be visible
    fireEvent.click(toggleButton);
    expect(counterButton()).toBeDefined(); // Should be visible again
  });

  it('should set counter value from input field', () => {
    const { container } = render(<App />);
    const input = screen.getByPlaceholderText(/Set counter value/i);
    const setButton = container.querySelector('.set-counter-button');
    fireEvent.change(input, { target: { value: '5' } });
    fireEvent.click(setButton);
    expect(screen.getByText(/count is 5/i)).toBeDefined();
  });

  it('should reset counter to zero', () => {
    render(<App />);
    const resetButton = screen.getByText(/Reset Counter/i);
    fireEvent.click(screen.getByText(/count is 0/i)); // Increment to ensure reset works
    fireEvent.click(resetButton);
    expect(screen.getByText(/count is 0/i)).toBeDefined();
  });

  it('should have correct initial button background color', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /count is/i });
    const style = window.getComputedStyle(button);
    expect(style.backgroundColor).toBe('rgb(239, 239, 239)');
  });
});




// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import App from '../src/App';

// describe('App component tests', () => {
//   it('should display the text "Vite + React" in an h1 tag', () => {
//     render(<App />);
//     const headingElement = screen.getByText(/Vite \+ React/i);
//     expect(headingElement.tagName).toBe('H1');
//   });

//   it('should display the text "Vite + h2 + React" in an h2 tag', () => {
//     render(<App />);
//     const headingElement = screen.getByText(/Vite \+ h2 \+ React/i);
//     expect(headingElement.tagName).toBe('H2');
//   });

//   it('should correctly increment counter when button is clicked', () => {
//     render(<App />);
//     const button = screen.getByRole('button', { name: /count is/i });
//     fireEvent.click(button);
//     expect(button.textContent).toContain('count is 1');
//   });

//   it('should toggle visibility of the counter button', () => {
//     render(<App />);
//     const toggleButton = screen.getByText(/Toggle Counter Visibility/i);
//     fireEvent.click(toggleButton);
//     expect(screen.queryByText(/count is/i)).toBeNull(); // Should not be visible
//     fireEvent.click(toggleButton);
//     expect(screen.getByText(/count is/i)).toBeDefined(); // Should be visible again
//   });

//   it('should set counter value from input field', () => {
//     render(<App />);
//     const input = screen.getByPlaceholderText(/Set counter value/i);
//     const setButton = screen.getByText(/Set Counter/i);
//     fireEvent.change(input, { target: { value: '5' } });
//     fireEvent.click(setButton);
//     expect(screen.getByText(/count is 5/i)).toBeDefined();
//   });

//   it('should reset counter to zero', () => {
//     render(<App />);
//     const resetButton = screen.getByText(/Reset Counter/i);
//     fireEvent.click(screen.getByText(/count is 0/i)); // Increment to ensure reset works
//     fireEvent.click(resetButton);
//     expect(screen.getByText(/count is 0/i)).toBeDefined();
//   });

//   it('should have correct initial button background color', () => {
//     render(<App />);
//     const button = screen.getByRole('button', { name: /count is/i });
//     const style = window.getComputedStyle(button);
//     expect(style.backgroundColor).toBe('rgb(239, 239, 239)');
//   });

//   // Registration form tests
//   it('should display the registration form with required fields', () => {
//     render(<App />);
//     expect(screen.getByPlaceholderText(/Username/i)).toBeTruthy();
//     expect(screen.getByPlaceholderText(/Email/i)).toBeTruthy();
//     expect(screen.getByPlaceholderText(/Password/i)).toBeTruthy();
//     expect(screen.getByRole('button', { name: /Submit/i })).toBeTruthy();
//   });

//   it('should display error messages for invalid inputs', () => {
//     render(<App />);
//     const emailInput = screen.getByPlaceholderText(/Email/i);
//     fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
//     fireEvent.click(screen.getByRole('button', { name: /Submit/i }));
//     expect(screen.getByText(/Invalid email format/i)).toBeTruthy();
//   });
// });
