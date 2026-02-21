import { mutationOptions, queryOptions } from "@tanstack/react-query";

import type { UserSummary } from "../type/user";
import { api } from ".";
import { queryClient } from "./query";

export const getUsersQuery = queryOptions({
  queryKey: ["users"],
  queryFn: () => api.get("users").json<{ users: UserSummary[] }>(),
});

export const postUsersMutation = mutationOptions({
  mutationKey: ["users", "post"],
  mutationFn: ({ name, password }: { name: string; password: string }) =>
    api.post("users", { json: { name, password } }).json(),
  onSuccess: () => {
    queryClient.invalidateQueries(getUsersQuery);
  },
});
