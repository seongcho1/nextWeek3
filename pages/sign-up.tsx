import BaseLayout from "../components/BaseLayer";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from "../net/auth";
import { useState } from "react";
import { useRouter } from "next/router";

export default function SignUp() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const submit = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => router.push('/'))
      .catch(() => alert('회원가입에 실패하였습니다.'))
  }


  return (
    <BaseLayout>
      <div>
        <input type="email" placeholder="이메일"
          value={email} onChange={event => setEmail(event.target.value)}
        />
      </div>
      <div>
        <input type="password" placeholder="비밀번호"
          value={password} onChange={event => setPassword(event.target.value)}
        />
      </div>
      <div>
        <button onClick={submit}>회원 가입</button>
      </div>
    </BaseLayout>
  );
}