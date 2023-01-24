import React from "react";
import { FlatList } from "react-native";
import TaskItem from "./item";
import { styles } from "./styles";

const TaskList = ({ tasks, onHandlerCheck,onHandlerDelete}) => {

    const renderItem = ({ item }) => (
        <TaskItem 
            item={item}
            onHandlerCheck={onHandlerCheck}
            onHandlerDelete={onHandlerDelete}
        />
      )
    
    const keyExtractor = (item) => item.id;

    return (
        <FlatList 
        data={tasks}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.listContainer}
      />
    )
}
export default TaskList;