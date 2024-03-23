import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCourse } from "../services/apiService";
import { errorNotify, successNotify } from "../services/toastNotify";

export const useAddCourse = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["addCourse"],
    mutationFn: addCourse,
    onSuccess: (_data, _variables, _context) => {
      queryClient.invalidateQueries("courses");
      successNotify("Course added successfully");
    },
    onError: (_data, _variables, _context) => {
      errorNotify("Can't upload course! Please try again later.");
    },
  });
};
