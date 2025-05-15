function Landing({ setStatus, message }) {

    function handleClick() {
        setStatus('not-sent');
    }

    return (
        <div style={{ width: 'min(80%, 400px)' }} className="!p-8 h-[225px] rounded-xl flex flex-col justify-evenly items-center shadow-xl/30">
            <h1 className="font-bold text-[1.5rem] text-center">{message}</h1>
            <button className="!p-2 !mt-8 bg-purple-900 text-white rounded-xl cursor-pointer border-0 transition-colors duration-200 hover:bg-purple-600 active:bg-purple-800 outline-0" onClick={handleClick}>Send again</button>
        </div>
    );
}

export default Landing;