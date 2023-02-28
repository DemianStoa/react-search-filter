import React, { useEffect, useState } from 'react'
import { getPosts } from './api'
import Post from './Post'

const Filter = () => {
    const [posts, setPosts] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState([])


    const handleSearch = () => {
        if(searchTerm==="") {
            setSearchResults(posts) 
            return
        }
       const temp = posts.filter((item) => {
            if( item.title.includes(searchTerm))
            {return  item}
        })
        setSearchResults(temp)
    }

useEffect(()=>{
    getPosts().then((data) =>{
        setPosts(data)
        setSearchResults(data)
    })
},[])
  return (
    <div>
        <input 
        type="text" 
        value={searchTerm} 
        placeholder="input random letters"
        onChange={e=>setSearchTerm(e.target.value)}/>
        <button onClick={handleSearch}> Search</button>
        <p>{`Results for ${searchTerm}`}</p>
        {searchResults?.map(item => {
            console.log(item.body)
            return(
            <Post 
                title={item.title}
                body={item.body}
                key = {item.id}
            />
            )
        })}
    </div>
  )
}

export default Filter