import React from 'react';

const TaskSeparator = props => {
    return (
        <p style={{padding: '30px', fontWeight: 'bold'}}>Lesson {props.taskNumber}</p>
    );
};

export default TaskSeparator;