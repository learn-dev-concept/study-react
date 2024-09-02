function Button() {
    return <button>Hello</button>;
}

// React는 주로 JSX 문법을 사용하여 리턴하는데 여러 태그를 한 번에 multiple로 리턴할 수 없고
// Div 태그로 Wrapping 하거나 <> </>을 사용해야 한다.
// 또한, React Component는 무조건 첫 글자가 대문자로 시작해야 컴포넌트로 인식한다. --> <'B'utton />
export default function Test() {
    return <div>
            <h3>
                hi
            </h3>
            <Button />
            </div>;
}