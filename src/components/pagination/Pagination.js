import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import "./Pagination.css";
function Pagination() {
  const [fechedData, setFetchedData] = useState([]);
  const [isLoading, setISLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [page, setPage] = useState(1);
  const fetchData = async () => {
    try {
      setISLoading(true);
      const response = await fetch("https://dummyjson.com/products?limit=100");
      const result = await response.json();
      if (result) {
        setFetchedData(result.products);
      }
      setISLoading(false);
    } catch (e) {
      setErrorMessage(e);
    }
  };
  console.log("resultresult", fechedData);

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Wait page is loading</div>;
  }

  if (errorMessage) {
    return <div>Error occured {errorMessage}</div>;
  }
  return (
    <>
      Pagination{" "}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Ratings</TableCell>
              <TableCell align="right">price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fetchData &&
              //   fechedData.slice(page * 10 - 10, page * 10).map((row) => (
              fechedData.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.title}</TableCell>
                  <TableCell align="right">{row.rating}</TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="pagination">
        {Array.from({ length: 10 }).map((_, index) => {
          return (
            <div
              style={{
                border: "1px solid black",
                padding: "4px",
                cursor: "pointer",
              }}
              onClick={() => setPage(index + 1)}
            >
              {index + 1}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Pagination;
