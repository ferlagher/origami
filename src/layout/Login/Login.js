/* import { useEffect, useState } from "react"; */

//const URL = `/.netlify/functions/authentication?email=${email}&pass=${pass}&acton=${action}`;
const URL = `/.netlify/functions/authentication?email=a@h.com&pass=123456&action=login`;

const getToken = async () => {
    try {
        const res = await fetch(URL).then(res => res.json());
        console.log("🚀 ~ file: Login.js ~ line 9 ~ getAuth ~ token", res)

        return res;
    } catch(err) {
        console.log(err);
    };
};

getToken();

export const Login = () => {
/*     const [user, setUser] = useState('');
    setUser(setUser(getToken()));
    //useEffect(() => console.log(user), [user]) */
    return(<section>🐱‍🐉</section>);
};