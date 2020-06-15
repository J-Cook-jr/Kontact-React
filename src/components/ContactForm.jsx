import React, { Component } from 'react';

export default class ContactForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newUser: {
                name: '',
                email: '',
                phone: '',
                address: '',
                city: '',
                state: '',
                zip:'',
                gender: '',
                expertise: '',
        

            },

            genderOptions: ['Male', 'Female', 'Others'],
            skillOptions: ['Programming', 'Development', 'Design', 'Testing']

        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
    }

    /* This life cycle hook gets executed when the component mounts */

    handleFormSubmit() {
        // Form submission logic
    }
    handleClearForm() {
        // Logic for resetting the form
    }
    render() {
        return (
            <form className="container" onSubmit={this.handleFormSubmit}>

                <Input /> {/* Name of the user */}
                <Input /> {/* Input for Age */}
                <Input /> {/* Input for Age */}
                <Input /> {/* Input for Age */}
                <Input /> {/* Input for Age */}
                <Input /> {/* Input for Age */}
                <Input /> {/* Input for Age */}
                <Select /> {/* Gender Selection */}
                <CheckBox /> {/* List of Skills (eg. Programmer, developer) */}
                <Button /> { /*Submit */}
                <Button /> {/* Clear the form */}
            </form>

        );
    }
}
