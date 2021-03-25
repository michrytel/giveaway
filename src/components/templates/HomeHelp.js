import Title from "../atoms/Title";
import HelpBtns from "../molecules/HelpBtns";
import Help from "../organisms/Help";
import {useState} from "react";
import fundations from "../../data/fundations.json";
import HelpPageBtns from "../molecules/HelpPageBtns";
const HomeHelp = () => {
    let [data, setData] = useState("funds")
    let [currentPage, setCurrentPage] = useState(1)
    let [postsPerPage, setPostsPerPage] = useState(3)
    const pagination = (el) => {
        setData(el.target.dataset.info)
        setCurrentPage(1)
    }
    let filtered = fundations.filter((el => el.cat === data))
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filtered.slice(indexOfFirstPost, indexOfLastPost)
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    const helpTitle = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque delectus deleniti eos inventore ipsum praesentium qui quis repellat sequi, veritatis. Explicabo facilis iusto magni minima nobis optio repellendus. Optio, provident!"
    return (
        <section name="help" className="help__container">
            <Title text="Who are we helping?"/>
            <HelpBtns clicker={pagination}/>
            <Help HelpTitle={helpTitle} state={currentPosts}/>
            <div className="page__btns">
                <HelpPageBtns postsPerPage={postsPerPage} totalPosts={filtered.length} paginate={paginate} currentPage={currentPage}/>
            </div>
        </section>
    )
}

export default HomeHelp