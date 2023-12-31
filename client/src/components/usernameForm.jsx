import { useState } from "react";
import { Button } from "./button.jsx";

export function UsernameForm() {
    const [username,] = useState(window.localStorage.getItem("username") ?? "")
    const [message, setMessage] = useState('')
    const handleSubmit = evt => {
        evt.preventDefault();
        const formData = new FormData(evt.target);
        const data = Object.fromEntries(formData);
        window.localStorage.setItem("username", data.username);
        setMessage('Username set')
        setTimeout(() => {
            setMessage('')
        }, 1000)
    }

    return (
        <>
            {message && (
                <div className="bg-green-500 rounded-md p-2 text-md mb-3">
                    {message}
                </div>
            )}
            <form onSubmit={handleSubmit}
                className="flex flex-row items-center gap-4"
            >
                <input
                    type="text"
                    name="username"
                    defaultValue={username}
                    placeholder={"Username"}
                    className="bg-gray-700 w-full rounded-md px-4 py-2.5"
                />
                <Button className="flex-shrink-0">Set Username</Button>
            </form>
        </>
    )
}