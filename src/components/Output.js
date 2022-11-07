import ReactMarkdown from 'react-markdown'
const Output = (props) => {

    return (
        <>
            <div className="outputBox">
                <h2 className='header2'>Output</h2>
                <ReactMarkdown className="output">{props.data}</ReactMarkdown>
            </div>
        </>
    )
}

export default Output;