
import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ pokemonsPerPage, totalPokemons, handlePageClick }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPokemons / pokemonsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (

        <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            pageCount={pageNumbers.length}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={"pagination justify-content-center my-3"}
            pageClassName={"page-item text-dark"}
            pageLinkClassName={"page-link text-dark"}
            previousClassName={"page-item text-dark"}
            previousLinkClassName={"page-link text-dark"}
            nextClassName={"page-item text-dark"}
            nextLinkClassName={"page-link text-dark"}
            breakClassName={"page-item text-dark"}
            breakLinkClassName={"page-link text-dark"}
            activeClassName={"active"}
        />
    );
};

export default Pagination;