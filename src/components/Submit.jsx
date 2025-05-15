function Submit({ setMessage, setStatus, selected }) {

    async function handleClick() {
        try {
            const options = {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    selection: selected
                })
            };

            const res = await fetch('https://dev-form-backend.onrender.com/postform', options);

            const data = await res.json();
            console.log(data);
            setMessage(data.message);
            setStatus('sent');
        }
        catch(err) {
            console.error(err);
        }
    }

    return (
        <button onClick={handleClick} className="!p-2 !mt-8 bg-purple-900 text-white rounded-xl cursor-pointer border-0 transition-colors duration-200 hover:bg-purple-600 active:bg-purple-800 outline-0">
            Submit
        </button>
    );
}

export default Submit;