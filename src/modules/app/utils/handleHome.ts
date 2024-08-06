import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '~/redux/utilRedux';
import { getAllDocument } from './api';
import { addDocument } from '~/redux/app/document.slice';

export const useDocument = () => {
  const { document, fetchData, limit, page, search } = useAppSelector(state => state.document);
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchingDataDocument() {
      if (fetchData) {
        const res = await getAllDocument(page, limit, search);
        if (res) {
          const { data, pagination } = res;
          dispatch(addDocument({ data, ...pagination }));
        }
      }
    }

    fetchingDataDocument();
  }, [fetchData]);

  return {
    data: document,
    limit,
    page,
  };
};
