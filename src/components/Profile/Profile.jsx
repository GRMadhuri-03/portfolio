import React from 'react';
import Typical from 'react-typical';
import { Button } from '@material-ui/core';
import styles from './Profile.module.css';

function Profile() {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileParent}>
        <h3>Hello, I'm Madhuri</h3>
        <div className={styles.typical}>
          <Typical
            loop={Infinity}
            steps={['Computer Science Student', 1000, 'Web Developer', 1000]}
          />
        </div>
        <p className={styles.text}>
          Have the ability to build remarkable web applications.
        </p>
        <a
          href="https://drive.google.com/file/d/1rNwLSQDos5QevqMeQQRIamMDOfK_kuyf/view?usp=sharing"
          title="Resume"
          target="_blank"
        >
          <Button variant="outlined" className="btn">
            Get Resume
          </Button>
        </a>
        <div className={styles.downicon}>
          <a className={styles.downicon} href="#aboutme">
            <i class="fas fa-angle-double-down fa-2x"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
