import React from 'react';
import styled from 'styled-components';
import { Container, Grid } from '@mui/material';
import People from '../../public/images/slider-img.png';

const Home = () => {
  return (
    <div style={{ backgroundColor: "#d1e3ff" }}>
      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{
          alignItems: "center"
        }}>
          <Grid item md={6} xs={12} ss={{
            width: "100%",
            paddingRight: "15px",
            paddingLeft: "15px"
          }}>
            <TextContainer>
              <Header>
                Repair and <br />
                Maintenance <br />
                Services
              </Header>
              <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui harum voluptatem adipisci. Quos molestiae saepe dicta
                nobis pariatur, tempora iusto, ad possimus soluta hic praesentium mollitia consequatur beatae, aspernatur culpa.
              </Paragraph>
              <Btn>Contact Us</Btn>
            </TextContainer>
          </Grid>
          <Grid item md={6} xs={12} style={{
            display: "flex",
            justifyContent: "center"
          }}>
            <img src={People} style={{
              width: "100%",
              position: "relative",
              width: "100%",
              paddingRight: "15px",
              paddingLeft: "15px"
            }} />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Home


const Header = styled.h1`
    font-size: 40px;
    line-height: 1.2;
    font-weight: bold;
    margin-bottom: 25px;
    color: #0355cc;
`;

const TextContainer = styled.div`
      padding-bottom: 50px;
      @media (max-width: 767px){
        padding-bottom: 45px;
      }
`;

const Paragraph = styled.p`
    color: #444;
    font-size: 15px;
    line-height: 1.5;
    padding-bottom: 16px;
`;

const Btn = styled.a`
    font-family: 'Merriweather Sans', sans-serif;
    text-transform: uppercase;
    padding: 10px 45px;
    background-color: #ff8a1d;
    border: 1px solid #ff8a1d;
    border-radius: 5px;
    color: #ffffff;
    margin-top: 15px;
    &:hover{
      border: 1px solid #ff8a1d;
      background-color: transparent;
      color: #ff8a1d;
    };
`;