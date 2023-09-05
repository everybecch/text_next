import React from 'react';
import Panel from '../componentes/Panel';
import servicesData from '../../public/services.json';
import styles from "../styles/Home.module.css";
import 'bootstrap/dist/css/bootstrap.min.css'; 
function IndexPage() {
  return (
    <div className={`${styles.container} text-center`}>
      <div className={styles.panelContainer}>
        <h1 className={styles.title}>Defensoria do Estado do RS</h1>
        <Panel services={servicesData.services} />
      </div>
    </div>
  );
}

export default IndexPage;
