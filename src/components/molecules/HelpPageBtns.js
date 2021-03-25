import HelpPageBtn from "../atoms/HelpPageBtn";
const HelpPageBtns = ({postsPerPage, totalPosts, paginate, currentPage}) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        totalPosts > 3 &&
        <ul className="help__pagination">
            {pageNumbers.map(el => (
                <HelpPageBtn paginate={paginate} currentPage={currentPage} number={el} key={el}/>
            ))}
        </ul>

    )
}
export default HelpPageBtns