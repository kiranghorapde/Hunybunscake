import React from 'react'

const BlogCard1 = ({ imageUrl , p}) => {

  return (
    
    <div className="sm:p-5 ">
     <img className="w-full  rounded-e-3xl  border-primary hover:border-y-4 hover:border-red-800  sm:w-[300px] sm:h-[200px] gap-6 p-4" src={imageUrl} alt="Card" />
      <div className='gap-6 p-4 text-center underline text-xl font-serif underline-offset-4 text-red-800' >{p} </div>
     </div>
    

  
  )
}

export default BlogCard1