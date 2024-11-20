import { useState } from 'react';
import Button from '../Button';
import './pagination.css';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const handleClick = (pageNumber: number) => {
    if (pageNumber !== currentPage && pageNumber > 0 && pageNumber <= 10) {
      setCurrentPage(pageNumber)
    }
  }

  const handleNextClick = () => {
    if (currentPage < 10) {
      setCurrentPage(currentPage + 1)
    }
  }

  const renderPages = () => {
    const pages = []
    for (let i = 1; i <= 4; i++) {
      pages.push(
        <li key={`page-${i}`} className={currentPage === i ? 'active' : ''}>
          <a href="#" onClick={() => handleClick(i)}>{i}</a>
        </li>
      )
    }
    pages.push(<li key="dots"><span>...</span></li>)

    pages.push(
      <li key="page-10" className={currentPage === 10 ? 'active' : ''}>
        <a href="#" onClick={() => handleClick(10)}>10</a>
      </li>
    )
    return pages
  };

  return (
    <nav>
      <ul className="pagination">
        {renderPages()}
        <li>
          <Button onClick={handleNextClick} type="primary">
            Следующая
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
