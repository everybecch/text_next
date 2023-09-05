import React from 'react';
import ServiceItem from './ServiceItem'; 

interface Service {
  name: string;
  status: string;
}

interface PanelProps {
  services: Service[];
  className?: string;
}

const Panel: React.FC<PanelProps> = ({ services, className }) => {
  return (
    <div className={className}> 
      <h2>Painel de Serviços</h2>
      {services.map((service, index) => (
        <ServiceItem key={index} service={service} />
      ))}
    </div>
  );
};

export default Panel;
