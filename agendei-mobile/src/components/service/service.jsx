import { View ,Text } from "react-native";
import Button from "../button/button.jsx"
import { styles } from "./service.style.js";

function Service(props){
       return <View style={styles.service}>   
            <View style={styles.containerText}>
                <Text style={styles.description}>{props.description}</Text>
                <Text style={styles.price}>{props.price}</Text>
            </View> 
            <View style={styles.containerButton}>
                <Button text= "Agendar"/>
            </View>


        </View>
}

export default Service;