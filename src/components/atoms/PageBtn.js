const PageBtn = ({number, handleclick}) => {
    let clsName = 'page__btn';
    return (
        <button type='button' className={clsName} onClick={handleclick} value={number}>
            {number}
        </button>
    );
}
export default PageBtn