import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Modal } from 'react-bootstrap'; // Import Bootstrap components

function UserForm() {
    const [formData, setFormData] = useState({
        role: ['Admin', 'User', 'Manager'],
        username: '',
        email: '',
        mobile: '',
        designation: '',
        registrationInfo: '',
    });

    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => {
        setFormData({ username: '', email: '', mobile: '', designation: '', registrationInfo: '' });
        setShowModal(false);
    }

    const handleChange = (e) => {
        const { username, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [username]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/profile', formData);
            console.log(response.data);
            handleClose();
        } catch (error) {
            console.error('There was an error submitting the form:', error);
        }
    };

    return (
        <>
            <br />
            <br />
            <Button variant="outlined" onClick={handleShow}>
                Add User
            </Button>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>User Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Name"
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Mobile"
                            type="tel"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Designation"
                            type="text"
                            name="designation"
                            value={formData.designation}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />

                        <TextField
                            label="Registration Information"
                            name="registrationInfo"
                            value={formData.registrationInfo}
                            onChange={handleChange}
                            multiline
                            rows={4}
                            fullWidth
                            margin="normal"
                        />
                        <Button type="submit" variant="contained" color="primary" sx={{ marginTop: '16px' }}>
                            OK
                        </Button>
                        <Button
                            type="button"
                            onClick={() => handleClose()}
                            variant="outlined"
                            color="secondary"
                            sx={{ marginTop: '16px', marginLeft: '8px' }}
                        >
                            Cancel
                        </Button>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default UserForm;
