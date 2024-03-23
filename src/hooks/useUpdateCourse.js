import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCourse } from "../services/apiService";
import { errorNotify, successNotify } from "../services/toastNotify";

export const useUpdateCourse = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["updateCourse"],
    mutationFn: updateCourse,
    onSuccess: (_data, _variables, _context) => {
      queryClient.invalidateQueries("courses");
      successNotify("Course updated successfully");
    },
    onError: (_data, _variables, _context) => {
      errorNotify("Can't update course! Please try again later.");
    },
  });
};
