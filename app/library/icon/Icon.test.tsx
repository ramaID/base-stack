import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Icon, IconSize } from './Icon';

describe('Icon component', () => {
	it('should render with correct href in use element', () => {
		const { container } = render(<Icon name="ShoppingCart" />);
		const use = container.querySelector('use');
		expect(use?.getAttribute('href')).toContain('#ShoppingCart');
	});

	it('should render with xs size', () => {
		const { container } = render(<Icon name="ShoppingCart" size="xs" />);
		const svg = container.querySelector('svg');
		expect(svg?.getAttribute('width')).toBe(IconSize.xs);
		expect(svg?.getAttribute('height')).toBe(IconSize.xs);
	});
});
