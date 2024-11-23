import { useEffect, useState } from 'react';

// stub out fetch call because we have no back-end
const fetch = (_url: string) =>
    Promise.resolve({
        json: () => ({ name: 'Jane Smith', age: 31, address: '123 main st' }),
    });

const User = ({ id }: { id: string }) => {
    const [user, setUser] = useState<{ name: string; age: number | string; address: string } | null>(null);

    // fetch user data
    useEffect(() => {
        const fetchUserData = async (id: string) => {
            const response = await fetch(`/user/${id}`);

            try {
                const user = await response.json();
                setUser(user);
            } catch (_e) {
                setUser({ name: 'Jane Doe', age: 'Unknown', address: 'Unknown' });
            }
        };

        fetchUserData(id);
    }, [id]);

    if (!user) {
        return 'loading...';
    }

    return (
        <details>
            <summary>{user.name}</summary>
            <strong>{user.age}</strong> years old
            <br />
            lives in {user.address}
        </details>
    );
};

export default User;
