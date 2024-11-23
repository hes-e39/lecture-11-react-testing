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
        <div>
            <h3>{title || 'My List'}</h3>
            <ul>
                {items.map((item, i) => {
                    return <li key={i}>{item}</li>;
                })}
            </ul>
            <div>
                <input id="new-item" value={value} onChange={e => setValue(e.target.value)} />
                <button
                    onClick={() => {
                        setItems([...items, value]);
                        setValue('');
                    }}
                >
                    Add
                </button>
            </div>
            <button onClick={handleSave}>Save</button>
            {showSaved && <p>Saved List!</p>}
        </div>
    );
};

export default List;
