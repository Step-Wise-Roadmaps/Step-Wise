
export const GCLDS = ({ lessonsWithCourses, isLoading }) => {
    if (isLoading) {
        return [
            {
                course_id: null,
                courcesName: "Loading...",
                lessons: ["Loading..."],
                ComplitedReat: "0%"
            }
        ];
    }

    if (!lessonsWithCourses || lessonsWithCourses.length === 0) {
        return [
            {
                course_id: null,
                courcesName: "dont get Cources",
                lessons: ["dont get lesson"],
                ComplitedReat: "0%"
            }
        ];
    }

    const grouped = {};

    lessonsWithCourses.forEach((item) => {
        const cId = item.course_id || item.id;
        
        if (!grouped[cId]) {
            grouped[cId] = {
                course_id: cId,
                courcesName: item.course_name || "dont get Cources", 
                lessons: [],
                ComplitedReat: "100%"
            };
        }
        
        if (item.lesson_name && !grouped[cId].lessons.includes(item.lesson_name)) {
            grouped[cId].lessons.push(item.lesson_name);
        }
    });

    return Object.values(grouped);
};