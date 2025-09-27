

import React from "react";



type ListProps = {
    items: string[];
};

const List: React.FC<ListProps> = (props) => {
    const { items } = props;
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
};

export default List;