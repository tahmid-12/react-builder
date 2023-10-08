import React from 'react';
import styled from 'styled-components';
import { Container, Grid } from '@mui/material';

const Feature = () => {
    return (
        <DIV>
            <Container maxWidth="lg">
                <Grid container spacing={2} sx={{
                    alignItems: "center"
                }}>
                    <Grid item md={4} xs={12} sx={{ 
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                     }}>1</Grid>
                    <Grid item md={4} xs={12} sx={{ 
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                     }}>2</Grid>
                    <Grid item md={4} xs={12} sx={{ 
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                     }}>3</Grid>
                </Grid>
            </Container>
        </DIV>
    )
}

const DIV = styled.div`
    transform: translateY(-50%);
    @media (max-width: 767px){
        transform: none;
        padding: 90px 0;
    }
`;

export default Feature