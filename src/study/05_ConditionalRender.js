
function LoginForm() {
    return <div>
                <h3>LoginForm</h3>
           </div>;
} 

function LogoutForm() {
    return <div>
                <h3>LogoutForm</h3>
           </div>;
} 

let isLoggedIn = true;

// case 1
// export default function Test() {
//     return  <div>
//                 {
//                     isLoggedIn ? (<LogoutForm />) : (<LoginForm />)
//                 }
//             </div>;
// }

// case 2
export default function Test() {
    return  <div>
                {
                    isLoggedIn ? 
                    <div>
                        <h3>LogoutForm</h3>
                    </div> 
                    : 
                    <div>
                        <h3>LoginForm</h3>
                    </div>
                }
            </div>;
}




