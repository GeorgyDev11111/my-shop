import React from 'react'
import { Box } from '@mui/material'
import goods from '../assets/no-goods.png'


const NoGoods = ({text}) => {

  return (
    <Box sx={{minHeight:'400px',display: 'flex',justifyContent: 'center', alignItems: 'center',flexDirection: 'column'}}>
    <Box 
    component="h5" 
    sx={{fontSize: {
      xs: '12px',
      sm: '20px',
      md: '30px'
    }} } 
    >
      {text}
    </Box>
    <Box sx={{width:{
      xs:'100px',
      sm:'300px',
      md: '500px'
    }} }
    component="img"
    src={goods} alt="img" 
    />
  </Box>
  )
}

export default NoGoods