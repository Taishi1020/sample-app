import Header from "./components/header";
import {useState} from "react";
import Link from "next/link";

const HomePage = () => {
    const [text, setText] = useState("")
    const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)
    return (
        <div>
            <Header text={text} func={onChangeText}/>
            <Link href="components/article">記事のページに移動する</Link>
            <section>
            </section>
        </div>
    )
}

export default HomePage;
