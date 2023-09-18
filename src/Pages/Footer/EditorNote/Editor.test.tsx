import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Title from './Title';
import Quote from './Quote';
import EditorName from './EditorName';

describe('Editor components', () => {
  it('renders editor title', () => {
    render(<Title text="Editor Title" />);

    expect(screen.getByText('Editor Title')).toBeInTheDocument();
  });

  it('renders editor quote', () => {
    render(<Quote text="Editor Quote" />);

    expect(screen.getByText('Editor Quote')).toBeInTheDocument();
  });

  it('renders editor name', () => {
    render(<EditorName name="Editor Name" role="Editor Role" />);

    expect(screen.getByText('Editor Name')).toBeInTheDocument();
    expect(screen.getByText('Editor Role')).toBeInTheDocument();
  });
});
