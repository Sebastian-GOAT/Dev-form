import { useState } from "react";
import Form from "./components/Form.jsx";
import Landing from "./components/Landing.jsx";

function App() {

    const [status, setStatus] = useState('not-sent');
    const [message, setMessage] = useState('');

    return (
        <main className="w-full h-screen flex justify-center items-center">
            {status === 'not-sent' ? <Form setMessage={setMessage} setStatus={setStatus} /> : <Landing setStatus={setStatus} message={message} />}
        </main>
    );
}

export default App;