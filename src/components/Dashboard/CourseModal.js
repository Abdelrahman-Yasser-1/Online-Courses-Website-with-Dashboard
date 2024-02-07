import {
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Spinner,
} from "reactstrap";

import ImageUploader from "./ImageUploader";
import { useContext, useState } from "react";

import CoursesContext from "../store/courses-context";

// services
import { addCourses, updateCourse } from "../../services/apiService";
import { errorNotify, successNotify } from "../../services/toastNotify";

// Upload image to Firebase
import { imageDB } from "../../services/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

const CourseModal = (props) => {
  const coursesCtx = useContext(CoursesContext);

  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (selectedImage) {
      try {
        setIsLoading(true);
        const formData = new FormData(event.target);
        // start upload image
        const imageRef = ref(imageDB, `coursesImages/${v4()}`);
        uploadBytes(imageRef, selectedImage)
          .then((snapshot) => {
            getDownloadURL(snapshot.ref)
              .then((url) => {
                const courseData = {
                  title: formData.get("title"),
                  instructor: formData.get("instructor"),
                  duration: formData.get("duration"),
                  level: formData.get("courseLevel"),
                  description: formData.get("description"),
                  image: url,
                };
                if (props.isAdd) addCourseHandler(courseData);
                else updateCourseHandler(course.id, courseData);
              })
              .catch((error) => {
                console.log(error.message);
              });
          })
          .catch((error) => {
            console.log(error.message);
          });
      } catch (error) {
        console.error("Error:", error);
        errorNotify("Can't  upload image! Please try again later.");
      } finally {
        // setIsLoading(false);
      }
    } else {
      if (!props.isAdd) {
        const formData = new FormData(event.target);
        const courseData = {
          title: formData.get("title"),
          instructor: formData.get("instructor"),
          duration: formData.get("duration"),
          level: formData.get("courseLevel"),
          description: formData.get("description"),
          image: course.image,
        };
        updateCourseHandler(course.id, courseData);
      } else
        errorNotify(
          "Can't upload course! Please try again later, and add an image."
        );
    }
  };

  const addCourseHandler = async (courseData) => {
    try {
      setIsLoading(true);
      await addCourses(courseData);
      successNotify("Course added successfully");
      coursesCtx.change();
      props.toggle();
    } catch (error) {
      errorNotify("Can't upload course! Please try again later.");
      console.error("Error adding course:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateCourseHandler = async (id, courseData) => {
    try {
      setIsLoading(true);
      await updateCourse(id, courseData);
      successNotify("Course updated successfully");
      coursesCtx.change();
      props.toggle();
    } catch (error) {
      errorNotify("Can't upload Course! Please try again later.");
      console.error("Error editing course:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const course = { ...props.course };

  return (
    <Modal isOpen={props.modal} toggle={props.toggle}>
      <ModalHeader toggle={props.toggle}>
        {props.isAdd ? "Add New Course" : "Edit Course"}
      </ModalHeader>
      <ModalBody>
        <Form onSubmit={submitHandler}>
          <ImageUploader
            onImageSelect={handleImageSelect}
            isAdd={props.isAdd}
            img={course.image}
            isLoading={isLoading}
          />
          <FormGroup floating>
            <Input
              id="courseTitle"
              name="title"
              placeholder="Course Title"
              type="text"
              defaultValue={!props.isAdd ? course.title : ""}
              required
              disabled={isLoading}
            />
            <Label for="courseTitle">Course Title</Label>
          </FormGroup>
          <FormGroup floating>
            <Input
              id="courseInstructor"
              name="instructor"
              placeholder="Course Instructor"
              type="text"
              defaultValue={!props.isAdd ? course.instructor : ""}
              required
              disabled={isLoading}
            />
            <Label for="courseInstructor">Course Instructor</Label>
          </FormGroup>
          <FormGroup floating>
            <Input
              id="courseDuration"
              name="duration"
              placeholder="Course Duration"
              type="text"
              defaultValue={!props.isAdd ? course.duration : ""}
              required
              disabled={isLoading}
            />
            <Label for="courseDuration">Course Duration</Label>
          </FormGroup>
          <FormGroup floating>
            <Input
              id="courseLevel"
              name="courseLevel"
              type="select"
              defaultValue={course.level}
              disabled={isLoading}
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </Input>
            <Label for="courseLevel">Course Level</Label>
          </FormGroup>
          <FormGroup floating>
            <Input
              id="courseDescription"
              name="description"
              placeholder="Course Description"
              type="text"
              defaultValue={!props.isAdd ? course.description : ""}
              required
              disabled={isLoading}
            />
            <Label for="courseDescription">Course Description</Label>
          </FormGroup>
          <button
            type="submit"
            className="btn main-button w-100"
            disabled={isLoading}
          >
            {isLoading ? (
              <Spinner color="dark" size="sm">
                Loading...
              </Spinner>
            ) : props.isAdd ? (
              "Add Course"
            ) : (
              "Edit Course"
            )}
          </button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default CourseModal;
