function handleClick() {
    alert("hi~~");
}

// 해당 버튼에 onclick 속성을 주는 것이 아니라 JavaScript의 addEventListner()로 등록되는거 같다.
export default function Test() {
    return (
        <button onClick={handleClick}>
            Click
        </button>
    );
}