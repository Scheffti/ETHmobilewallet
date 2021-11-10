import { Button, Card } from '@mui/material';
import React, { Component } from 'react'
import Balance from '../components/Balance';
import Deposit from '../components/Deposit';
import Header from '../components/Header'
import History from '../components/History';
import { API_PATH } from '../Type';

export default class Wallet extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'x-access-token': localStorage.getItem('token') },

        };

        fetch(API_PATH + '/users', requestOptions)
            .then(response => response.json())
            .then(res => {
                this.setState({ data: res });
            });
    }


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
            <div>
                <Header title={title} />

                <div className='margin-header'>
                    <div className='container'>
                        <div className='row'>

                            {
                                localStorage.getItem('permission') === 'admin' || localStorage.getItem('permission') === 'ministry' ? (<>
                                    <div className='col-lg-6 col-md-6 col-sm-12'>
                                        <Balance />
                                        <br></br>
                                        <Deposit />
                                    </div>

                                    <div className='col-lg-6 col-md-6 col-sm-12'>
                                        <Card>
                                            <table className="table  table-hover">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Email</th>
                                                        <th scope="col">Permission</th>
                                                        <th scope="col">History</th>


                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.state.data.length > 0 && this.state.data.map((item, index) => {

                                                        return (
                                                            <tr key={index}>
                                                                <td>{item.email}</td>
                                                                <td>{item.permission}</td>
                                                                <td>
                                                                    <a href={`/user/transaction/:${item._id}`}> <button type="button" className="btn btn-primary">transaction</button></a>
                                                                </td>



                                                            </tr>
                                                        )
                                                    })}
                                                </tbody>

                                            </table>


                                        </Card>

                                    </div>


                                </>) : (<>
                                    <div className='col-lg-3 col-md-3 col-sm-12'>
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-sm-12'>
                                        <Balance />
                                        <br></br>
                                        <Deposit />
                                    </div>
                                    <div className='col-lg-3 col-md-3 col-sm-12'>
                                    </div>


                                </>)
                            }
                            <div />
                            <center>
                                <History />
                            </center>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


