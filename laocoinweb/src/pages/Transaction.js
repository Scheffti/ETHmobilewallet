import React, { Component } from 'react'
import TransectionDetails from '../components/TransectionDetails';
import { API_PATH } from '../Type';

export default class Transaction extends Component {
    constructor(props) {
        super(props);

        this.user_id = this.props.match.params.user_id;

    }
    state = {
        data: []
    }

    componentDidMount() {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'x-access-token': localStorage.getItem('token') },

        };

        fetch(API_PATH + '/users/' + this.user_id.replace(':', '') + '/transactions', requestOptions)
            .then(response => response.json())
            .then(res => {
                this.setState({ data: res });
            });
    }


    render() {
        console.log(this.state.data);
        return (
            <div>
                <table className="table  table-hover">
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
