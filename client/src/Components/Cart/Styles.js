import { makeStyles } from "@material-ui/core/styles";

export default makeStyles( (theme)=>({
    container:{
        display: "flex",
        flexDirection:"column-reverse",
        alignItems:"center",
        marginTop:theme.spacing(1),
    },
    typograpy:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginTop:theme.spacing(10),
    },
    loadingPaper:{
        marginTop:theme.spacing(10),
    }
      
}))