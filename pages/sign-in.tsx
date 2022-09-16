import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from '../net/auth';
import BaseLayout from "../components/BaseLayer";




export default function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = () => {
    console.log({ email, password });
    signInWithEmailAndPassword(auth, email, password)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.warn(error);
      });
  }

  return (
    <BaseLayout>
      <h1 className="text-2xl font-bold">로그인</h1>
      <div>
        <input
          className="border border-solid border-gray-500 w-full"
          type="text" value={email}
          onChange={event => setEmail(event.target.value)}
        />
      </div>
      <div>
        <input
          className="border border-solid border-gray-500 w-full"
          type="password" value={password}
          onChange={event => setPassword(event.target.value)}
        />
      </div>
      <div>
        <button className="border p-2"
          onClick={submit}

        >로그인</button>
      </div>
    </BaseLayout>
  );
}