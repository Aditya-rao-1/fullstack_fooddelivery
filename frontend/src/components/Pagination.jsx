import React from 'react';
import './Pagination.css';

const Pagination = ({ currentPage, totalPages, setPage }) => {
  const handlePageClick = (page) => {
    if (page !== currentPage) setPage(page);
  };

  return (
    <div className='pagination'>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index + 1}
          onClick={() => handlePageClick(index + 1)}
          className={currentPage === index + 1 ? 'active' : ''}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
