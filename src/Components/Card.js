import react from "react"
import{FcLike, FcLikePlaceholder} from "react-icons/fc";
import Cards from './Cards'
import{toast} from 'react-toastify'

const Card = (props)  =>

{
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;
   
    function clickHandler(){
        if(likedCourses.includes(course.id))
        {
            // phele se like hua pada h
            setLikedCourses((prev)=> prev.filter((cid)=>(cid !==course.id)));
             toast.warning("like removed");
        }
        else{

            //  phele se like nhi h
            if(likedCourses.length===0)
            {
                setLikedCourses([course.id]);
            }
            else{
                setLikedCourses((prev)=>[...prev,course.id])
            }
            toast.success("Liked Successfully");
        }

    }

    
    
    return(
        <div className="w-[300px] rounded-md overflow-hidden  bg-opacity-80 bg-gray-800">
            <div className="relative">
                <img src={course.image.url}></img>

                <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
                  grid place-items-center">
                    <button onClick={clickHandler}>
                        
                        {
                            likedCourses.includes(course.id)?
                            (<FcLike fontSize = "1.75rem"/>):
                            (<FcLikePlaceholder fontSize = "1.75rem"/>)
                            
                        }
                    </button>
                </div>
                </div>


               
                <div className="p-4">
                    <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                    <p className="mt-2 text-white">
                        {
                        course.description.length>100?
                        (course.description.substr(0,100)+"..."):
                        (course.description)
}
                        
                        </p>
                </div>

           
        </div>
    )

}





export default Card;