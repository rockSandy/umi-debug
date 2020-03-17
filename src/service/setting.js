import { GET } from "@/utils/request";

export const getSetting = async () => {
  return await GET("/api/setting");
};

