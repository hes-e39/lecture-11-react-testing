import { describe, expect, it, vi } from 'vitest';
import { render } from 'vitest-browser-react';

import User from './3_User';

const fakeUser = {
    name: 'Jane Smith',
    age: '55',
    address: '123, Main Street',
};

const fetch = vi.fn(() => {
    return Promise.resolve({ json: () => Promise.resolve(fakeUser) });
});
vi.stubGlobal('fetch', fetch);

describe('A User component', () => {
    it('should render the correct user data', async () => {
        const { getByText } = render(<User id="123" />);

        await expect.element(getByText(fakeUser.name)).toBeInTheDocument();
        await expect.element(getByText(fakeUser.age)).toBeInTheDocument();
        await expect.element(getByText(fakeUser.address)).toBeInTheDocument();
    });
});
