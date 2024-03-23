import axios from "axios";

const API_BASE_URL = "https://65a95aff219bfa37186918e8.mockapi.io";

const apiService = axios.create({
  baseURL: API_BASE_URL,
});

export const addCourse = (courseData) => {
  return apiService.post("/courses", courseData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const updateCourse = (courseData) => {
  return apiService.put(`/courses/${courseData.id}`, courseData);
};

export const getCourses = () => {
  return apiService.get("/courses");
};

export const deleteCourse = (id) => {
  return apiService.delete(`/courses/${id}`);
};

export default apiService;
