import { formatMessage as message } from "umi-plugin-locale";

export const locale = "en-US";

export const formatMessage = (id, values= {}) => {
  return message({ id }, values);
};
