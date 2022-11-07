import { useState } from "react";
import Output from "./Output";

const Editor = () => {

    const [data, setData] = useState("");
    // console.log(data);
    return (
        <>
            <div className="editorBox">
                <h2 className="header2">Markdown Editor</h2>
                <textarea name="textArea" onChange={(e) => setData(e.target.value)} rows="40" cols="50"></textarea>
            </div>
            <Output data={data} />




        </>

    )
}

export default Editor;