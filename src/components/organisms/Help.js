import HelpSingle from "../molecules/HelpSingle";
const Help = ({HelpTitle, state}) => {
    return (
        <div className="help">
            <h2>{HelpTitle}</h2>
            {state.map(el => {
                return (
                    <div className="help__single" key={el.id}>
                        <HelpSingle name={el.title} target={el.goal} what={el.things}/>
                    </div>
                )
            })}

        </div>
    )
}

export default Help
