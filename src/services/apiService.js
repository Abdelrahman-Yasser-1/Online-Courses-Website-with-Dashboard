import axios from "axios";

const API_BASE_URL = "https://65a95aff219bfa37186918e8.mockapi.io/courses";

const apiService = axios.create({
  baseURL: API_BASE_URL,
});

export const addCourses = async (courseData) => {
  try {
    const response = await apiService.post("", courseData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 201) {
      return response.data; // Return data if the response status is Created
    } else {
      throw new Error("Failed to add course");
    }
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      throw new Error("Failed to add course");
    } else if (error.request) {
      // The request was made but no response was received
      throw new Error("No response received while adding course.");
    } else {
      // Other errors
      throw new Error("Error adding course.");
    }
  }
};

export const updateCourse = async (id, courseData) => {
  try {
    const response = await apiService.put(`/${id}`, courseData);

    if (response.status === 200) {
      return response.data; // Return data if the response status is OK
    } else {
      throw new Error("Failed to update course");
    }
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      throw new Error("Failed to update course");
    } else if (error.request) {
      // The request was made but no response was received
      throw new Error("No response received while updating course.");
    } else {
      // Other errors
      throw new Error("Error updating course.");
    }
  }
};

export const getCourses = async () => {
  try {
    const response = await apiService.get("");

    if (response.status === 200) {
      return response.data; // Return data if the response status is OK
    } else {
      throw new Error("Failed to fetch courses");
    }
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      throw new Error("Failed to fetch courses");
    } else if (error.request) {
      // The request was made but no response was received
      throw new Error("No response received while fetching courses.");
    } else {
      // Other errors
      throw new Error("Error fetching courses.");
    }
  }
};

export const deleteCourse = async (id) => {
  try {
    const response = await apiService.delete(`/${id}`);

    if (response.status === 200 || response.status === 204) {
      return response.data;
    } else {
      throw new Error("Failed to delete course");
    }
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      throw new Error("Failed to delete course");
    } else if (error.request) {
      // The request was made but no response was received
      throw new Error("No response received while deleting course.");
    } else {
      // Other errors
      throw new Error("Error deleting course.");
    }
  }
};

export default apiService;
