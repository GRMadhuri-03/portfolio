import { Typography, Grid, Card, CardContent } from '@material-ui/core';
import styles from './Skills.module.css';
import React from 'react';
//import cplus from "../../images/icons8-c++-96.png";
function Skills() {
  return (
    <div id="skills" className={styles.skillsContainer}>
      <h1 className={styles.skillsHeading}>Skills</h1>
      <Grid container spacing={4} justifyContent="center">
        <Grid item component={Card} xs={4} md={2} className={styles.skill}>
          <CardContent>
            <div className={styles.box}>
              <div className={styles.iconContainer}>
                <i class="fab fa-html5 fa-5x"></i>
              </div>
              <div className={styles.skillsText}>HTML</div>
            </div>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={4} md={2} className={styles.skill}>
          <CardContent>
            <div className={styles.box}>
              <div className={styles.iconContainer}>
                <i class="fab fa-css3-alt fa-5x"></i>
              </div>
              <div className={styles.skillsText}>CSS</div>
            </div>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={4} md={2} className={styles.skill}>
          <CardContent>
            <div className={styles.box}>
              <div className={styles.iconContainer}>
                <i class="fab fa-js fa-5x"></i>
              </div>
              <div className={styles.skillsText}>JavaScript</div>
            </div>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={4} md={2} className={styles.skill}>
          <CardContent>
            <div className={styles.box}>
              <div className={styles.iconContainer}>
                <i class="fab fa-react fa-5x"></i>
              </div>
              <div className={styles.skillsText}>React</div>
            </div>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={4} md={2} className={styles.skill}>
          <CardContent>
            <div className={styles.box}>
              <div className={styles.iconContainer}>
                <i class="fas fa-database fa-5x"></i>
              </div>
              <div className={styles.skillsText}>SQL</div>
            </div>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={4} md={2} className={styles.skill}>
          <CardContent>
            <div className={styles.box}>
              <div className={styles.iconContainer}>
                <img
                  src={'https://i.postimg.cc/KjkpWgLp/icons8-c-96-1.png'}
                  alt="C++ Icon"
                  width="86px"
                  height="86px"
                />
              </div>
              <div className={styles.skillsText}>C++</div>
            </div>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={4} md={2} className={styles.skill}>
          <CardContent>
            <div className={styles.box}>
              <div className={styles.iconContainer}>
                <i class="fab fa-python fa-5x"></i>
              </div>
              <div className={styles.skillsText}>Python</div>
            </div>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}

export default Skills;
