import { ShoppingBasket } from '@mui/icons-material'
import { Badge, IconButton, Tooltip } from '@mui/material'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'


import React from 'react'

function Basket() {
  const navigate = useNavigate()
  const location =useLocation()
  const {basket,countBasket} = useSelector(state => state.basket)


  const bool = 
  location.pathname !== '/admin' &&
  location.pathname !== '/admin/panel' &&
  location.pathname !== '/admin/order'
  return (
    <>
      {
        bool    
      ? <Tooltip title="Корзина">
        <IconButton
          sx={{ ml: '0.5em'}}
          disabled={location.pathname == '/basket' ? true : false} 
          onClick={() => navigate('/basket')}
          color="inherit"
        >
          <Badge
            color="secondary"
            badgeContent={countBasket}
          >
          <ShoppingBasket />
          </Badge>
        </IconButton>
      </Tooltip>
      : null

      }
    </>
  )
}

export default Basket