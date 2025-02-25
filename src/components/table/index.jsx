import React from "react";
import "./style.css"

export default function Table({ projectData, currentPage, ITEMS_PER_PAGE }) {
    return <table className="table">
        <thead>
            <tr>
            <th>S.No.</th>
            <th>Percentage Funded</th>
            <th>Amount Pledged ($)</th>
            </tr>
        </thead>
        <tbody>
            {projectData.data?.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE).map((project, index) => (
            <tr key={index}>
                <td>{(currentPage - 1) * ITEMS_PER_PAGE + index + 1}</td>
                <td>{project?.["percentage.funded"]}%</td>
                <td>${project?.["amt.pledged"]?.toLocaleString()}</td>
            </tr>
            ))}
        </tbody>
    </table>;
  }