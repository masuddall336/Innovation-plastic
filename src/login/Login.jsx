// import Lottie from "lottie-react";
// import login from "../assets/login.json";

import { useContext } from "react";
import { AuthContext } from "../firebase/AuthContext";

const Login = () => {
    const { singInUser, user } = useContext(AuthContext);
    console.log("user inside login", user?.email);
    if (user ?.email) {
        console.log("user Available");
    } else {
        console.log("user not available");

    }

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        // send data to firebase Auth
        singInUser(email, password)
            .then(ras => {
                console.log(ras);
            })
            .catch(error => {
                console.log(error);

            })

    }
    return (
        <div className="mt-[10%] flex justify-center items-center gap-10">
            <form onSubmit={handleLogin} className="space-y-4">
                <div>
                    <label>Email</label>
                    <br />
                    <input
                        type="email"
                        name="email"
                        placeholder="Input your Email"
                        className="border p-2"
                    />
                </div>

                <div>
                    <label>Password</label>
                    <br />
                    <input
                        type="password"
                        name="password"
                        placeholder="Input your Password"
                        className="border p-2"
                    />
                </div>
                <input type="submit" value='submit' className="bg-[#2e2a2a] w-full py-1 text-amber-50" />
            </form>
            <div className="w-80">
                {/* <Lottie animationData={login} loop={true} /> */}
            </div>
        </div>
    );
};

export default Login;