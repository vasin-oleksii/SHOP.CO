import { format } from "date-fns";

export const formatDate = (dateString: string) => {
  const formDate = format(new Date(dateString), "'Posted on' MMMM d, yyyy");
  return formDate;
};
