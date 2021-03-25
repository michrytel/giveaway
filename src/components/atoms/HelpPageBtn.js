const HelpPageBtn = ({paginate, number, currentPage}) => {
    let clsName = 'help__pagination-link';

    if (number === currentPage) {
        clsName = `help__pagination-link active`;
    }
    return (
        <li key={number} className="help__pagination-item">
            <a onClick={() => paginate(number)} className={clsName}>
                {number}
            </a>
        </li>
    )
}
export default HelpPageBtn