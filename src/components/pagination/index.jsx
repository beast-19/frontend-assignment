import React from "react";
import Button from "../button";
import "./style.css"

export default function Pagination({currentPage, setCurrentPage, projectData, ITEMS_PER_PAGE}){
    return <div className="pagination">
    <Button disabled={currentPage === 1} onClick={() => setCurrentPage(1)}>&laquo; First</Button>
    <Button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>Prev</Button>
    {[...Array(Math.ceil(projectData.data.length / ITEMS_PER_PAGE))].map((_, index) => (
      <Button
        key={index + 1}
        disabled={currentPage === index + 1}
        onClick={() => setCurrentPage(index + 1)}
      >
        {index + 1}
      </Button>
    ))}
    <Button disabled={currentPage === Math.ceil(projectData.data.length / ITEMS_PER_PAGE)} onClick={() => setCurrentPage(currentPage + 1)}>Next</Button>
    <Button disabled={currentPage === Math.ceil(projectData.data.length / ITEMS_PER_PAGE)} onClick={() => setCurrentPage(Math.ceil(projectData.data.length / ITEMS_PER_PAGE))}>Last &raquo;</Button>
  </div>
}