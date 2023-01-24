import React, { useState } from 'react';
import { View ,Alert} from 'react-native';
import { styles } from './styles';
import { AddItem, CustomModal, TaskList } from './components';
import { colors } from './constants/theme/colors';


const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const onHandlerChange = (text) => {
    setTask(text)
  }

  console.log("eee",tasks)

  const onHandlerSubmit = () => {
    setTasks([
      ...tasks,
      {
        id: Math.random().toString(),
        value: task,
        completed: false
      }
    ]);
    setTask('');
  }

  const onHandlerModal = (item) => {
    setIsModalVisible(!isModalVisible)
    setSelectedTask(item);
  }
  
  const onHandleCancel = () => {
    setIsModalVisible(!isModalVisible);
    setSelectedTask(null);
  }

  const onHandlerCheck = (item) => {
    const update = tasks.map(obj => {
      if (obj.id === item.id) {
        obj.completed = true
        return {...obj};
      }
      return obj;
    });

    setTask(update);
  }
  const deleteItem = (item) => {
    setTasks((prevTaskList) => prevTaskList.filter((task) => task.id !== item.id));

  }
  const onHandlerDelete = (item) => {
  console.log("eliminado",item)

  Alert.alert(
    //title
    'EY',
    //body
    "Are you sure to delete this item?",
    [
      { text: 'Yes', onPress: () => deleteItem(item) },
      { text: 'No', onPress: () => console.log('OK Pressed') },
    ],
    { cancelable: true }
  );
};

  

  return (
    <View style={styles.container}>
      <AddItem 
        buttonColor={colors.primary}
        buttonText='Add'
        onHandlerChange={onHandlerChange}
        onHandlerSubmit={onHandlerSubmit}
        placeholder='add a new task'
        task={task}
      />
      <TaskList 
        tasks={tasks}
        onHandlerCheck={onHandlerCheck}
        onHandlerDelete={onHandlerDelete}
      />
    
    </View>
  );
}


export default App;