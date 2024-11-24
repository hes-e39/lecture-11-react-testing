const List = ({ title = 'My List', items = [] }: { title?: string; items?: string[] }) => {
    return (
        <div className="border border-gray-300 p-4 rounded-lg w-fit">
            <h3 className="text-lg font-bold">{title}</h3>
            <ul className="">
                {items.map((item, i) => {
                    return (
                        <li key={i} className="p-2 bg-gray-100 rounded-lg my-2 w-[150px] text-gray-600 flex gap-2 truncate">
                            <div className="font-bold">{i + 1}.</div>
                            <div className="">{item}</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default List;
