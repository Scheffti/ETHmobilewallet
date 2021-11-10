import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import QRCode from "react-qr-code";
export default function TransectionDetails(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Details
            </Button>
            <Dialog
                maxWidth={'lg'}
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >

                <DialogContent>
                    <ul>
                        <li>
                            blockHash : {props.data.blockHash}
                        </li>
                        <li>
                            blockNumber : {props.data.blockNumber}
                        </li>
                        <li>
                            from : {props.data.from}
                        </li>
                        <li>
                            gas : {props.data.gas}
                        </li>
                        <li>
                            hash : {props.data.hash}
                        </li>
                        <li>
                            to : {props.data.to}
                        </li>
                        <li>
                            value : {props.data.value / 1000000000000000000}
                        </li>
                        <li>
                            gasPrice : {props.data.gasPrice}
                        </li>
                        <li>
                            r : {props.data.r}
                        </li>
                        <li>
                            s : {props.data.s}
                        </li>

                    </ul>
                </DialogContent>
            </Dialog>
        </div>
    );
}
