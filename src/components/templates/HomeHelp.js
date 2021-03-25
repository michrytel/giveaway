import Title from "../atoms/Title";
import HelpBtns from "../molecules/HelpBtns";
import PageBtn from "../atoms/PageBtn";
import Help from "../organisms/Help";
import {useState} from "react";
import fundations from "../../data/fundations.json";

const HomeHelp = () => {
    let [data, setData] = useState("funds")
    const pagination = (el) => {
        setData(el.target.dataset.info)
    }
    let filtered = fundations.filter((el => el.cat === data))

    return (
        <section name="help" className="help__container">
            <Title text="Who are we helping?"/>
            <HelpBtns clicker={pagination}/>
            <Help HelpTitle="LALALAL" state={filtered}/>
            <div className="page__btns">
                <PageBtn number={1}/>
                <PageBtn number={2}/>
            </div>
        </section>
    )
}

export default HomeHelp