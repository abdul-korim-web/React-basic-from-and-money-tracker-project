import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { Link } from 'react-router-dom';

export default function MultiActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia className='m-w-full max-h-40'
          component="img"
          height="140"
          image={`${props.Image}`}
          alt={`${props.ImageAlt}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.Tilel}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {props.Des}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={props.Linkfg}>
          <Button className='w-full' variant="contained" to={props.Link}>
          View Project
        </Button>
        
        </Link>
      </CardActions>
    </Card>
  );
}