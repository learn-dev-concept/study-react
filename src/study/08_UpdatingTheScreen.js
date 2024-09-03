import { useState } from 'react';
 

/*

[Note]
- 일반적으로 React에서 제공하는 함수 중 use로 시작하는 함수들은 모두 React Hook 이다.

- 여기서 사용하는 useState 또한 React에 내장된 Hook으로 상태를 저장하고자 할 때 사용한다.

- 또한, React에서 제공하는 Hook을 결합하여 Custom Hook을 만들 수도 있다.

- 그리고 React Hook은 다른 함수보다 제한적인 부분이 있는데 Hook은 컴포넌트 또는 다른 훅에서만 사용할 수 있고 항상 최상단에서 호출되어야 한다.

- 따라서, 조건문이나 반복문에서 Hook을 사용하고자 한다면 별도의 컴포넌트로 뽑아내서 해당 컴포넌트의 최상단에서 사용해야 한다.

# 문법
const [state, setState] = useState(initialState)

*/

// Single Component --> 해당 컴포넌트를 여러 개 로드하면 상태는 각각 유지됨을 주목!
export default function Test() {
    const [count, setCount] = useState(1);

    function handleClick() {
        setCount(count => update(count, 3));
    }

    function update(current, count) {
        return current * count;
    }

    return  <button onClick={handleClick}>
                Click {count} me.
            </button>
}


// Multiple Component (Sharing Data) --> 위 방식과 다르게 한 컴포넌트에서 사용하면 상태를 공유함

/* example 1 (without props) */
/*

export default function Test() {
    const [count, setCount] = useState(1);

    function handleClick() {
        setCount(count => update(count, 3));
    }

    function update(current, count) {
        return current * count;
    }

    return  <>
                <button onClick={handleClick}>
                    Click {count} me
                </button>
                <button onClick={handleClick}>
                    Click {count} me
                </button>
            </>
}

*/

/* example 2 (with props) */
/*

export default function Test() {
    const [count, setCount] = useState(1);

    function handleClick() {
        setCount(count => update(count, 3));
    }

    function update(current, count) {
        return current * count;
    }

    // 이처럼 컴포넌트 함수에 인자를 주어서 호출할 수 있는데, 해당 인자를 props라고 부른다.
    return  <>
                <MyButton count={count} handler={handleClick} />
                <MyButton count={count} handler={handleClick} />
            </>
}

function MyButton({ count, handler} ) {
    return  <button onClick={handler}>
                Click {count} times
            </button>
}
*/








