import { View , Text} from "react-native";
import styles from "./abaProfile.style.js";


function AbaProfile(){

    return <View style={styles.container}>

        <View style={styles.item}>
            <Text style={styles.tittle}>Nome</Text>
            <Text style={styles.text}>Maria Eduarda Lopes Constantino</Text>
        </View>

        <View style={styles.item}>
            <Text style={styles.tittle}>E-mail</Text>
            <Text style={styles.text}>seiemailnao@gmail.com</Text>
        </View>


    </View>
}

export default AbaProfile;