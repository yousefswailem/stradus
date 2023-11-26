import React, { useState } from 'react';
import axios from 'axios';
import UserForm from './UserForm';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Checkbox } from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';

const data = [
    { id: 1, username: 'Username', email: 'Email', admin: false, CDUpload: false, DeleteOrder: false, DicomSending: false, EditPatient: false, ManageReports: false, Radiologist: false, Sharing: false, SharingwithPatient: false, Technologist: false },
    { id: 2, username: 'Username2', email: 'Email2', admin: false, CDUpload: false, DeleteOrder: false, DicomSending: false, EditPatient: false, ManageReports: false, Radiologist: false, Sharing: false, SharingwithPatient: false, Technologist: false },
    { id: 3, username: 'Username3', email: 'Email3', admin: false, CDUpload: false, DeleteOrder: false, DicomSending: false, EditPatient: false, ManageReports: false, Radiologist: false, Sharing: false, SharingwithPatient: false, Technologist: false },
    { id: 4, username: 'Username4', email: 'Email4', admin: false, CDUpload: false, DeleteOrder: false, DicomSending: false, EditPatient: false, ManageReports: false, Radiologist: false, Sharing: false, SharingwithPatient: false, Technologist: false },
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#6b00b3",
        color: theme.palette.common.white
        },

}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(even)': {
        backgroundColor: theme.palette.action.hover,
    },
}));

const Profile = ({ token }) => {
    const [checkedRows, setCheckedRows] = useState({}); 
    
    const handleCheck = (event, propertyName, rowId) => {
        const { checked } = event.target;

        // Update the state immediately, use the rowId as a key
        setCheckedRows((prevCheckedRows) => ({
            ...prevCheckedRows,
            [rowId]: {
                ...prevCheckedRows[rowId],
                [propertyName]: checked,
            },
        }));
    };

    const handleEdit = async (id) => {
        try {
            const response = await axios.get(`http://localhost:3001/profile/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const editedData = response.data;
            console.log('Edit:', editedData);
        } catch (error) {
            console.error('Error fetching data for edit:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            // Make a delete request
            await axios.delete(`http://localhost:3001/profile/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            // Implement your logic to update the UI or state after deletion
            console.log('Delete:', id);
        } catch (error) {
            console.error('Error deleting data:', error);
        }
    };

    return (
        <div className="container mt-4">
            <h2>Users</h2>
            <h2>
                <UserForm />
            </h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>UserName</StyledTableCell>
                            <StyledTableCell>Email</StyledTableCell>
                            <StyledTableCell>admin</StyledTableCell>
                            <StyledTableCell>CD Upload</StyledTableCell>
                            <StyledTableCell>Delete Order</StyledTableCell>
                            <StyledTableCell>Dicom Sending</StyledTableCell>
                            <StyledTableCell>Edit Patient</StyledTableCell>
                            <StyledTableCell>Manage Reports</StyledTableCell>
                            <StyledTableCell>Radiologist</StyledTableCell>
                            <StyledTableCell>Sharing</StyledTableCell>
                            <StyledTableCell>Sharing with Patient</StyledTableCell>
                            <StyledTableCell>Technologist</StyledTableCell>
                            <StyledTableCell>Actions</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <StyledTableRow key={row.id}>
                                <StyledTableCell>{row.username}</StyledTableCell>
                                <StyledTableCell>{row.email}</StyledTableCell>
                                <StyledTableCell>
                                    <Checkbox
                                        label="admins"
                                        name="admin"
                                        checked={checkedRows[row.id]?.admin || false}
                                        onChange={(event) => handleCheck(event, 'admin', row.id)}
                                        rows={4}
                                        fullWidth
                                        margin="normal"
                                    />
                                </StyledTableCell>
                                <StyledTableCell>
                                    <Checkbox
                                        label="CDUpload"
                                        name="CDUpload"
                                        checked={checkedRows[row.id]?.CDUpload || false}
                                        onChange={(event) => handleCheck(event, 'CDUpload', row.id)}
                                        rows={4}
                                        fullWidth
                                        margin="normal"
                                    />
                                </StyledTableCell>
                                <StyledTableCell>
                                    <Checkbox
                                        label="Delete Order"
                                        name="DeleteOrder"
                                        checked={checkedRows[row.id]?.DeleteOrder || false}
                                        onChange={(event) => handleCheck(event, 'DeleteOrder', row.id)}
                                        rows={4}
                                        fullWidth
                                        margin="normal"
                                    />
                                </StyledTableCell>
                                <StyledTableCell>
                                    <Checkbox
                                        label="Dicom Sending"
                                        name="DicomSending"
                                        checked={checkedRows[row.id]?.DicomSending || false}
                                        onChange={(event) => handleCheck(event, 'DicomSending', row.id)}
                                        rows={4}
                                        fullWidth
                                        margin="normal"
                                    />
                                </StyledTableCell>
                                <StyledTableCell>
                                    <Checkbox
                                        label="Edit Patient"
                                        name="EditPatient"
                                        checked={checkedRows[row.id]?.EditPatient || false}
                                        onChange={(event) => handleCheck(event, 'EditPatient', row.id)}
                                        rows={4}
                                        fullWidth
                                        margin="normal"
                                    />
                                </StyledTableCell>
                                <StyledTableCell>
                                    <Checkbox
                                        label="Manage Reports"
                                        name="ManageReports"
                                        checked={checkedRows[row.id]?.ManageReports || false}
                                        onChange={(event) => handleCheck(event, 'ManageReports', row.id)}
                                        rows={4}
                                        fullWidth
                                        margin="normal"
                                    />
                                </StyledTableCell>
                                <StyledTableCell>
                                    <Checkbox
                                        label="Radiologist"
                                        name="Radiologist"
                                        checked={checkedRows[row.id]?.Radiologist || false}
                                        onChange={(event) => handleCheck(event, 'Radiologist', row.id)}
                                        rows={4}
                                        fullWidth
                                        margin="normal"
                                    />
                                </StyledTableCell>
                                <StyledTableCell>
                                    <Checkbox
                                        label="Sharing"
                                        name="Sharing"
                                        checked={checkedRows[row.id]?.Sharing || false}
                                        onChange={(event) => handleCheck(event, 'Sharing', row.id)}
                                        rows={4}
                                        fullWidth
                                        margin="normal"
                                    />
                                </StyledTableCell>
                                <StyledTableCell>
                                    <Checkbox
                                        label="Sharing with Patient"
                                        name="SharingwithPatient"
                                        checked={checkedRows[row.id]?.SharingwithPatient || false}
                                        onChange={(event) => handleCheck(event, 'SharingwithPatient', row.id)}
                                        rows={4}
                                        fullWidth
                                        margin="normal"
                                    />
                                </StyledTableCell>
                                <StyledTableCell>
                                    <Checkbox
                                        label="Technologist"
                                        name="Technologist"
                                        checked={checkedRows[row.id]?.Technologist || false}
                                        // checked={checkedRoles.Technologist}
                                        onChange={(event) => handleCheck(event, 'Technologist', row.id)}
                                        rows={4}
                                        fullWidth
                                        margin="normal"
                                    />
                                </StyledTableCell>
                                <StyledTableCell sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                    <Button variant="outlined" color="secondary" onClick={() => handleEdit(row.id)}>
                                        Edit
                                    </Button>
                                    <Button color="warning" variant="outlined" onClick={() => handleDelete(row.id)}>
                                        Delete
                                    </Button>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Profile;