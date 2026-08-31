import { createRsvp, CreateRsvpInput } from "@/service/rsvp";
import { useMutation } from "@tanstack/react-query";

export function useCreateRsvp() {
  return useMutation({
    mutationFn: (input: CreateRsvpInput) => createRsvp(input),
  });
}
