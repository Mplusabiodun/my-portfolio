import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Profile from "./Profile";

const Portfolio = () => {
  const [repo, setRepo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [user] = useState("Mplusabiodun");
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    const fetchRepo = async () => {
      setLoading(true);
      const res = await axios
        .get(`https://api.github.com/users/${user}/repos?per_page=15`)
        .then((res) => {
          setLoading(false);
          console.log(res.data);
          setRepo(res.data);
        })
        .catch((error) => {
          setError({ ErrorPage });
        });
    };
    fetchRepo();
  }, []);

  const reposPerPage = 5;
  const pagesVisited = pageNumber * reposPerPage;
  const displayRepos = repo
    .slice(pagesVisited, pagesVisited + reposPerPage)
    .map((repos) => {
      return <Profile key={repos.id} {...repos} className="repo" />;
    });

  const pageCount = Math.ceil(repo.length / reposPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="portfolios">
      <h1>Repo Search</h1>
      <>
        {!repo ? (
          <Loading />
        ) : (
          <>
            <section>
              <h2>Viewing {user}'s repositories</h2>
            </section>
          </>
        )}
      </>
      <div>
        {displayRepos}
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBtns"}
          previousLinkClassName={"previousBtn"}
          nextLinkClassName={"nextBtns"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </div>
  );
};

export default Portfolio;
