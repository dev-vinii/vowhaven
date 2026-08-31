import { getGifts } from "@/service/gifts";
import { useQuery } from "@tanstack/react-query";

export function useGifts() {
  return useQuery({
    queryKey: ["gifts"],
    queryFn: getGifts,
  });
}
