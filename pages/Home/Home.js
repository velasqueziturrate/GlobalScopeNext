import React from "react";
// core components
import Noticias from "./Home-Sections/NoticiasFinanzas.js"
import Header from "../components/Headers/indexHeader.js"
import Saif from './Home-Sections/Saif.js'; 
import Informes from './Home-Sections/Informes.js';
import axios from 'axios'; 
import {useQuery} from "@apollo/react-hooks";
import {QUERY_NOTICIAS, QUERY_INFORMES} from "./helpers/graphql/querys"
import client from "./helpers/graphqlEndpointFInanzasDigital"
export default function Home() {
  
  
  React.useEffect( ()=> {
    getJson(); 
  },[]);
 const {data:dataNoticias , loading: loadingNoticias, error: errorNoticias} = useQuery(QUERY_NOTICIAS,
  {variables: {
    first: 4
  }, client}); 
  const {data:dataInformes , loading: loadingInformes, error: errorInformes} = useQuery(QUERY_INFORMES,
    {variables: {
      first: 3
    }, client}); 

   const [noticias,setNoticias] = React.useState(); 
   const [informes, setInformes] = React.useState(); 

  
  
  const getJson= async () => {
    const {data} = await await axios.get("https://www.finanzasdigital.com/traeinfo.php?token=aHcT639@/$muzk56&pagina1=0&numNoticias1=3&categoriaIncluir1=-5,-2093,-41,-1574,-7014&largo1=0&pagina2=0&numNoticias2=6&categoriaIncluir2=5,2093,-7014&largo2=0");
    setNoticias(data.slice(0,4)); 
    setInformes(data.slice(4,7)); 
   
  }


  return (
     <div className="main"> 
      <Header/>
    <div className="homeContainer">  
    <Saif/>
    <Informes informes = {dataInformes? dataInformes.posts.nodes: null}/>
    <Noticias noticias= {dataNoticias? dataNoticias.posts.nodes: null}/>
       
    </div>
    </div>
  );
}