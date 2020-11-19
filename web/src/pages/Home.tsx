import React, {useEffect, useState} from 'react'
import '../styles/pages/home.css'
import Sidebar from '../components/Sidebar'
import roxo from '../assets/roxo.jpg'
import api from '../services/api'





interface Item {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
}

function Home (){


    const [photos, setPhotos] = useState<Item[]>([])

    useEffect(()=>{
        api.get('photos').then(response=>{
            setPhotos(response.data)
          })
    },[])

 return(
     <div className="page-home">
         <Sidebar/>
         <div className="page-container">
             <nav>
                 <li>Mais procuradas</li>
                 <li>Imagens Populares</li>
                 <li>Novidades</li>
                 <li>Mais</li>
             </nav>
             
             <div className="card-container">
                 {photos.map(item=>(
                <div className="card">
                    <img src={item.thumbnailUrl} alt=""/>
                    <p className="thumbTitle">{item.title}</p>
                </div>
                ))}
                
            </div>
        </div>
     </div>
 )
}   
export default Home