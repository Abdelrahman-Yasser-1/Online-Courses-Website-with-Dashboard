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
import { useState } from "react";

import { errorNotify, successNotify } from "../../services/toastNotify";

import { imageDB } from "../../services/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { useAddCourse } from "../../hooks/useAddCourse";
import { useUpdateCourse } from "../../hooks/useUpdateCourse";

const CourseModal = (props) => {
  const course = { ...props.course };

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  const { mutate: addCourse, isPending: isLoading } = useAddCourse(
    successNotify,
    errorNotify
  );
  const addCourseHandler = (courseData) => {
    addCourse(courseData);
    props.toggle();
  };

  const { mutate: updateCourse, isPending: isUpdating } = useUpdateCourse(
    successNotify,
    errorNotify
  );
  const updateCourseHandler = (id, courseData) => {
    updateCourse({ id, ...courseData });
    props.toggle();
  };

  const [imageUploadingToFirebase, setImageUploadingToFirebase] =
    useState(false);
  const submitHandler = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    if (selectedImage) {
      const imageRef = ref(imageDB, `coursesImages/${v4()}`);
      setImageUploadingToFirebase(true);
      uploadBytes(imageRef, selectedImage)
        .then((snapshot) => {
          getDownloadURL(snapshot.ref)
            .then((url) => {
              setImageUploadingToFirebase(false);
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
              errorNotify(error.message);
            });
        })
        .catch((error) => {
          errorNotify(error.message);
          errorNotify("Can't  upload image! Please try again later.");
        });
    } else {
      if (!props.isAdd) {
        // const formData = new FormData(event.target);
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

  const disableOrLoading = isLoading || isUpdating || imageUploadingToFirebase;
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
            isLoading={disableOrLoading}
          />
          <FormGroup floating>
            <Input
              id="courseTitle"
              name="title"
              placeholder="Course Title"
              type="text"
              defaultValue={!props.isAdd ? course.title : ""}
              required
              disabled={disableOrLoading}
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
              disabled={disableOrLoading}
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
              disabled={disableOrLoading}
            />
            <Label for="courseDuration">Course Duration</Label>
          </FormGroup>
          <FormGroup floating>
            <Input
              id="courseLevel"
              name="courseLevel"
              type="select"
              defaultValue={course.level}
              disabled={disableOrLoading}
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
              disabled={disableOrLoading}
            />
            <Label for="courseDescription">Course Description</Label>
          </FormGroup>
          <button
            type="submit"
            className="btn main-button w-100"
            disabled={disableOrLoading}
          >
            {disableOrLoading ? (
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
