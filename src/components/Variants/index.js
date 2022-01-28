import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const criarSkeleton = () => {
  return (
    <Skeleton 
      display="flex"
      animation="wave" 
      variant="text" 
      width={813} 
      height={80} 
    />
  )
}

export default function Variants() {
  return (
    <Stack  marginTop={-7} spacing={-3.5}>
      {criarSkeleton()}
      {criarSkeleton()}
      {criarSkeleton()}
      {criarSkeleton()}
      {criarSkeleton()}
      {criarSkeleton()}
      {criarSkeleton()}
      {criarSkeleton()}
      {criarSkeleton()}
    </Stack>
  );
}