import { View , Image, TextInput, Text} from "react-native";
import icon from "../../constants/icon.js";
import { styles } from "../login/login.style.js";
import Button from "../../components/button/button.jsx";
import { TouchableOpacity } from "react-native";


function Login(){
    return <View style={styles.container}>

        <View style={styles.containerLogo}>
            <Image source={icon.logo} style={styles.logo}/>
        </View>

        <View>
            <View style={styles.containerInput}>
                <TextInput style={styles.input} placeholder="E-mail"></TextInput>        
            </View>
            <View style={styles.containerInput}>
            <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true}></TextInput>
            </View>
           
            <Button texto="Acessar"/>
        </View>

        <View style={styles.footer}>
            <Text> Não tenho conta. </Text>
            <TouchableOpacity> 
                <Text style={styles.footerLink}> Criar conta agora.</Text>
            </TouchableOpacity>
        </View>


    </View>
}

export default Login;