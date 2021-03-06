import { Box, Grid } from "@mui/material"
import Card from "../../components/Card"
import CardImage from "../../components/CardImage"
import ScreenshotMonitorIcon from '@mui/icons-material/ScreenshotMonitor';
<<<<<<< HEAD
import ClearAllIcon from '@mui/icons-material/ClearAll';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CardMainImage from "../../components/CardMainImage";
import { display, fontSize } from "@mui/system";
function Landing(){
    return(
        <>        
        <Grid container>
            <Grid item xs={12}>
                <CardMainImage imageSrc="https://bolaprafrente.uai.com.br/wp-content/uploads/sites/7/2021/12/51750146873-4013465bfb-c.jpg" imageAlt="GaloDoido"/>
            </Grid>
            
            <Grid item xs={4}>
                <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <ScreenshotMonitorIcon sx={{fontSize:"100px"}} />
                </Box>            
            </Grid>

            <Grid item xs={4}>
                <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <ClearAllIcon sx={{fontSize:"100px"}} />
                </Box>            
            </Grid>
            
            <Grid item xs={4}>
                <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <CheckCircleOutlineIcon sx={{fontSize:"100px"}} />
                </Box>            
            </Grid>

            <Grid item xs={4}>
                <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', fontSize:'30px', fontWeight:'bold'}}>
                    Lutar, Lutar, Lutar
                </Box>
            </Grid>

            <Grid item xs={4}>
                <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', fontSize:'30px', fontWeight:'bold'}}>
                    Com muita ra??a e orgulho pra Vencer
                </Box>
            </Grid>

            <Grid item xs={4}>
                <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', fontSize:'30px', fontWeight:'bold'}}>
                    Clube Atletico Mineiro, uma vez, at?? morrer
                </Box>
            </Grid>            

            <Grid item xs={6}>
                <Card titulo="T??ulos, Funda????o e S??mbolo">
                    T??tulos ??? Atual campe??o da Supercopa do Brasil, Campeonato Brasileiro, Copa do Brasil e Tricampe??o Mineiro, o Galo ?? o clube mais vencedor do futebol brasileiro na atualidade.
                    Funda????o ??? Fundado em 25 de mar??o de 1908, o Galo ?? a grande paix??o do povo mineiro e um dos maiores e mais tradicionais clubes do futebol mundial. Mais de nove milh??es de torcedores formam a torcida mais apaixonada e engajada do pa??s.
                    S??mbolos ??? O Atl??tico tem como cores tradicionais o preto e o branco, desde a sua funda????o. Seu s??mbolo mais popular ?? o Galo, mascote oficial desde o final da d??cada de 1930.
                </Card>
            </Grid>
            <Grid item xs={6}>
                <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <CardImage imageSrc="https://atletico.com.br/wp-content/uploads/2022/02/tacas.jpg" imageAlt="Campe??o2021" />    
                </Box>
                
            </Grid>
        </Grid>

        <Grid container>
            <Grid item xs={6}>
                <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <CardImage imageSrc="https://atletico.com.br/wp-content/uploads/2022/03/51750146188_f9f235d6f7_k-1024x683.jpg" imageAlt="Campe??o2021Hulk" />    
                </Box>
                
            </Grid>
            <Grid item xs={6}>
                <Card titulo="Gest??o">
                    Com uma gest??o s??ria, moderna e transparente, capitaneada pelo presidente S??rgio Coelho, o vice-presidente Jos?? Murilo Proc??pio e os apoiadores conhecidos como 4Rs (Rubens Menin, Rafael Menin, Ricardo Guimar??es e Renato Salvador), o Galo vem construindo um futuro sustent??vel e se tornando refer??ncia na Am??rica Latina.
                </Card>
            </Grid>            
        </Grid>

        <Grid container>            
            <Grid item xs={6}>
                <Card titulo="Arena MRV - A Massa">
                    Arena MRV, um salto para o futuro ??? O Clube entra em uma nova era com a inaugura????o do seu est??dio pr??prio, a Arena MRV, em Belo Horizonte, prevista para o primeiro semestre de 2023. Com capacidade para 46 mil torcedores, a nova casa do Galo ser?? a mais moderna e tecnol??gica arena da Am??rica do Sul.
                    A Massa ??? Patrim??nio maior do Galo e temida pelos advers??rios, a torcida atleticana ?? a mais fan??tica e atuante do Brasil.
                </Card>
            </Grid>     
            <Grid item xs={6}>
                <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <CardImage imageSrc="https://atletico.com.br/wp-content/uploads/2022/04/torcida.jpg" imageAlt="A Massa" />    
                </Box>
                
            </Grid>  

            <Grid item xs={12}>
                <CardMainImage imageSrc="https://cassiozirpoli.com.br/wp-content/uploads/2022/02/2022_atletico_mg_campeao_da_supercopa_do_brasil_700_1.jpg" imageAlt="GaloDoido"/>
            </Grid>    
        </Grid>

        <Grid container>
            <Grid item xs={6}>
                <footer style={{margin:'30px'}}>
                    <a style={{padding:'40px'}} href="http://">About</a>
                    <a style={{padding:'40px'}} href="http://">Contact</a>
                    <a style={{padding:'40px'}} href="http://">Terms of use</a>
                    <a style={{padding:'40px'}} href="http://">About</a>                     
                </footer>
            </Grid>

            <Grid item xs={6}>
                <footer style={{margin:'30px', display:'flex', justifyContent:'center',alignContent:'end'}}>
                    <FacebookIcon sx={{fontSize:"30px"}} />                  
                    <InstagramIcon sx={{fontSize:"30px"}} />  
                                   
                </footer>
            </Grid>
        </Grid>
           
=======

function Landing() {

    return(
        <>
            <ScreenshotMonitorIcon sx={{fontSize: "150px"}}  />
            <ScreenshotMonitorIcon fontSize="large"  />
            <ScreenshotMonitorIcon fontSize="medium"  />
            <ScreenshotMonitorIcon fontSize="small"  />
            
            <Grid container >

                <Grid item xs={6}>
                    <Card titulo="Redmi 9">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla consequuntur ea voluptates amet veritatis tempora cumque, aliquid suscipit hic molestiae tenetur reprehenderit voluptatem neque non similique pariatur nemo a architecto eos. Reiciendis asperiores necessitatibus eveniet, dicta labore ipsam architecto. Exercitationem ducimus animi unde rem reiciendis odit delectus vitae, inventore consequuntur!
                    </Card>
                </Grid>

                <Grid item xs={6} >
                    <Box sx={{display: 'flex', justifyContent: "center", alignItems: "center"}}>
                        <CardImage 
                        imageSrc="https://s2.glbimg.com/eZhbs6wbw4jsNIkonx40CjSc1Ug=/0x0:695x460/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/n/V/5xQRVeRSyTowkTugZ9mA/2016-10-11-6610.jpg" 
                        imageAlt="Nokia Tijol??o" />
                    </Box>
                </Grid>

            </Grid>

            <Grid container>

                <Grid item xs={6} >
                    <Box sx={{display: 'flex', justifyContent: "center", alignItems: "center"}}>
                        <CardImage 
                        imageSrc="https://s2.glbimg.com/eZhbs6wbw4jsNIkonx40CjSc1Ug=/0x0:695x460/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/n/V/5xQRVeRSyTowkTugZ9mA/2016-10-11-6610.jpg" 
                        imageAlt="Nokia Tijol??o" />
                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <Card titulo="Redmi 9">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla consequuntur ea voluptates amet veritatis tempora cumque, aliquid suscipit hic molestiae tenetur reprehenderit voluptatem neque non similique pariatur nemo a architecto eos. Reiciendis asperiores necessitatibus eveniet, dicta labore ipsam architecto. Exercitationem ducimus animi unde rem reiciendis odit delectus vitae, inventore consequuntur!
                    </Card>
                </Grid>
                
            </Grid>
>>>>>>> c8abd95bd83254e683b3a833fd9ec7f132d64ffc
        </>
    )
}

<<<<<<< HEAD
export default Landing
=======
export default Landing
>>>>>>> c8abd95bd83254e683b3a833fd9ec7f132d64ffc
