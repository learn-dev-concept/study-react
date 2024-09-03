function handleClick() {
    alert("Hello, World");
}

// React Component는 아래와 같이 마크업 랭귀지를 리턴하는 자바스크립트 함수이다.
export default function Test() {
    return (
        <button type="button" onClick={handleClick}>
            Hello
        </button>
    );
}

