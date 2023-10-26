import {createRoot} from 'react-dom/client';
import ContactForm from './components/ContactForm';
// import './style.css'

const root = createRoot(document.getElementById('root'));
console.log(root);
root.render(<ContactForm />);