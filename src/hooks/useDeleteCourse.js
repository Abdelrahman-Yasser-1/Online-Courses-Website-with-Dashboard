import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCourse } from "../services/apiService";
import { errorNotify, successNotify } from "../services/toastNotify";

export const useDeleteCourses = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["deleteCourse"],
    mutationFn: deleteCourse,
    onSuccess: (_data, _variables, _context) => {
      queryClient.invalidateQueries("courses");
      successNotify("Course deleted successfully");
    },
    onError: (_data, _variables, _context) => {
      errorNotify("Can't delete course! Please try again later.");
    },
  });
};
