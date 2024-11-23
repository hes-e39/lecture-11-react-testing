const List = ({ title = 'My List', items = [] }: { title?: string; items?: string[] }) => {
    return (
        <div>
            <h3>{title}</h3>
            <ul>
                {items.map((item, i) => {
                    return <li key={i}>{item}</li>;
                })}
            </ul>
        </div>
    );
};

export default List;
