import { useState } from 'react';

const List = ({ title }: { title?: string }) => {
    const [items, setItems] = useState<string[]>([]);
    const [value, setValue] = useState('');

    const [showSaved, setShowSaved] = useState(false);

    const handleSave = () => {
        fetch('/items', {
            method: 'POST',
            body: JSON.stringify({ items }),
        }).then(res => {
            if (res.status === 201) {
                setShowSaved(true);
            }
        });
    };

    return (
        <div className="border border-gray-300 p-4 rounded-lg w-fit bg-gray-50 flex flex-col gap-4">
            <div className="text-lg font-bold">{title || 'My List'}</div>
            <ul>
                {items.map((item, i) => {
                    return (
                        <li key={i} className="p-2 bg-gray-100 rounded-lg my-2 w-[150px] text-gray-600 flex gap-2 truncate">
                            <div className="font-bold">{i + 1}.</div>
                            <div className="">{item}</div>
                        </li>
                    );
                })}
            </ul>
            <div className="flex gap-2">
                <input id="new-item" className="p-2" value={value} onChange={e => setValue(e.target.value)} placeholder="Add an item" />
                <button
                    className="p-2 bg-blue-500 text-white rounded-lg"
                    onClick={() => {
                        setItems([...items, value]);
                        setValue('');
                    }}
                >
                    Add
                </button>
            </div>
            <button className="p-2 bg-green-500 text-white rounded-lg" onClick={handleSave}>
                Save
            </button>
            {showSaved && <p>Saved List!</p>}
        </div>
    );
};

export default List;
