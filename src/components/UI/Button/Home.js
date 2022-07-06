import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const ButtonHome = props => {
  return (
    <Link to={props.link}>
      <Box
        sx={{
          px: 5,
          py: 3,
          filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
          backgroundColor: '#fff',
          borderRadius: '1rem',
        }}
      >
        <Typography variant="content" color="initial">
          {props.title}
        </Typography>
      </Box>
    </Link>
  )
}

export default ButtonHome
