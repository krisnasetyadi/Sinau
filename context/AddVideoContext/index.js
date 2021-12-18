import { createContext, useState } from "react";

// must be exported default at the bottom
const VidCourseContext  = createContext({
    availCourses : [],
    totalCourses: 0,
    addVidCourse: (NewVideoUploaded) => {}
});

// function responsible for updating value
// should be EXPORTED
export function VidCoursesContextProvider(props) {
    const [VidinstCourses, setVidInstCourse] = useState([])
    const context = {
        availCourses: VidinstCourses,
        totalCourses: VidinstCourses.length,
        addVidCourse: AddNewVidHandler

    }

    function AddNewVidHandler(NewVideoUploaded) {
        setVidInstCourse( (prevExistVideos) => {
            return prevExistVideos.concat(NewVideoUploaded)
        })
    }


    return(
        <VidCoursesContextProvider.Provider value={context}>
            {props.children}
        </VidCoursesContextProvider.Provider>
    )
}

export default VidCourseContext; 