import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import RepositoryHeader from './RepositoryHeader';
import { RadioBtnGroupProps } from '../types';

jest.mock('../components/RadioBtnGroup', () => ({ radionValues, onBtnChange }: RadioBtnGroupProps) => (
  <div data-testid="radioBtnGroup" onClick={() => onBtnChange(radionValues[0])}>
    RadioBtnGroup
  </div>
));

describe('RepositoryHeader Component', () => {
  const setLanguageMock = jest.fn();
  const onRadioBtnChangeMock = jest.fn();

  const props = {
    language: 'JavaScript',
    setLanguage: setLanguageMock,
    onRadioBtnChange: onRadioBtnChangeMock,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders RepositoryHeader component correctly', () => {
    render(<RepositoryHeader {...props} />);

    expect(screen.getByText('Repositories')).toBeInTheDocument();
    expect(screen.getByText('RadioBtnGroup')).toBeInTheDocument();
    expect(screen.getByLabelText('Seach by language')).toBeInTheDocument();
  });

  it('calls setLanguage on language input change', () => {
    render(<RepositoryHeader {...props} />);

    fireEvent.change(screen.getByLabelText('Seach by language'), { target: { value: 'TypeScript' } });

    expect(setLanguageMock).toHaveBeenCalledWith('TypeScript');
  });

  it('calls onRadioBtnChange on RadioBtnGroup click', () => {
    render(<RepositoryHeader {...props} />);

    fireEvent.click(screen.getByTestId('radioBtnGroup'));

    expect(onRadioBtnChangeMock).toHaveBeenCalledWith("All");
  });
});
