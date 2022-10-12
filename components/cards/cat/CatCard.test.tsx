import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CatCard from './CatCard';

describe('CatCard', () => {
  it('should render', () => {
    const props = {
      title: 'Cat Card',
      description: 'This is a cat card',
      author: 'John Doe',
      tag: 'cat',
    };
    render(<CatCard {...props} />);
    expect(screen.findAllByText('Cat Card')).toBeTruthy();
  });
});
