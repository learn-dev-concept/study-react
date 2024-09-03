import '../styles/app.css';

// React에서 태그에 class를 적용하려면 className 속성을 사용해야 한다.
// 또한, 인라인 스타일 속성을 쓰고자 한다면 아래와 같이 {{}} 안에 객체안의 변수를 선언하듯 설정해야 한다.
export default function Test() {
    return (
        <div className="app">
            <div style={{
                width: '200px',
                height: '300px',
                border: '1px solid red'
            }}>
            </div>
        </div>
    );
}