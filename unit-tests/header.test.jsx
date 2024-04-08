import React from 'react';
import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';
import Header from '../src/components/Header';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Header', () => {
  it('renders the "localhost" link correctly', () => {
    useRouter.mockReturnValue({ push: jest.fn() });
    render(<Header />);
    const localhostLink = screen.getByRole('link', { name: 'localhost' });
    expect(localhostLink).toBeInTheDocument();
    expect(localhostLink).toHaveAttribute('href', '/home');
  });

  it('renders the "about us" link correctly', () => {
    useRouter.mockReturnValue({ push: jest.fn() });
    render(<Header />);
    const aboutUsLink = screen.getByRole('link', { name: 'about us' });
    expect(aboutUsLink).toBeInTheDocument();
    expect(aboutUsLink).toHaveAttribute('href', '/about');
  });

//   it('opens the dropdown menu when the burger icon is clicked', () => {
//     useRouter.mockReturnValue({ push: jest.fn() });
//     render(<Header />);

//     // Find the burger menu button
//     const burgerMenuButton = screen.getByRole('button', { 'aria-label': 'burgerMenu' });
//     expect(burgerMenuButton).toBeInTheDocument();

//     // Check if the dropdown list is initially hidden
//     const dropdownList = screen.getByRole('listitem', { name: 'burgerMenu' });
//     // expect(dropdownList).toHaveAttribute('tabIndex', '0');
//     expect(dropdownList).not.toBeVisible();

//     // Click the burger menu button
//     fireEvent.click(burgerMenuButton);

//     // Check if the dropdown list is now visible
//     expect(dropdownList).toBeVisible();
//   });
});