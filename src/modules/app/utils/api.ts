import { BaseAxios } from '~/utils';

export const getAllDocument = async (page: number, limit: number, search?: string) => {
  const axios = new BaseAxios();
  let url = `/document?limit=${limit}&page=${page}`;
  if (search) {
    url += `&search=${search}`;
  }
  const request = await axios.get(url);
  if (request?.statusCode == 200) {
    return request.data;
  }
  return false;
};
