import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../../styles/DeployPage.module.css';
import Header from '../../components/Header';

const DeployPage: React.FC = () => {
  const [showEnvFields, setShowEnvFields] = useState(false);

  const toggleEnvFields = () => {
    setShowEnvFields(!showEnvFields);
  };

  return (
    <div className={styles.pageContainer}>
      <Header />
      <div className={styles.deploy}>
        <Head>
          <title>Deploy</title>
          <meta name="description" content="Deploy Application" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className={styles.title}>Deploy</h1>
        <div className={styles.formContainer}>
          <form>
            <div className={styles.formGroup}>
              <label htmlFor="gitRepoUrl" className={styles.label}>Git repository URL</label>
              <input type="text" id="gitRepoUrl" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="appName" className={styles.label}>Application Name</label>
              <input type="text" id="appName" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="port" className={styles.label}>Port</label>
              <input type="text" id="port" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="dockerfileDir" className={styles.label}>Dockerfile dir</label>
              <input type="text" id="dockerfileDir" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <div className={styles.envToggle} onClick={toggleEnvFields}>
                <label className={styles.label}>∨ Environmental Variables</label>
              </div>
              {showEnvFields && (
                <div className={styles.envContainer}>
                  <input type="text" placeholder="Name" className={styles.input}  />
                  <input type="text" placeholder="Value" className={styles.input} />
                  <button type="button" className={`${styles.button} ${styles.addButton}`}>Add</button>
                </div>
              )}
            </div>
            <button type="submit" className={styles.button}>Deploy</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeployPage;
