import React from "react";
import { TouchableOpacity, Text, View } from 'react-native'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { styles } from "./styles";

const TaskItem = ({ item, onHandlerCheck,onHandlerDelete }) => {
    return (
    <View style={{...styles.itemContainer,backgroundColor: item.completed ? "#4cd137" : "#efeff0"}}>
      <Text style={styles.itemList}>{item.value}</Text>
      <View style={styles.btnContainer}>
        {!item.completed && 
                <TouchableOpacity onPress={() => onHandlerCheck(item)}>
                <FontAwesomeIcon style={styles.btn} name="check" color={"green"} size={25} />
              </TouchableOpacity>
        }

        
        <TouchableOpacity onPress={() => onHandlerDelete(item)} >
         <FontAwesomeIcon  style={styles.btn} name="close" color={"red"} size={25} />
        </TouchableOpacity>
      </View>
    </View>
    )
}

export default TaskItem;