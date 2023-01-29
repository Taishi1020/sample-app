import {FC, useState} from "react";

type Props = {
    text: string;
    func: (e: React.ChangeEvent<HTMLInputElement>) => void
}


interface user {
    userId: string,
    userName: string,
    age: number
}

const userInfo: user = {
    userId: '1',
    userName: "Taishi",
    age: 23
}

function func() {
    return userInfo;
}

console.log(func());

export const Header = (props: Props) => {
    const {text, func} = props

    return (
        <div>
            <h1> This Header</h1>
            <input
                type="text"
                value={text}
                onChange={func}
            />
        </div>
    )
}
export default Header;