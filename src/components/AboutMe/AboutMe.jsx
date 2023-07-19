import React from 'react';
import styles from './AboutMe.module.css';
import { Grid, Container } from '@material-ui/core';
//import imageURL from "../../img/profile.jpg"

function AboutMe() {
  return (
    <Container id="aboutme" className={styles.container}>
      <h1 className={styles.heading}>About Me</h1>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={4} lg={3} className={styles.img}>
          <img className={styles.image} src={'https://i.postimg.cc/5NnB8056/00c8c042-ba32-4a86-b908-0254a4e2ca33.jpg'} alt="profile-picture" /> 
        </Grid>
        <Grid item xs={12} md={8} className={styles.details}>
          Hi, Myself Madhuri.
          <br /> I am a Computer Science Engineering undergraduate at National
          Institute of Technology, Raipur. <br />
          I'm a Web developer and I am currently exploring other web
          technologies. <br />I do competitive programming on platforms like{' '}
          <a href="https://www.codechef.com/users/madhuri_2020" target="_blank">
            codechef
          </a>{' '}
          and{' '}
          <a href="https://leetcode.com/Madhuri_03/" target="_blank">
            Leetcode
          </a>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AboutMe;
