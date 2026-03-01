import { useQuery } from "@tanstack/react-query";
import type { RestaurantInfo } from "../backend";
import { useActor } from "./useActor";

export function useRestaurantInfo() {
  const { actor, isFetching } = useActor();
  return useQuery<RestaurantInfo>({
    queryKey: ["restaurantInfo"],
    queryFn: async () => {
      if (!actor) {
        return {
          name: "Nksha Restaurant",
          instagramUrl: "https://www.instagram.com/nksharestaurant",
          address:
            "ADCB Rehman Manzil, 1A / 1B, Veer Nariman Rd, Churchgate, Mumbai, Maharashtra 400020",
          phone: "+91 98204 75555",
        };
      }
      return actor.getRestaurantInfo();
    },
    enabled: !isFetching,
  });
}
