import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import ServiceItem from '../componentes/ServiceItem';

// Cenario de testes e.s
// Teste de sucesso
test('atualizar o status para "excelente"', () => {
  const service = {
    name: 'SERPRO',
    status: 'bom',
  };

  const { getByText } = render(<ServiceItem service={service} />);

  const updateButton = getByText('Atualizar Status');
  fireEvent.click(updateButton);

  expect(getByText('Status: excelente')).toBeInTheDocument();
});

// Teste de erro
test('atualizar o status para "fora do ar"', () => {
  const service = {
    name: 'Conselho Nacional De Justiça',
    status: 'fora do ar',
  };

  const { getByText } = render(<ServiceItem service={service} />);

  const updateButton = getByText('Atualizar Status');
  fireEvent.click(updateButton);

  expect(getByText('Status: fora do ar')).toBeInTheDocument();
});