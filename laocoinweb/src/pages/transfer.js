import { Card, CardContent, Checkbox, Typography } from '@mui/material';
import React, { Component } from 'react'
import Header from '../components/Header';
import { API_PATH } from '../Type';
import memoizeOne from 'memoize-one';
import DataTable from 'react-data-table-component';
import { ArrowDownward } from '@material-ui/icons';
import { CircularProgress } from '@material-ui/core';


const columns = memoizeOne(handleAction => [
    {
        name: 'FirstName',
        selector: 'first_name',
        sortable: true,
    },
    {
        name: 'LastName',
        selector: 'last_name',
        sortable: true,
    },
    {
        name: 'Email',
        selector: 'email',
        sortable: true,
    },
    {
        name: 'Name',
        selector: 'permission',
        sortable: true,
    },

]);

const sortIcon = <ArrowDownward />;
const Circular = () => (
    <div style={{ padding: '24px' }}>
        <CircularProgress size={75} />
    </div>
);

let value = 0;



export default class transfer extends Component {
    constructor(props) {
        super(props);

        this.user_id = this.props.match.params.user_id;


        this.state = {
            amount: 0,
            account: '',
            recipient: '',
            user: [],
            UserList: []
        }
    }

    componentDidMount() {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'x-access-token': localStorage.getItem('token') },

        };

        fetch(API_PATH + '/users', requestOptions)
            .then(response => response.json())
            .then(res => {
                this.setState({ user: res });
            });
    }



    Deposit = async () => {
        let index = 0;
        let check = false;
        this.state.UserList.map((item) => {


            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'x-access-token': localStorage.getItem('token') },
                body: JSON.stringify({
                    "recipient": item.ethereum_account_address,
                    "token": localStorage.getItem('token'),
                    "sender": localStorage.getItem('userId'),
                    "amount": this.state.amount
                })
            };
            if (item.ethereum_account_address !== "") {
                fetch(API_PATH + '/users/' + localStorage.getItem('userId') + '/transactions', requestOptions)
                    .then(response => response.json())
                    .then(res => {
                        if (res.status) {
                            check = true;
                        } else {
                            check = false;
                        }

                    });

                var delayInMilliseconds = 10000; //1 second

                setTimeout(function () {
                    //your code to be executed after 1 second
                }, delayInMilliseconds);

            }


        })


        window.location.href = "/wallet"


    }


    handleChange = (state) => {
        this.setState({ UserList: state.selectedRows });
    };


    render() {
        let title = '';

        if (localStorage.getItem('permission') === 'ministry') {
            title = "Ministry Wallet";
        }
        else if (localStorage.getItem('permission') === 'heathcenter') {
            title = "Health Center Wallet";

        } else if (localStorage.getItem('permission') === 'cashpoint') {
            title = "Cashpoint Wallet";

        } else if (localStorage.getItem('permission') === 'mother') {
            title = "Mother Wallet";
        } else if (localStorage.getItem('permission') === 'admin') {
            title = "Admin Wallet";
        }
        return (
            <div >
                <Header title={title} />
                <div className='margin-header'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-6'>
                                <Card sx={{ minWidth: 275 }}>
                                    <CardContent>
                                        <Typography variant="h5" component="div">
                                            Deposit to wallet
                                        </Typography>
                                        <br></br>
                                        <div className="input-group">
                                            <span className="input-group-text">Amount:</span>
                                            <input type="number" style={{ textAlign: 'center' }}
                                                value={this.state.amount}
                                                onChange={(e) => this.setState({ amount: e.target.value })}
                                                className="form-control" />
                                            <span className="input-group-text">ETH</span>
                                        </div>

                                        <br />
                                        <div className="mb-3">

                                            <button type="button" onClick={() => this.Deposit()} className="btn btn-primary">Deposit</button>



                                        </div>

                                    </CardContent>

                                </Card>
                            </div>
                            <div className='col-6'>


                                <DataTable
                                    noHeader
                                    progressPending={this.state.loading}
                                    progressComponent={<Circular />}
                                    columns={columns(this.deleteOne)}
                                    data={this.state.user}
                                    pagination
                                    striped={true}
                                    highlightOnHover={true}
                                    paginationServer={false}
                                    sortIcon={sortIcon}
                                    paginationTotalRows={value}
                                    onChangeRowsPerPage={this.handlePerRowsChange}
                                    onChangePage={this.handlePageChange}
                                    selectableRows
                                    selectableRowsComponent={Checkbox}
                                    onSelectedRowsChange={this.handleChange}
                                />


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
