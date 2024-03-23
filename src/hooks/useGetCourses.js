import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCourses } from "../services/apiService";

export const useGetCourses = () => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: ["courses"],
    queryFn: getCourses,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    initialData: () => {
      const courses = queryClient.getQueryData("courses")?.data;
      if (courses) {
        return { data: courses };
      } else {
        return undefined;
      }
    },
  });
};
