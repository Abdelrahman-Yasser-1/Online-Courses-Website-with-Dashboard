import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Spinner,
} from "reactstrap";

import editIcon from "../../assets/icons/edit-icon.svg";
import deleteIcon from "../../assets/icons/delete-icon.svg";

import CourseModal from "./CourseModal";

import { errorNotify, successNotify } from "../../services/toastNotify";
import { useDeleteCourses } from "../../hooks/useDeleteCourse";

const TableRow = (props) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const toggleDeleteModal = () => setDeleteModal(!deleteModal);

  const [updateModal, setUpdateModal] = useState(false);
  const toggleUpdateModal = () => setUpdateModal(!updateModal);

  const { mutate: deleteCourse, isPending: isLoading } = useDeleteCourses(
    successNotify,
    errorNotify
  );

  const deleteHandler = () => {
    deleteCourse(props.id);
    toggleDeleteModal();
  };

  const course = { ...props };

  return (
    <tr className="table-row">
      <td>
        <img
          src={props.image}
          alt=""
          width="80px"
          height="55px"
          className="rounded"
        />
      </td>
      <td>{props.title}</td>
      <td>{props.instructor}</td>
      <td>{props.duration}</td>
      <td>{props.level}</td>
      <td>{props.description}</td>
      <td>
        <button className="border-0 bg-transparent" onClick={toggleUpdateModal}>
          <img src={editIcon} alt="edit" width="19px" height="19px" />
        </button>

        <CourseModal
          modal={updateModal}
          toggle={toggleUpdateModal}
          isAdd={false}
          course={course}
        />
      </td>
      <td>
        <button className="border-0 bg-transparent" onClick={toggleDeleteModal}>
          <img src={deleteIcon} alt="delete" width="19px" height="19px" />
        </button>

        <Modal isOpen={deleteModal} toggle={toggleDeleteModal} centered={true}>
          <ModalHeader toggle={toggleDeleteModal}>Delete Course</ModalHeader>
          <ModalBody>
            Are you sure that you want to delete ({props.title}) course?
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={deleteHandler}
              disabled={isLoading}
            >
              {isLoading ? (
                <Spinner color="dark" size="sm">
                  Loading...
                </Spinner>
              ) : (
                "Yes"
              )}{" "}
            </Button>{" "}
            <Button
              color="secondary"
              onClick={toggleDeleteModal}
              disabled={isLoading}
            >
              NO
            </Button>
          </ModalFooter>
        </Modal>
      </td>
    </tr>
  );
};

export default TableRow;
