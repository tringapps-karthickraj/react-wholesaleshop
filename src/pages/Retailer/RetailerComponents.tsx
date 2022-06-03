import React from 'react';
import { Grid} from '@mui/material';
import RetailerComponent1 from './Components/RetailerComponent1';
import RetailerComponent2 from './Components/RetailerComponent2';
import RetailerComponent3 from './Components/RetailerComponent3';
import './RetailerComponent.scss';
const RetailerComponent = () => {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={4} className="borderrig">
                    <RetailerComponent1/>
                </Grid>
                <Grid item xs={4} className="borderrig">
                    <RetailerComponent2/>
                </Grid>
                <Grid item xs={4} className="borderrig">
                    <RetailerComponent3/>
                </Grid>
            </Grid>
        </>
    );
};

export default RetailerComponent;