import { Helmet } from 'react-helmet-async';
// @mui
import { Grid, Container, Stack, Typography } from '@mui/material';
import { Recharts } from '../components/sankey';
// components
import { BlogPostsSort } from '../sections/@dashboard/blog';
// mock
import ENERGY from '../_mock/energy';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 0, label: 'Recharts' },
  { value: 1, label: 'Echarts' },
  { value: 2, label: 'GoogleCharts' },
  { value: 2, label: 'ReactD3' },
];

// ----------------------------------------------------------------------

export default function SankeyPage() {
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
          <BlogPostsSort options={SORT_OPTIONS} />
        </Stack>

        <Grid container spacing={3}>
          <Recharts data={ENERGY} />
        </Grid>
      </Container>
    </>
  );
}


