
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Input } from '@mui/material';
import { API_PATH } from '../Type';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function Deposit() {

    const [amount, setAmount] = React.useState('')
    const [recipient, setRecipient] = React.useState('')

    const [data, setData] = React.useState({});
    React.useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'x-access-token': localStorage.getItem('token') },

        };

        fetch(API_PATH + '/users/' + localStorage.getItem('userId'), requestOptions)
            .then(response => response.json())
            .then(res => setData(res));
    }, [])


    const Deposit = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'x-access-token': localStorage.getItem('token') },
            body: JSON.stringify({
                "recipient": recipient,
                "token": localStorage.getItem('token'),
                "sender": localStorage.getItem('userId'),
                "amount": amount
            })
        };
        if (recipient !== "") {
            fetch(API_PATH + '/users/' + localStorage.getItem('userId') + '/transactions', requestOptions)
                .then(response => response.json())
                .then(res => {
                    window.location.href = '/wallet'
                });
        }
    }
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    Deposit to wallet
                </Typography>
                <br></br>
                <div className="input-group">
                    <span className="input-group-text">Amount:</span>
                    <input type="number" style={{ textAlign: 'center' }}
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="form-control" />
                    <span className="input-group-text">ETH</span>
                </div>
                <div className="mb-3">
                    <label className="form-label">Account address</label>
                    <input type="text"
                        className="form-control"
                        onChange={(e) => setRecipient(e.target.value)}
                        id="exampleFormControlInput1"
                        placeholder="Account address" />
                </div>
                <br />
                <div className="mb-3">

                    <button type="button" onClick={() => Deposit()} className="btn btn-primary">Deposit</button>

                    {
                        localStorage.getItem('permission') === 'heathcenter' ? (<>
                            <a href={`/transfer/${localStorage.getItem('userId')}`}>  <button type="button" className="btn btn-success">Select account to deposit</button>
                            </a>         </>) : (<>

                            </>)
                    }

                </div>

            </CardContent>

        </Card>
    );
}
