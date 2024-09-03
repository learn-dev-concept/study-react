const products = [
    { title: 'Cabbage', id: 1},
    { title: 'Apple', id: 2},
    { title: 'Banana', id: 3}
]

// li 태그 속성에 key 값은 유니크한 값을 사용해야 한다. (DB PK값 등)
// 왜냐하면 React에서 나중에 리스트에 항목을 삽입, 삭제 또는 재정렬 할 경우, 무슨 일이 일어났는지 알기 위해 키를 사용하기 때문이다.
const listItems = products.map(product => 
    <li key="{product.id}">
        {product.title}
    </li>
);

export default function Test() {
    return (
        <ul>
            {listItems}
        </ul>
    );
}