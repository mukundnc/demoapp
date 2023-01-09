import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
// @mui
import { Grid, Container, Stack, Typography } from '@mui/material';
import { Recharts, GoogleCharts, ApaceECharts } from '../components/sankey';
// components
import { BlogPostsSort } from '../sections/@dashboard/blog';
// mock
import ENERGY from '../_mock/energy';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 0, label: 'Recharts' },
  { value: 1, label: 'ApaceECharts' },
  { value: 2, label: 'GoogleCharts' },
  // { value: 3, label: 'ReactD3' },
];

// ----------------------------------------------------------------------

export default function SankeyPage() {
  const [count, setCount] = useState(0);

  function onSelect(args){
    setCount(args.target.value)
  }
  return (
    <>
      <Helmet>
        <title> Dashboard: Sankey | Minimal UI </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Sankey Charts
          </Typography>
        </Stack>

        <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
          <BlogPostsSort options={SORT_OPTIONS} selectedIndex={count} onSort={(data) => {onSelect(data)}}/>
        </Stack>

        <Grid container spacing={3}>
          { count === 0 && <Recharts data={ENERGY} />}
          { count === 1 && <ApaceECharts data={ENERGY} />}
          { count === 2 && <GoogleCharts data={ENERGY} />} 
          {/* { count === 3 && <ReactD3Charts data={ENERGY} />}  */}
        </Grid>
      </Container>
    </>
  );
}


