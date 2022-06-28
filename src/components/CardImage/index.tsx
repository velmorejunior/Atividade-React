
<<<<<<< HEAD
import { Box, Typography } from "@mui/material"
import { type } from "@testing-library/user-event/dist/type"

=======
>>>>>>> c8abd95bd83254e683b3a833fd9ec7f132d64ffc
type CardImageProps = {
    imageSrc: string
    imageAlt: string
}

<<<<<<< HEAD

function CardImage(props:CardImageProps){
    return(
        <>
        <img style={{width:'700px', height:'500px', objectFit:'cover', padding:'20px'}} src={props.imageSrc} alt={props.imageAlt}/>
        
      
        </>
    )
=======
function CardImage(props:CardImageProps) {
    
    return <img style={{width: '500px', height: '500px', objectFit: 'cover'}} src={props.imageSrc} alt={props.imageAlt} />
    
>>>>>>> c8abd95bd83254e683b3a833fd9ec7f132d64ffc
}

export default CardImage