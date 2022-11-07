import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const Output = (props) => {

    const markdown = `${props.data}`;

    return (
        <>
            <div className="outputBox">
                <h2 className='header2'>Output</h2>
                <ReactMarkdown className="output" children={markdown} remarkPlugins={[remarkGfm]} />
            </div>
        </>
    )
}

export default Output;
