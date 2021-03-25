const HelpPageBtns = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];
    for (let i=1; i<=Math.ceil(totalPosts/postsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <ul className="help__pagination">
            {pageNumbers.map(number => (
                <li key={number} className="help__pagination-item">
                    <a onClick={() => paginate(number)} className="help__pagination-link active">
                        {number}
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default HelpPageBtns