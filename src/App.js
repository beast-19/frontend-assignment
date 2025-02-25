import React, { useEffect, useState } from "react";
import Card from "./components/card";
import Table from "./components/table";
import Loader from "./components/loader";
import Error from "./components/error";
import Navbar from "./components/navbar";
import Pagination from "./components/pagination";

const ITEMS_PER_PAGE = 5;

export default function App() {
  const [projectData, setProjectData] = useState({
    loading: false,
    data: null,
    error: null
  })
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setProjectData({
      loading: true,
      data: null,
      error: null
    })
    fetch("https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json").then(res=>res.json()).then (res => {
      console.log(res);
      setProjectData({
        loading: false,
        data: res,
        error: null
      })
    }).catch(err => {
      setProjectData({
        loading: false,
        data: null,
        error: err
      })
    })
  },[])

  console.log(projectData)

  return (
    <React.Fragment>
      <Navbar />
      <Card >
        <h2>Project Funding Details</h2>
        {
          projectData.loading ? <Loader /> : (
            projectData?.data ? (
              projectData?.data.length ?
            <React.Fragment>
              <Table projectData={projectData} currentPage={currentPage} ITEMS_PER_PAGE={ITEMS_PER_PAGE}/>
              <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} projectData={projectData} ITEMS_PER_PAGE={ITEMS_PER_PAGE}/>
            </React.Fragment>
            :
            <div>No Data Available</div>
            ) : <Error message={projectData.error?.message ?? "Error Fetching Data"} />
          )
        }
        
      </Card>
    </React.Fragment>
  );
}
