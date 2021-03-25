const HelpSingle = ({name, target, what}) => {
    return (
        <>
            <div className="help__single-details">
                <h3>{name}</h3>
                <p>Purpose and mission: {target}</p>
            </div>
            <div className="help__single-what">
                {what}
            </div>
        </>

    )
}

export default HelpSingle