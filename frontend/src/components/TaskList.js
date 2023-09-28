import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskList = () => {
    // State variables created using the useState hook
    // tasks stores an array of tasks, and setTasks is used to update the tasks state
    const [tasks, setTasks] = useState([]);
    // Manage new task text input
    const [newTask, setNewTask] = useState('');

    // The useEffect hook fetches the list of tasks from an API when the component mounts
    // It uses the axios library to make a GET request, which corresponds 
    // to an endpoint on the server that returns a list of tasks.
    useEffect(() => {
      axios.get('http://localhost:8000/api/tasks')
          // TODO: fill in this request
    }, []);

    // Add a new task to the list by making a POST request.
    // Then, clear the input and refresh the list of tasks.
    const addTask = () => {
      // TODO: fill in this function
    };

    // Delete a task from the list, then refresh the list of tasks.
    const deleteTask = (index) => {
      // TODO: fill in this function
    };

    // Make a GET request to refresh the list of tasks.
    // Use this function in addTask and deleteTask.
    const fetchTasks = () => {
      // TODO: fill in this function
    };

    return (
    <div>
      {/*
      TODO: write HTML here with a header, text input
      to add a new task, and list of current tasks with delete buttons.
      Call the necessary functions to update newTask, add a task, 
      and delete a task. 

      Hint: look into the map() function to assign an index to each task
      */}

    </div>
    );
    };

    export default TaskList;
