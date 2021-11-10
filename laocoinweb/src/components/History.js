import * as React from 'react';
import { Component } from 'react'
import { API_PATH } from '../Type';
import TransectionDetails from './TransectionDetails';

export default class History extends Component {


    state = {
        data: []
    }

    componentDidMount() {
        if (localStorage.getItem('permission') === 'admin') {
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'x-access-token': localStorage.getItem('token') },

            };

            fetch(API_PATH + '/users/' + localStorage.getItem('userId') + "/transactions/list", requestOptions)
                .then(response => response.json())
                .then(res => {
                    this.setState({ data: res });
                });
        } else {
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'x-access-token': localStorage.getItem('token') },

            };

            fetch(API_PATH + '/users/' + localStorage.getItem('userId') + "/transactions", requestOptions)
                .then(response => response.json())
                .then(res => {
                    this.setState({ data: res });
                });
        }
    }

    render() {
        return (
            <div>

                <table class="table  table-hover">
                    <thead>
                        <tr>
                            <th scope="col">From</th>
                            <th scope="col">To</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Details</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.length > 0 && this.state.data.map((item, index) => {

                            return (
                                <tr key={index}>
                                    <td>{item.from}</td>
                                    <td>{item.to}</td>
                                    <td>{item.value / 1000000000000000000}</td>
                                    <td>{<TransectionDetails data={item} />}</td>

                                </tr>
                            )
                        })}
                    </tbody>
                </table>

            </div>
        )
    }
}
