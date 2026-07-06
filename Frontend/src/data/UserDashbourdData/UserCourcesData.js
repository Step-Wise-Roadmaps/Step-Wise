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
                courcesName: "No Courses Found",
                lessons: ["No lessons"],
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
                courcesName: item.course_name || "Course", 
                lessons: [],
                totalLessons: 0,
                completedLessons: 0
            };
        }
        
        if (item.lesson_name && !grouped[cId].lessons.includes(item.lesson_name)) {
            grouped[cId].lessons.push(item.lesson_name);
            grouped[cId].totalLessons += 1;
            
            if (item.is_completed) {
                grouped[cId].completedLessons += 1;
            }
        }
    });

    return Object.values(grouped).map(course => {
        const percent = course.totalLessons > 0 
            ? Math.round((course.completedLessons / course.totalLessons) * 100) 
            : 0;

        return {
            course_id: course.course_id,
            courcesName: course.courcesName,
            lessons: course.lessons,
            ComplitedReat: `${percent}%`
        };
    });
};