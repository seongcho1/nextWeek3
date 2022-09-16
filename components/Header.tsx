import { onAuthStateChanged, signOut } from 'firebase/auth';
import auth from "../net/auth";
import { useEffect, useState } from 'react';



function Header() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setUser(user);
    });
  }, []);

  return (
    <header className="mb-9 border-b border-solid border-slate-600 pb-4" >
    </header>
  );


  /*
  
  
      { user && <button onClick={ () => signOut(auth) }> 로그아웃 < /button>}
    {
      !user && <button>로그인 < /button>}
        < /header>
  
  */
}

export default Header;