import { COLORS,FONTSIZE } from "../../constants/theme"

export const styles = {

    container:{
        backgroundColor:COLORS.white,
        flex:1, 
        
    },
    banner:{
        backgroundColor:COLORS.blue,
        justifyContent: "center",  
        alignItems: "center",
        paddingTop:10,
        paddingBottom:25

    },
    name:{
        fontSize:FONTSIZE.md,
        color:COLORS.white,
        fontWeight: "bold",
        marginTop:5

    },
    specialty:{
        fontSize:FONTSIZE.sm,
        color:COLORS.white,
        marginTop:3
    }
}
