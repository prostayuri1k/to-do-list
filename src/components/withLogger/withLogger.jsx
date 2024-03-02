import React, {useEffect} from 'react';

export const withLoggerTodoItem = (WrappedComponent) => {
    return (props) => {

        const handleTask = (isCompleted) => {
            (!isCompleted) ? console.log(`Task: ${props.title} completed`) : console.log(`Task ${props.title} uncompleted`);
        }

        useEffect(() => {
            console.log(`Added task: ${props.title}`);
            return () => {
                console.log(`Deleted task: ${props.title}`)
            }
        }, []);
        return <WrappedComponent {...props} handleTask={handleTask} />;
    };
};

export const withLoggerEditItem = (WrappedComponent) => {
    return (props) => {

        useEffect(() => {
            console.log(`Change task ${props.title}`)
            return () => {
                console.log(`Update task ${props.title}`)
            }
        }, []);

        return <WrappedComponent {...props}/>
    }
}