import React from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { DataGrid, ColDef, ValueGetterParams } from '@material-ui/data-grid';
import { NavLink as NavLinkRRD, Link } from "react-router-dom";

export default class DashboardTables extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.columns = [
            { field: 'id', headerName: 'ID', width: 90 },
            {
                field: 'last', headerName: 'Last name', width: 150, editable: false,
                renderCell: (params) => (
                    <strong>
                        <u> <a
                            class="kt-menu__link kt-menu__toggle"
                            variant="contained"
                            color="primary"
                            size="small"
                            style={{ marginLeft: 16, cursor: "pointer", color: "#05339b" }}
                            onClick={() => {
                                this.props.history.push({
                                    pathname: `/user/patientview`,
                                    search: '?query=abc',
                                    state: {
                                        listId: 0,
                                        vueId: 0,
                                        title: this.state.title,
                                        titleIcon: this.state.titleIcon,
                                        Limit: this.state.Limit, PageNumber: this.state.PageNumber
                                    }
                                })
                            }}
                        >
                            {params.value}
                        </a></u>
                    </strong>
                ),
            },
            { field: 'first', headerName: 'First Name', width: 150 },
            { field: 'dob', headerName: 'DOB', width: 120, editable: false, },
            { field: 'gender', headerName: 'Gender', width: 120, editable: false, },
            { field: 'address', headerName: 'Address', width: 120 },
            { field: 'city', headerName: 'city', width: 120 },
            { field: 'State', headerName: 'State', width: 120 },
            { field: 'zip', headerName: 'Zipcode', width: 120 },
        ];
        this.rows = [
            { id: 1, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
            { id: 2, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
            { id: 3, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
            { id: 4, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
            { id: 5, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
            { id: 6, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
            { id: 7, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
            { id: 8, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
            { id: 9, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
            { id: 10, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
            { id: 11, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
            { id: 12, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
            { id: 13, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
            { id: 14, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
            { id: 15, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
            { id: 16, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
            { id: 17, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
            { id: 18, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
            { id: 19, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
            { id: 20, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
            { id: 21, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
            { id: 22, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
            { id: 23, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
            { id: 24, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
            { id: 25, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
            { id: 26, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
            { id: 27, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
            { id: 28, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
            { id: 29, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
            { id: 30, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
            { id: 31, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
            { id: 32, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
            { id: 33, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
            { id: 34, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
            { id: 35, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
            { id: 36, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
            { id: 37, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
            { id: 38, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
            { id: 39, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
            { id: 40, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
        ];


    }

    render() {
        return (
            <>
                <DataGrid
                    rows={this.rows}
                    columns={this.columns}
                    pageSize={10}
                    autoHeight
                    disableSelectionOnClick
                />
            </>
        );
    }

}