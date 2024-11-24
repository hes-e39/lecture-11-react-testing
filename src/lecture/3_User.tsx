import { useEffect, useState } from 'react';

// stub out fetch call because we have no back-end
// const fetch = (_url: string) =>
//     Promise.resolve({
//         json: () => ({ name: 'Jane Smith', age: 33, address: '123 main st' }),
//     });

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
        <details className="border border-gray-300 p-4 rounded-lg w-fit ">
            <summary className="text-lg font-bold cursor-pointer hover:underline ">{user.name}</summary>
            <div className="text-gray-600 flex gap-2">
                <div className="font-bold">Age:</div> {user.age} years old
            </div>
            <div className="text-gray-600 flex gap-2">
                <div className="font-bold">Address:</div> {user.address}
            </div>
        </details>
    );
};

export default User;
