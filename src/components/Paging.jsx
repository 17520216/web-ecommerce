import { Link } from "react-router-dom";

export default function Paging({ currentPage, totalPage }) {
  function renderPaging() {
    let start = currentPage - 2;
    if (start < 1) start = 1;
    let end = start + 5;
    if (end > totalPage) {
      end = totalPage;
      start = end - 5;
      if (start < 1) start = 1;
    }
    let listPage = [];

    for (let i = start; i <= end; i++) {
      listPage.push(
        <li
          className={`page-item ${currentPage === i ? "active" : ""}`}
          key={i}
        >
          <Link className="page-link" to={`/shop?page=${i}`}>
            {i}
          </Link>
        </li>
      );
    }
    return listPage;
  }

  return (
    <nav className="d-flex justify-content-center justify-content-md-end">
      <ul className="pagination pagination-sm text-gray-400">
        {currentPage > 1 ? (
          <li className="page-item">
            <Link
              className="page-link page-link-arrow"
              to={`/shop?page=${currentPage - 1}`}
            >
              <i className="fa fa-caret-left" />
            </Link>
          </li>
        ) : (
          ""
        )}
        {renderPaging()}
        {currentPage < totalPage && (
          <li className="page-item">
            <Link
              className="page-link page-link-arrow"
              to={`/shop?page=${currentPage + 1}`}
            >
              <i className="fa fa-caret-right" />
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
