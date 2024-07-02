import { useState } from 'react';
import './App.css';
import { Button, Input } from '@chakra-ui/react';

function App() {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const applyInputValue = () => {
        setCount(parseInt(inputValue, 10) || 0); // Only update if it's a valid number
    };

    return (
        <>
            <div>
                <Button onClick={() => setIsVisible(!isVisible)}>
                    Toggle Counter Visibility
                </Button>
                <Input
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Set counter value"
                />
                <Button
                    onClick={applyInputValue}
                    className="set-counter-button"
                >
                    Set Counter
                </Button>
                <Button onClick={() => setCount(0)}>Reset Counter</Button>
            </div>
            <h1>Vite + React</h1>
            <h2>Vite + h2 + React</h2>
            {isVisible && (
                <div className="card">
                    <Button
                        onClick={() => setCount((count) => count + 1)}
                        className="chakra-button"
                        backgroundColor="rgb(239, 239, 239)"
                    >
                        count is {count}
                    </Button>
                </div>
            )}
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}

export default App;


























// import { useState } from 'react';
// import './App.css';
// import { Button, Input } from '@chakra-ui/react';

// function App() {
//     const [count, setCount] = useState(0);
//     const [isVisible, setIsVisible] = useState(true);
//     const [inputValue, setInputValue] = useState('');
//     const [formValues, setFormValues] = useState({
//         username: '',
//         email: '',
//         password: ''
//     });
//     const [formErrors, setFormErrors] = useState({
//         email: ''
//     });

//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setFormValues({ ...formValues, [name]: value });
//     };

//     const validateEmail = (email) => {
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return emailRegex.test(email);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         let valid = true;

//         if (!validateEmail(formValues.email)) {
//             setFormErrors({ ...formErrors, email: 'Invalid email format' });
//             valid = false;
//         } else {
//             setFormErrors({ ...formErrors, email: '' });
//         }

//         if (valid) {
//             // Perform registration logic
//             console.log('Form submitted', formValues);
//         }
//     };

//     const handleInputValueChange = (event) => {
//         setInputValue(event.target.value);
//     };

//     const applyInputValue = () => {
//         setCount(parseInt(inputValue, 10) || 0); // Only update if it's a valid number
//     };

//     return (
//         <>
//             <div>
//                 <Button onClick={() => setIsVisible(!isVisible)}>
//                     Toggle Counter Visibility
//                 </Button>
//                 <Input
//                     value={inputValue}
//                     onChange={handleInputValueChange}
//                     placeholder="Set counter value"
//                 />
//                 <Button
//                     onClick={applyInputValue}
//                     className="set-counter-button"
//                 >
//                     Set Counter
//                 </Button>
//                 <Button onClick={() => setCount(0)}>Reset Counter</Button>
//             </div>
//             <h1>Vite + React</h1>
//             <h2>Vite + h2 + React</h2>
//             {isVisible && (
//                 <div className="card">
//                     <Button
//                         onClick={() => setCount((count) => count + 1)}
//                         className="chakra-button"
//                         backgroundColor="rgb(239, 239, 239)"
//                     >
//                         count is {count}
//                     </Button>
//                 </div>
//             )}
//             <p className="read-the-docs">
//                 Click on the Vite and React logos to learn more
//             </p>
//             <div>
//                 <h2>Registration Form</h2>
//                 <form onSubmit={handleSubmit}>
//                     <Input
//                         name="username"
//                         value={formValues.username}
//                         onChange={handleInputChange}
//                         placeholder="Username"
//                     />
//                     <Input
//                         name="email"
//                         value={formValues.email}
//                         onChange={handleInputChange}
//                         placeholder="Email"
//                     />
//                     {formErrors.email && <div className="error-message">{formErrors.email}</div>}
//                     <Input
//                         name="password"
//                         type="password"
//                         value={formValues.password}
//                         onChange={handleInputChange}
//                         placeholder="Password"
//                     />
//                     <Button type="submit">Submit</Button>
//                 </form>
//             </div>
//         </>
//     );
// }

// export default App;
