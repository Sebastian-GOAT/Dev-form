import Option from "./Option.jsx";
import Submit from "./Submit.jsx";
import { useState } from "react";

function Form({ setMessage, setStatus }) {

    const [selected, setSelected] = useState('');

    return (
        <div style={{ width: 'min(80%, 350px)' }} className="!p-8 h-[550px] shadow-xl/30 rounded-xl flex flex-col justify-start items-center">

            <h1 className="font-bold text-[1.3rem] text-center">The easiest programming language for beginners?</h1>

            <div className="!mt-8 w-[50%] h-[300px] border-2 border-solid border-black rounded-xl overflow-y-auto">
                <Option selected={selected} setSelected={setSelected} title="JavaScript" />
                <Option selected={selected} setSelected={setSelected} title="PHP" />
                <Option selected={selected} setSelected={setSelected} title="Ruby" />
                <Option selected={selected} setSelected={setSelected} title="Python" />
                <Option selected={selected} setSelected={setSelected} title="Java" />
                <Option selected={selected} setSelected={setSelected} title="C" />
                <Option selected={selected} setSelected={setSelected} title="C++" />
                <Option selected={selected} setSelected={setSelected} title="C#" />
                <Option selected={selected} setSelected={setSelected} title="Lua" />
                <Option selected={selected} setSelected={setSelected} title="R" />
                <Option selected={selected} setSelected={setSelected} title="Go" />
                <Option selected={selected} setSelected={setSelected} title="Rust" />
                <Option selected={selected} setSelected={setSelected} title="Erlang" />
                <Option selected={selected} setSelected={setSelected} title="F#" />
                <Option selected={selected} setSelected={setSelected} title="Kotlin" />
                <Option selected={selected} setSelected={setSelected} title="Swift" />
                <Option selected={selected} setSelected={setSelected} title="Objective C" />
                <Option selected={selected} setSelected={setSelected} title="Dart" />
                <Option selected={selected} setSelected={setSelected} title="BASIC" />
                <Option selected={selected} setSelected={setSelected} title="Perl" />
                <Option selected={selected} setSelected={setSelected} title="Assembly" />
                <Option selected={selected} setSelected={setSelected} title="GDScript" />
                <Option selected={selected} setSelected={setSelected} title="Other" />
            </div>

            <Submit setMessage={setMessage} setStatus={setStatus} selected={selected} />

        </div>
    );
}

export default Form;