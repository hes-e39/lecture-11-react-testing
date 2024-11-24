import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';

import List from './2_List';

describe('A List', () => {
    it('should render custom title', async () => {
        const { getByText } = render(<List title="My custom list" />);

        await expect.element(getByText('My custom list')).toBeInTheDocument();
    });

    it('should render list items', async () => {
        const data = ['item 1', 'item 2', 'item 3'];
        const { getByText } = render(<List items={data} />);

        await expect.element(getByText('item 1')).toBeInTheDocument();
        await expect.element(getByText('item 2')).toBeInTheDocument();
        await expect.element(getByText('item 3')).toBeInTheDocument();
    });

    // snapshot tests
    it('should render list (snapshot)', () => {
        const result = render(<List title="My custom list" />);
        expect(result).toMatchSnapshot();

        // // update with some different props
        const result2 = render(<List items={['item 1', 'item 2', 'item 3']} />);
        expect(result2).toMatchSnapshot();
    });
});
