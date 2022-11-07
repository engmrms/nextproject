/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-magic-numbers */
import "./styles.css";

// import { AngleRight, AngleLeft } from "basaricons";
import _ from "lodash";
import React, { MouseEvent } from "react";

interface IPagination {
  currentPage: number;
  totalItems: number;
  limit: number;
  showResult?: boolean;
  pageBound?: number;
  bound?: number;
  onPageChange: (page: number) => void;
}

function Pagination({ currentPage, totalItems, limit, showResult = false, pageBound = 1, bound = 1, onPageChange }: IPagination) {
  const pages = totalItems && Math.ceil(totalItems / limit);

  const pageRange = pageBound * 2 + 1;
  let startPage = bound > 2 ? bound : 2;
  let startArrayNumber = 0;

  let isNeedStartDots = false;
  let isNeedEndDots = false;

  if (currentPage > 1) {
    startArrayNumber = currentPage - pageBound;
    isNeedStartDots = currentPage > 1 + startPage;
  }

  if (pages > pageRange) {
    isNeedEndDots = pages > currentPage + pageBound + 1;
    if (pages < currentPage + pageBound + 1) {
      startArrayNumber = pages - pageRange;
    }
  }

  let contentPageNumber;

  const handleNext = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const next = currentPage + 1;
    if (next > pages) return;

    onPageChange(next);
  };
  const handlePrev = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const prev = currentPage - 1;
    if (prev === 0) return;
    onPageChange(prev);
  };
  const handlePage = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (e.currentTarget.textContent) onPageChange(parseInt(e.currentTarget.textContent));
  };

  return (
    <div className="pagination">
      <div className="pagination__mobile">
        <a href="/" onClick={handlePrev} className="pagination__action">
          Previous
        </a>
        <a href="/" onClick={handleNext} className="pagination__action">
          Next
        </a>
      </div>

      <div className="pagination__paging">
        {showResult && (
          <p className="pagination__result">
            Showing <span className="font-medium">{currentPage}</span> to <span className="font-medium">{pages}</span> of
            <span className="font-medium"> {totalItems} </span>
            results
          </p>
        )}
        <nav className="pagination__list" aria-label="Pagination">
          <a href="/" onClick={handlePrev} className="pagination__action">
            <span className="sr-only">Previous</span>
            {/* <AngleRight className="pagination__icon" aria-hidden="true" /> */}
          </a>
          {_.times(
            startPage,
            i =>
              i > 0 && (
                <a
                  key={`page${i}`}
                  href="/"
                  aria-current="page"
                  onClick={handlePage}
                  className={`pagination__page  ${currentPage === i ? "active" : "hover"} `}>
                  {i}
                </a>
              )
          )}

          {isNeedStartDots && <span className="pagination">...</span>}
          {_.times(pageRange, i => {
            contentPageNumber = isNeedStartDots ? startArrayNumber : startPage;
            startPage += 1;
            startArrayNumber += 1;
            return (
              <a href="#" className={`pagination__page ${currentPage === contentPageNumber ? "active" : "hover"} `} key={i + 1} onClick={handlePage}>
                {contentPageNumber}
              </a>
            );
          })}
          {isNeedEndDots && <span className="pagination__page">...</span>}

          {/* {_.times(
            bound,
            i =>
              i > 0 && (
                <a
                  key={`page${i}`}
                  href="/"
                  aria-current="page"
                  onClick={handlePage}
                  className={`pagination__page  ${currentPage === pages - bound + i ? "active" : "hover"} `}>
                  {pages - bound + i}
                </a>
              )
          )} */}

          <a href="/" onClick={handlePage} className={`pagination__page ${currentPage === pages ? "active" : "hover"} `}>
            {pages}
          </a>

          <a href="/" onClick={handleNext} className="pagination__action">
            <span className="sr-only">Next</span>
            {/* <AngleLeft className="pagination__icon" aria-hidden="true" /> */}
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Pagination;
