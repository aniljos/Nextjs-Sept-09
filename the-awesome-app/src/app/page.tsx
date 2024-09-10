import Image from "next/image";
import styles from "./page.module.css";
import Message from "@/components/Message";
import Counter from "@/components/Counter";
//import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h2>Nextjs React Application</h2>

      <Message text="Hello React11" color="blue"/>
      <Message text="Hello Next"/>

      <Counter initialValue={5}/>
      <Counter initialValue={20}/>
    </main>
  );
}
