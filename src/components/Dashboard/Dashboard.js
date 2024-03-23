import React, { useState } from "react";

import { Container } from "reactstrap";
import bookmarkIcon from "../../assets/icons/bookmark-icon.svg";
import personIcon from "../../assets/icons/person-icon.svg";

import "./Dashboard.css";

import CourseModal from "./CourseModal";
import DashboardTable from "./DashboardTable";

import Logo from "../../assets/icons/logo.svg";
import { Link } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import { useGetCourses } from "../../hooks/useGetCourses";
import BookLoader from "../BookLoader/BookLoader";

const Dashboard = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const {
    data: courses,
    isLoading,
    isError,
    isFetching,
    error,
  } = useGetCourses();

  function countInstructors(allData) {
    const instructors = new Set();
    allData.forEach((course) => {
      instructors.add(course.instructor);
    });
    return instructors.size;
  }

  if (isLoading) {
    return (
      <div className="loading-content">
        <BookLoader />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="loading-content">Error fetching data {error.message}</div>
    );
  }

  return (
    <Container>
      <ToastContainer />
      {/* Courses INFO */}
      <section className="text-center d-flex justify-content-center flex-wrap flex-column flex-lg-row">
        <div className="rounded-3 text-white bg-orange-50 p-3 d-flex align-items-center m-2 justify-content-center ">
          <img src={bookmarkIcon} alt="" width="28px" height="38px" />
          <h5 className="m-0 ps-3">Courses</h5>
          <h3 className="m-0 ps-5 fw-bolder">{courses.data.length}</h3>
        </div>
        <div className="pointer-cursor rounded-3 text-white bg-orange-50 p-3 d-flex align-items-center m-2 justify-content-center ">
          <Link to="/" className="nav-link active rounded">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="rounded-3 text-white bg-orange-50 p-3 d-flex align-items-center m-2 justify-content-center ">
          <img src={personIcon} alt="" width="28px" height="38px" />
          <h5 className="m-0 ps-3">Instructors</h5>
          <h3 className="m-0 ps-5 fw-bolder">
            {countInstructors(courses.data)}
          </h3>
        </div>
      </section>

      {/* Header and Add Button */}
      <section className="d-flex align-items-center flex-wrap mt-5 flex-column flex-md-row">
        <h3 className="fw-bolder">Courses List</h3>
        <button
          className="btn main-button ms-md-auto p-2 px-4"
          onClick={toggle}
        >
          Add New Course
        </button>
        <CourseModal modal={modal} toggle={toggle} isAdd={true} />
      </section>

      <hr style={{ color: "#ff9500" }} />

      <DashboardTable courses={courses.data} />
    </Container>
  );
};

export default Dashboard;
