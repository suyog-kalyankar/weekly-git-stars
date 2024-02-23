import React from 'react';
import { render, screen } from '@testing-library/react';
import Loader from './Loader';

describe('Loader Component', () => {
  it('renders without crashing', () => {
    render(<Loader />);
  });

  it('renders a Box component', () => {
    render(<Loader />);
    const boxElement = screen.getByRole('progressbar');
    expect(boxElement).toBeInTheDocument();
  });

  it('renders a CircularProgress component inside the Box', () => {
    render(<Loader />);
    const circularProgressElement = screen.getByRole('progressbar');
    expect(circularProgressElement).toBeInTheDocument();
  });
});
