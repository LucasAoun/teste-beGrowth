import React, {useEffect, useState} from 'react'
import '../styles/pages/home.css'
import Sidebar from '../components/Sidebar'
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
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [photosPerPage] = useState(50)


    useEffect(()=>{
            setLoading(true)
        api.get('photos').then(response=>{
            setPhotos(response.data)
            setLoading(false)
          })
    },[])

    if(loading){
        return <h1>Loading...</h1>
    }



    const indexOfLastPhoto = currentPage * photosPerPage
    const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage
    const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto)

    const pageNumbers = []
    for(let i = 1; i<=Math.ceil(photos.length / photosPerPage); i++){
        pageNumbers.push(i)
    }

    const currentPageNumbers = pageNumbers.slice(0,10)
    const paginate = (pageNumber:any) => setCurrentPage(pageNumber)

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
                 {currentPhotos.map(item=>(
                <div key={item.id} className="card">
                    <img src={item.thumbnailUrl} alt=""/>
                    <p className="thumbTitle">{item.title}</p>
                </div>
                ))}
                 <ul className="pagination">
                {currentPageNumbers.map(number=>(
                    <li className="page-item">
                        <a id="page-link" href="#" onClick={()=>paginate(number)} className="page-link">
                            <p>{number}</p>
                        </a>
                    </li>
                ))}
            </ul>
            </div>
        </div>
     </div>
 )
}   
export default Home