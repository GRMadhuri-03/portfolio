import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  CardMedia,
} from '@material-ui/core';
import styles from './Projects.module.css';
//import project1 from "../../img/COVID-19-Tracker.png";
//import project2 from "../../img/Keeper-App.png";

function Projects() {
  return (
    <div id="projects" className={styles.container}>
      <h1 className={styles.heading}>Projects</h1>
      <Grid container spacing={4} justifyContent="center">
        <Grid item component={Card} xs={8} md={4} className={styles.project}>
          <CardContent>
            <Typography gutterBottom>
              <a
                href="https://file-sharing-applicaton.netlify.app/"
                target="_blank"
              >
                <Typography className={styles.icon} color="textSecondary">
                  <h5>File Sharing Application</h5>
                </Typography>
                <CardMedia
                  component="img"
                  height="200"
                  image={'https://i.postimg.cc/BnNpLVjf/Screenshot-362.png'}
                  alt="project"
                />
              </a>
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              className={styles.projectText}
            >
              An application using ReactJS,Node JS,Express JS and MongoDB
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              className={styles.projectText}
            >
              A MERN stack application that generates a shareable link and that
              can be easily shared to anyone.Node.js and Express.js used for
              server-side logic and API handling
            </Typography>
            <div className={styles.iconContainer}>
              <a
                className={styles.icon}
                href="https://file-sharing-applicaton.netlify.app/"
                target="_blank"
              >
                <i class="fas fa-globe fa-2x"></i>
              </a>{' '}
              <a
                className={styles.icon}
                href="https://github.com/GRMadhuri-03/sharing-files"
                target="_blank"
              >
                <i class="fab fa-github fa-2x"></i>
              </a>
            </div>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={8} md={4} className={styles.project}>
          <CardContent>
            <Typography gutterBottom>
              <a href="https://giithub-profile.netlify.app/" target="_blank">
                <Typography
                  className={styles.icon}
                  color="textSecondary"
                  gutterBottom
                >
                  <h5>Github Profiles API based Application</h5>
                </Typography>
                <CardMedia
                  component="img"
                  height="200"
                  image={'https://i.postimg.cc/zBn4Dh3L/Screenshot-352.png'}
                  alt="project"
                />
              </a>
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              className={styles.projectText}
            >
              An application using HTML, CSS, Javascript
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              className={styles.projectText}
            >
              Web application that allows users to enter a GitHub username and
              displays list of all repositories of user.Application used GitHub
              API to fetch the necessary data and display it in a user-friendly
              interface.
            </Typography>
            <div className={styles.iconContainer}>
              <a
                className={styles.icon}
                href="https://giithub-profile.netlify.app/"
                target="_blank"
              >
                <i class="fas fa-globe fa-2x"></i>
              </a>{' '}
              <a
                className={styles.icon}
                href="https://github.com/GRMadhuri-03/Github_Profiles_app"
                target="_blank"
              >
                <i class="fab fa-github fa-2x"></i>
              </a>
            </div>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={8} md={4} className={styles.project}>
          <CardContent>
            <Typography gutterBottom>
              <a href="https://grm3.netlify.app/" target="_blank">
                <Typography
                  className={styles.icon}
                  color="textSecondary"
                  gutterBottom
                >
                  <h5>Tic-Tac-Toe</h5>
                </Typography>
                <CardMedia
                  component="img"
                  height="200"
                  image={'https://i.postimg.cc/8cy73jR3/Screenshot-354.png'}
                  alt="project"
                />
              </a>
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              className={styles.projectText}
            >
              An application using HTML, CSS, Javascript and ReactJS
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              className={styles.projectText}
            >
              Tic-Tac-Toe game with two players taking turns on a grid.
              Algorithmic thinking is applied to implement the game’s core logic
              and handling user moves.UI/UX design focuses on creating an
              visually appealing user interface that enhances the user
              experience.
            </Typography>
            <div className={styles.iconContainer}>
              <a
                className={styles.icon}
                href="https://grm3.netlify.app/"
                target="_blank"
              >
                <i class="fas fa-globe fa-2x"></i>
              </a>{' '}
              <a
                className={styles.icon}
                href="https://github.com/GRMadhuri-03/Tic-tac-toe"
                target="_blank"
              >
                <i class="fab fa-github fa-2x"></i>
              </a>
            </div>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={8} md={4} className={styles.project}>
          <CardContent>
            <Typography gutterBottom>
              <a
                href="https://grmadhuri-03.github.io/Random_Choice_Picker/"
                target="_blank"
              >
                <Typography
                  className={styles.icon}
                  color="textSecondary"
                  gutterBottom
                >
                  <h5>Random Choice Picker</h5>
                </Typography>
                <CardMedia
                  component="img"
                  height="200"
                  image={'https://i.postimg.cc/ZR6Nnbrs/Screenshot-357.png'}
                  alt="project"
                />
              </a>
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              className={styles.projectText}
            >
              An application using HTML, CSS, Javascript
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              className={styles.projectText}
            >
              This web application uses random selector which choose randomly
              between comma-delimited choices user types into the text
              area.Constructed interactive page elements using JavaScript.
            </Typography>
            <div className={styles.iconContainer}>
              <a
                className={styles.icon}
                href="https://grmadhuri-03.github.io/Random_Choice_Picker/"
                target="_blank"
              >
                <i class="fas fa-globe fa-2x"></i>
              </a>{' '}
              <a
                className={styles.icon}
                href="https://github.com/GRMadhuri-03/Random_Choice_Picker"
                target="_blank"
              >
                <i class="fab fa-github fa-2x"></i>
              </a>
            </div>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}

export default Projects;
