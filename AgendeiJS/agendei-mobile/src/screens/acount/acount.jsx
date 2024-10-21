import { View , Image, TextInput, Text} from "react-native";
import icon from "../../constants/icon.js";
import { styles } from "../acount/acount.style.js";
import Button from "../../components/button/button.jsx";
import { TouchableOpacity } from "react-native";


function Acount(){
    return <View style={styles.container}>

        <View style={styles.containerLogo}>
            <Image source={icon.logo} style={styles.logo}/>
        </View>

        <View>
            <View style={styles.containerInput}>
                <TextInput style={styles.input} placeholder="Nome"></TextInput>        
            </View>
            <View style={styles.containerInput}>
                <TextInput style={styles.input} placeholder="E-mail"></TextInput>        
            </View>
            <View style={styles.containerInput}>
            <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true}></TextInput>
            </View>
           
            <Button texto="Criar Conta"/>
        </View>

        <View style={styles.footer}>
            <Text>Já tenho conta.</Text>
            <TouchableOpacity> 
                <Text style={styles.footerLink}>Fazer login.</Text>
            </TouchableOpacity>
        </View>


    </View>
}

export default Acount;