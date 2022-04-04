import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom:2,
        background:'white',
        borderBottom: '1px solid #e0e0e0'
      }}>
        <Container
          sx={{
            paddingTop:'10px',
            paddingBottom:'10px',
          }}>
          <Typography
            component={RouterLink}
            to={'/'}
            variant="h6"
            color="#fff"
            sx={{
              display: 'flex',
              alignItems: 'self-start',
              textDecoration: 'none'
            }}>
            <Box
              component="img"
              src="https://d3j0t7vrtr92dk.cloudfront.net/images/talent_bigger.png" alt=""
              sx={{
                maxWidth:200,
                maxHeight:36
              }}/>
          </Typography>
        </Container>
    </Box>
  )
}

export default Header
