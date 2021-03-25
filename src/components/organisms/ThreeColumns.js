import ThreeColumnsSingle from "../molecules/ThreeColumnsSingle";

const ThreeColumns = () => {
    return (
        <section className="three__columns-container">
            <ThreeColumnsSingle number="10" title="Collected items"/>
            <ThreeColumnsSingle number="5" title="Supported Organizations"/>
            <ThreeColumnsSingle number="7" title="Organized collections"/>
        </section>
    )
}

export default ThreeColumns