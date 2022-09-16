import { onAuthStateChanged, signOut } from 'firebase/auth';
import auth from "../net/auth";
import { useEffect, useState } from 'react';
import Link from 'next/link';

function Header() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setUser(user);
    });
  }, []);

  return (
    <header className="mb-9 border-b border-solid border-slate-600 pb-4" >
      <Link href="/">
        <a className="p-4">Home</a>
      </Link>
      {user && <button onClick={() => signOut(auth)}> 로그아웃 </button>}
      {!user && <Link href="/sign-in">
        <button className="p-4">로그인 </button>
      </Link>}
      {!user && <Link href="/sign-up">
        <button>회원가입 </button>
      </Link>}

    </header>
  );


  /*


        < /header>

      */
}

export default Header;