import React, {Component} from 'react'

class ContactForm extends Component {
    constructor(props) {
        super(props);

        this.setState({
            name: '',
            email: '',
            number: '',
            message: ''
        })
    }

    setName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    
    setEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    setNumber = (event) => {
        this.setState({
            number: event.target.value
        })
    }

    setMessage = (event) => {
        this.setState({
            message: event.target.value
        })
    }

    // onSubmit -> figure out how to make it send an email

    render() {
        // <form onSubmit={this.handleSubmit}>
        //     <div class="name">
        //         <label>Full Name</label>
        //         <input 
        //             type="text"
        //             value={this.state.name}
        //             onChange={this.setName}
        //         />
        //     </div>
        //     <div class="email">
        //         <label>Email</label>
        //         <input
        //             type="text"
        //             value={this.state.email}
        //             onChange={this.setEmail} 
        //         />
        //     </div>
        //     <div class="number">
        //         <label>Phone Number</label>
        //         <input 
        //             type="text"
        //             value={this.state.number}
        //             onChange={this.setNumber}
        //         />
        //     </div>
        //     <div class="message">
        //         <label>Message</label>
        //         <input
        //             type="text"
        //             value={this.state.message}
        //             onChange={this.setMessage}
        //         />
        //     </div>
            
        //     <button type="submit">Send Message</button>
        // </form>
        return(<h1 style="font-color:white">HIIIIII</h1>)
    }
}

export default ContactForm;