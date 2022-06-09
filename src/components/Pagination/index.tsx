import { Button } from '@mui/material';
import React, { useState } from 'react';

export interface Props {
  totalField?: number;
  limit: number;
  initalPage: number;
  onPrevPage: (page: number) => void;
  onNextPage: (page: number) => void;
}

export const Pagination: React.FC<Props> = ({
  totalField,
  limit,
  initalPage,
  onPrevPage,
  onNextPage
}) => {
  const [page, setPage] = useState(initalPage);

  const handlePrevPage = (prevPage: number) => {
    setPage(prevPage - 1);
    onPrevPage(page);
  };

  const handleNextPage = (nextPage: number) => {
    setPage(nextPage + 1);
    onNextPage(page);
  };
  const currentPage = page;
  let totalPage = totalField && Math.ceil(totalField / limit);
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
