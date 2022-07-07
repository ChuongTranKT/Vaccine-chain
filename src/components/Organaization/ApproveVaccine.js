import {
  Box,
  Button,
  Container,
  Grid,
  InputBase,
  InputLabel,
  Stack,
  Typography,
} from '@mui/material'
import { Link } from 'react-router-dom'

const ApproveVaccine = () => {
  return (
    <Grid container direction="column" rowSpacing={8}>
      <Grid item md>
        <Stack
          sx={{ height: 50, backgroundColor: 'rgba(217, 217, 217, 1)' }}
          justifyContent="center"
        >
          <Typography
            variant="content"
            color="initial"
            sx={{ fontSize: '2rem' }}
            align="center"
          >
            Demo
          </Typography>
        </Stack>
      </Grid>
      <Grid item md>
        <Container>
          <Stack spacing={8}>
            <Stack>
              <Typography
                variant="content"
                color="initial"
                sx={{ fontSize: '4.8rem', fontWeight: 600 }}
                align="center"
              >
                Approve Vaccine
              </Typography>
            </Stack>
            <Stack spacing={1} sx={{ px: 20 }}>
              <InputLabel sx={{ fontSize: '2rem' }}>Your ID</InputLabel>
              <Box
                sx={{
                  boxShadow:
                    'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;',
                  p: 2,
                  borderRadius: '0.6rem',
                }}
              >
                <InputBase
                  id="yourID"
                  type="text"
                  name="yourID"
                  placeholder="Your ID"
                  required
                  fullWidth
                  sx={{ fontSize: '1.6rem' }}
                />
              </Box>
            </Stack>
            <Stack spacing={1} sx={{ px: 20 }}>
              <InputLabel sx={{ fontSize: '2rem' }}>Vaccine ID</InputLabel>
              <Box
                sx={{
                  boxShadow:
                    'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;',
                  p: 2,
                  borderRadius: '0.6rem',
                }}
              >
                <InputBase
                  id="vaccineID"
                  type="text"
                  name="vaccineID"
                  placeholder="Vaccine ID"
                  required
                  fullWidth
                  sx={{ fontSize: '1.6rem' }}
                />
              </Box>
            </Stack>
            <Stack
              direction="row"
              justifyContent="flex-end"
              spacing={2}
              sx={{ px: 20 }}
            >
              <Stack>
                <Link to="/">
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{ px: 5, py: 1, fontSize: '1.6rem' }}
                  >
                    Back to home
                  </Button>
                </Link>
              </Stack>
              <Stack>
                <Button
                  variant="contained"
                  sx={{ px: 5, py: 1, fontSize: '1.6rem' }}
                >
                  Run
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Grid>
    </Grid>
  )
}

export default ApproveVaccine
