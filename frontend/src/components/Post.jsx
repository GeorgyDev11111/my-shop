import React  from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Rating, Typography } from '@mui/material'
import {useLocation, useNavigate} from 'react-router-dom'

function Post ({item,text,deLete}) {

  const location = useLocation()
  const navigate = useNavigate()

  const relocate = (id) => {
    navigate(`/description/${id}`)
  }
  
  return(
    <>
    <Grid xs={12}  md={4} sm={6}  item className="post" data-id={item.articul}>
      <Card>
          <CardMedia height="300" component="img" className="post__img"  src={`http://localhost:4000/${item.img}`} alt="картинка" width={300}/>
        <CardContent>
          <Typography variant="body1"><b>$</b><span className="post__price">{item.price}</span></Typography> 
          <Rating readOnly value={item.rating} /> 
          <Typography variant="body1" component="p" className="post__desc">{item.title}</Typography>
        </CardContent>
        <CardActions>
          {
            location.pathname === '/'
          ? <Button className="btn-post">{text}</Button>
          : <Button onClick={e => deLete(e)} className="btn-post">Удалить</Button>   
          }

          <Button onClick={() => relocate(item.productid)} >Learn more</Button>
        </CardActions>
      </Card>
    </Grid>  
    </>
  )
}

export default Post