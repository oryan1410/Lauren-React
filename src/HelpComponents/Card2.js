import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom'
import { Grid } from '@mui/material';


// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: '0 auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// export default function RecipeReviewCard2(props) {

//   //const variable to pass to dishPage- will contain the spercific destails of the dish/wine to display
// const wine= props.wine;
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (

//     <div className="card2">
//         <div className="card2-image">
//             <img src={props.image} alt={`${props.title} image missing`} style={{height:50, width:50}} />
//             </div>
//             <div className='card2-title'>
//                 <h2>{props.title}</h2>
//             </div>
//             <div className='card2-description'>
//                 <p>{props.Description}</p>
//                 </div>
//         </div>
//   );
// }


export default function RecipeReviewCard2(props) {

    console.log("length", props.Description ? props.Description.length : 0);
    return (
        <div className="cardTwo">
            <div className="card2Content">
                <div className='card2-title'>
                    <h1>{props.title}</h1>
                </div>
                <div className='card2-title'>
                    <h2> {props.wine.WineryNeame_Eng}</h2>
                </div>
                <div className='card2-description' style={{ fontSize: 16 }}>
                    {
                        props.Description && props.Description.length > 100 ?
                            <p className='card2paragraph'>{props.Description.substring(0, 80)}...</p>
                            :
                            <p className='card2paragraph'>{props.Description}</p>
                    }
                </div>
                <div className='card2-button'>
                    <Link to={`/dishPage/${props.Id}`} className='linkWithoutSpace' style={{ textDecoration: 'none' }}  >
                        <Button size="small" className='linkWithoutSpace' >Go to Dish</Button>
                    </Link>
                </div>
            </div>
            <div className="card2-imageDiv">
                <img src={props.image} alt={`${props.title} image missing`} className="card2image" />
            </div>
        </div>
    );
}