
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Input } from '@mui/material';
import { API_PATH } from '../Type';

import QR from './QR';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function Balance() {

    const [data, setData] = React.useState("0");
    const [account, setAccount] = React.useState("");
    React.useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'x-access-token': localStorage.getItem('token') },

        };

        fetch(API_PATH + '/users/' + localStorage.getItem('userId'), requestOptions)
            .then(response => response.json())
            .then(res => {
                setData(res.ethereum_account_balance);
                setAccount(res.ethereum_account_address);
            });
    }, [])

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    Current Balance
                </Typography>
                <br></br>
                <div className="input-group">
                    <input
                        type="number"
                        style={{ textAlign: 'center' }}
                        value={data}
                        readOnly
                        className="form-control"
                        aria-label="Dollar amount (with dot and two decimal places)" />
                    <span className="input-group-text">ETH</span>
                </div>
                <div className="mb-3">
                    <label className="form-label">Account Address</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" defaultValue={account} rows="1"></textarea>
                </div>
                <QR data={account} />

            </CardContent>

        </Card >
    );
}
