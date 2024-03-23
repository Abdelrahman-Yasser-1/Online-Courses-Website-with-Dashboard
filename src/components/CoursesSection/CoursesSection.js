// import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";

import CourseCard from "./CourseCard";

import SectionHeader from "../UI/SectionHeader";
import { useGetCourses } from "../../hooks/useGetCourses";
import BookLoader from "../BookLoader/BookLoader";

const CoursesSection = () => {
  const { data: courses, isLoading, isError, isFetching } = useGetCourses();

  const title = "Our Courses";
  const description =
    "Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.";

  return (
    <section id="courses">
      <SectionHeader title={title} description={description} />
      {isLoading || isFetching ? (
        <div className="courses text-center my-5 container">
          <BookLoader />
        </div>
      ) : (
        <section className="courses container my-5">
          <Row className="row-cols-1 row-cols-lg-2 row-cols-md-1 g-3 g-lg-3">
            {courses.data.map((course, index) => (
              <Col key={index} sm="6">
                <CourseCard {...course} />
              </Col>
            ))}
          </Row>
        </section>
      )}
    </section>
  );
};

export default CoursesSection;
