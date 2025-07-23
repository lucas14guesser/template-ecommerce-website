import React from 'react';
import { LoaderWrapper, Spinner } from '../styles/GlobalStyles';

export default function Loading() {
  return (
    <LoaderWrapper>
      <Spinner />
    </LoaderWrapper>
  );
}
