import { Button } from '@mui/material';
import React, { useState } from 'react';

export interface Props {
  totalField: number;
  limit: number;
  initalPage: number;
}

export const Pagination: React.FC<Props> = ({
  totalField,
  limit,
  initalPage
}) => {
  const [page, setPage] = useState(initalPage);

  const handlePrevPage = (prevPage: number) => {
    setPage((prevPage) => prevPage - 1);
    console.log(prevPage);
  };

  const handleNextPage = (nextPage: number) => {
    setPage((nextPage) => nextPage + 1);
    console.log(nextPage);
  };

  const currentPage = page;
  const totalPage = Math.ceil(totalField / limit);
  return (
    <>
      <Button
        variant="outlined"
        size="small"
        onClick={() => handlePrevPage(currentPage)}
        disabled={currentPage === 1}>
        Prev
      </Button>
      <Button
        variant="outlined"
        size="small"
        onClick={() => handleNextPage(currentPage)}
        disabled={currentPage === totalPage}>
        Next
      </Button>
    </>
  );
};
