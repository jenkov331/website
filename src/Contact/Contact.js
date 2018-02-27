import React, { Component } from 'react';
import './Contact.css';
import {Button} from 'react-bootstrap';

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            contactName: '',
            contactEmail: '',
            messageSubject: '',
            messageContent: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        alert('Thanks ' + this.state.contactName + ', your message to Jenna has been sent!');
        event.preventDefault();
    }

    render() {
        return (
            <form>
                <label>
                    Your Name <br /> <input name="contactName" size="50" type="text" value={this.state.contactName} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Your Email <br /> <input name="contactEmail" size="50" type="email" value={this.state.contactEmail} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Subject <div className="help">(max. 100 chars)</div> <br /> <input name="messageSubject" size="101" type="text" maxLength="100" value={this.state.messageSubject} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Message <br /> <textarea name="messageContent" rows="10" cols="100" value={this.state.messageContent} onChange={this.handleChange} />
                </label>
                <br />
                <Button bsStyle="success" onClick={this.handleSubmit}>Send</Button>
            </form>
        );
    }
}

export default Contact;