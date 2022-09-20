import BaseLayout from "../components/BaseLayer";
import { collection, addDoc } from "@firebase/firestore";
import auth from '../net/auth';
import db from "../net/db";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "@firebase/auth";



export default function Create() {
  const [subject, setSubject] = useState();
  const [content, setContent] = useState();
  const [user, setUser] = useState();
  const router = useRouter();
  const submit = async () => {
    await addDoc(collection(db, 'articles'), {
      subject,
      content,
      author: user.email,
      created_at: new Date().getTime(),
    });
    alert("저장되었습니다.");
    setSubject('');
    setContent('');
    router.push('/');
  }

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setUser(user);
    })
  }, [])



  return (
    <BaseLayout>
      <h1 className="text-2xl font-bold">글쓰기</h1>
      <form onSubmit={(event) => {
        event.preventDefault();
        return false;
      }}>
        <div className="mb-4">
          <input className="border-b w-full"
            type="text" placeholder="제목을 입력하세요."
            value={subject}
            onChange={event => setSubject(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <textarea className="border-b w-full"
            placeholder="내용을 입력하세요."
            value={content}
            onChange={event => setContent(event.target.value)}
          ></textarea>
        </div>
        <div>
          <button className="border p-2"
            onClick={submit}
          >
            전송
          </button>
        </div>
      </form>
    </BaseLayout>
  );

}