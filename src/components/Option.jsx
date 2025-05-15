function Option({ selected, setSelected, title }) {

    function handleClick() {
        setSelected(title);
    }

    return (
        <div onClick={handleClick} className="w-full h-[2rem] flex justify-center items-center text-center cursor-pointer">
            <span className={`option ${selected === title ? 'selected' : ''}`}>{title}</span>
        </div>
    );
}

export default Option;