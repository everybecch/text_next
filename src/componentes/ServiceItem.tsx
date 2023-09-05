import React, { useState } from 'react';
import styles from '../styles/Home.module.css';

interface ServiceItemProps {
  service: {
    name: string;
    status: string;
  };
}

const ServiceItem: React.FC<ServiceItemProps> = ({ service }) => {
  const [status, setStatus] = useState(service.status);

  // atualizar o status. e.s
  const updateStatus = () => {
    let newStatus = '';

    switch (service.name) {
      case 'SERPRO':
        newStatus = status === 'bom' ? 'excelente' : 'bom';
        break;
      case 'Conselho Nacional De Justiça':
        newStatus = 'fora do ar';
        break;
      case 'Tribunal De Justiça':
        newStatus = status === 'apresentando lentidão' ? 'bom' : 'apresentando lentidão';
        break;
      case 'Supremo Tribunal Federal':
        newStatus = status === 'bom' ? 'excelente' : 'bom';
        break;
      default:
        newStatus = status; 
    }

    setStatus(newStatus);
  };

  return (
    <div className={`${styles.serviceItem} ${styles.flexContainer}`}>
      <div className={styles.flexItem}>
        <h3>{service.name}</h3>
        <p>Status: {status}</p>
      </div>
      <div className={styles.flexItem}>
        <button className={`btn btn-light btn-sm ${styles.updateButton}`} onClick={updateStatus}>
          Atualizar Status
        </button>
      </div>
    </div>
  );
};

export default ServiceItem;
