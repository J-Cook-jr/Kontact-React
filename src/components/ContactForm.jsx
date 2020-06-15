import React, { Component } from 'react';

import Input from './Input';
import Select from './Select';
import CheckBox from './CheckBox';
import Button from './Button';


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
                zip: '',
                gender: '',
                expertise: '',
            },

            genderOptions: ['Male', 'Female', 'Others'],
            skillOptions: ['Programming', 'Development', 'Design', 'Testing']

        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    /* This life cycle hook gets executed when the component mounts */

    handleFormSubmit() {
        // Form submission logic
    }
    handleClearForm() {
        // Logic for resetting the form
    }

    handleInput(e) {
        let value = e.target.value;
        let name = e.target.name;
        this.setState(prevState => {
            return {
                newUser: {
                    ...prevState.newUser, [name]: value
                }
            }
        }, () => console.log(this.state.newUser)
        )
    }
    render() {
        return (
            <form className="container" onSubmit={this.handleFormSubmit}>

                <Input type={'text'}
                    title={'Full Name'}
                    name={'name'}
                    value={this.state.newUser.name}
                    placeholder={'Enter your name'}
                    handleChange={this.handleFullName}
                /> {/* Name of the user */}

                <Input type={'text'}
                    title={'Email'}
                    name={'email'}
                    value={this.state.newUser.email}
                    placeholder={'Enter your email'}
                    handleChange={this.handleEmail}
                /> {/* User email*/}

                <Input type={'number'}
                    title={'Phone Number'}
                    name={'phone'}
                    value={this.state.newUser.phone}
                    placeholder={'Enter your phone number'}
                    handleChange={this.handlePhoneNumber}
                /> {/* User phone number */}

                <Input type={'text'}
                    title={'Address'}
                    name={'address'}
                    value={this.state.newUser.address}
                    placeholder={'Enter your address'}
                    handleChange={this.handleAddress}
                /> {/* User address */}

                <Input type={'text'}
                    title={'City'}
                    name={'city'}
                    value={this.state.newUser.city}
                    placeholder={'Enter your city'}
                    handleChange={this.handleCity}
                /> {/* City of the user */}

                <Input type={'text'}
                    title={'State'}
                    name={'state'}
                    value={this.state.newUser.state}
                    placeholder={'Enter your state'}
                    handleChange={this.handleState}
                /> {/* State of the user */}

                <Input type={'number'}
                    title={'Zip Code'}
                    name={'zip'}
                    value={this.state.newUser.zip}
                    placeholder={'Enter your zipcode'}
                    handleChange={this.handleZipCode}
                /> {/* Zip Code of the user */}

                <Select /> {/* Gender Selection */}
                <CheckBox /> {/* List of Skills (eg. Programmer, developer) */}
                <Button /> { /*Submit */}
                <Button /> {/* Clear the form */}
            </form>

        );
    }
}
