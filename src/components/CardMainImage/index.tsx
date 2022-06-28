
import { Box, Typography } from "@mui/material"
import { type } from "@testing-library/user-event/dist/type"

type CardMainImageProps = {
    imageSrc: string
    imageAlt: string
}


function CardMainImage(props:CardMainImageProps){
    return(
        <>
        <img style={{width:'100%', height:'300px', objectFit:'cover'}} src={props.imageSrc} alt={props.imageAlt}/>       
      
        </>
    )
}

export default CardMainImage