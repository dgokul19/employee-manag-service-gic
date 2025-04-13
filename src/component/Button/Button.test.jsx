import { vi } from 'vitest';


import { render, screen, fireEvent } from '@testing-library/react';
import Button from './index';

test('Button Component Test', () => {
    render(<Button>Label</Button>);
    expect(screen.getByText(/Label/i)).toBeInTheDocument();
});

test('Button Component Test Function click test', () => {
    const handleClick = vi.fn();

    render(<Button onClick={handleClick}>Label</Button>);
    const SubmitBtn = screen.getByRole('button', { name: /Label/i });
    fireEvent.click(SubmitBtn);

    expect(handleClick).toHaveBeenCalledTimes(1);

});

