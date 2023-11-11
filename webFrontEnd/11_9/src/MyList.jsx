export default function MyList(){
    const items = [
        {name: 'Item 1', id: 0},
        {name: 'Item 2', id: 1},
        {name: 'Item 3', id: 2},
        {name: 'Item 4', id: 3},
    ];

    const mappedItems = items.map(item => 
        <li key={item.id}>{item.name}</li>
    );
    return(
        <ul>{mappedItems}</ul>
    );
}