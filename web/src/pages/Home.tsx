import React, {useEffect, useState} from 'react'
import '../styles/pages/home.css'
import Sidebar from '../components/Sidebar'
import api from '../services/api'
import ReactPaginate from 'react-paginate'


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
    const [currentPage, setCurrentPage] = useState(0)
    const [photosPerPage] = useState(50)
    const [search, setSearch] = useState('')


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

    const indexOfLastPhoto = (currentPage+1) * photosPerPage
    const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage
    const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto)

    const pageNumbers = Math.ceil(photos.length / photosPerPage);
    console.log(currentPhotos)

    function handleSelectPage(e:any){
        const selectedPage = e.selected
        const offset = selectedPage * 1
        setCurrentPage(offset)
        console.log(offset)
    }
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
                   <a href={item.url} target="_blank"><img src={item.thumbnailUrl} alt=""/></a> 
                    <p className="thumbTitle">{item.title}</p>
                </div>
                ))}
                <ReactPaginate
                    previousLabel={"Prev"}
                    nextLabel={"Next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageNumbers}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={7}
                    onPageChange={handleSelectPage}
                    containerClassName={"pagination"}
                    activeClassName={"active"}
                    />
            </div>
        </div>
     </div>
 )
}   
export default Home