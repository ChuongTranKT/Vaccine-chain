import { Grid, Typography, Box, Stack, Container } from '@mui/material'
import React from 'react'
import backgroundImage from '../../assets/images/img-home.png'
// import backgroundSystem from '../../assets/images/img-system-manage.png'
// import imgSystem from '../../assets/images/img-system.svg'
// import imgManufacture from '../../assets/images/img-manufacture.png'
// import ButtonHome from '../../components/UI/Button/Home'
import { MenuHome } from '../../components/Menu/Home'
import { Link } from 'react-router-dom'

const ScreensHome = () => {
  return (
    <Grid container>
      <Grid item md={6}>
        <Grid item md>
          <img
            src={backgroundImage}
            alt=""
            width="100%"
            style={{ display: 'block' }}
          />
        </Grid>

        <Grid
          item
          container
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          sx={{ position: 'absolute', top: '10%' }}
          md={6}
          rowSpacing={20}
        >
          <Grid item md={6}>
            <Typography
              variant="content"
              sx={{ p: 5, fontSize: '4rem', fontWeight: 'bold' }}
            >
              Vaccine-Chain
            </Typography>
          </Grid>
          <Grid item md={6}>
            <Box sx={{ px: 14, pt: 14 }}>
              <Typography
                variant="content"
                sx={{
                  fontSize: '3rem',
                  lineHeight: '35px',
                  fontFamily: 'Akaya Telivigala',
                  letterSpacing: '0.2em',
                  color: '#fff',
                }}
              >
                We proposed a system that uses blockchain technology to manage
                vaccines and vaccine passports. The features of this system
                include the ability to track the movement of ownership of
                vaccines and register them in vaccine passports, thereby
                preventing the circulation of counterfeit vaccines and fake
                vaccine passports.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        md={6}
        sx={{ py: 5 }}
        container
        direction="column"
        rowSpacing={2}
      >
        {MenuHome.map(menu => (
          <Grid item md key={menu.id}>
            <Container>
              <Stack
                spacing={1}
                direction="column"
                justifyContent="space-evenly"
              >
                <Stack>
                  <Typography
                    variant="content"
                    color="initial"
                    sx={{ fontSize: '2rem', fontWeight: 'bold' }}
                  >
                    {menu.title}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={5}
                  sx={{
                    background: `${menu.background}`,
                    px: 3,
                    py: 2,
                    borderRadius: '3rem',
                    display: 'flex',
                    flexWrap: 'wrap',
                  }}
                >
                  {menu.tabMenu.map(menuTab => (
                    <Stack key={menuTab.id}>
                      <Link to={menuTab.link}>
                        <Box
                          sx={{
                            px: 7,
                            py: 3,
                            filter:
                              'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
                            backgroundColor: '#fff',
                            borderRadius: '1rem',
                            my: 2,
                            cursor: 'pointer',
                            '&:hover': {
                              backgroundColor: '#6979F8',
                            },
                          }}
                        >
                          <Typography
                            variant="content"
                            sx={{
                              color: 'rgba(0, 0, 0, 1)',
                              fontSize: '1.6rem',
                              '&:hover': {
                                color: '#fff',
                              },
                            }}
                          >
                            {menuTab.title}
                          </Typography>
                        </Box>
                      </Link>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </Container>
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

export default ScreensHome
