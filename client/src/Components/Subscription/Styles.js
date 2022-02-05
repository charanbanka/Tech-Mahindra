import { makeStyles } from "@material-ui/core/styles";

export default makeStyles( (theme) =>({
    paper:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        alignItems:"center",
        width:'350px',
        marginTop:theme.spacing(5),
    },
    form:{
        padding:theme.spacing(2),
    },
    button:{
        marginTop:theme.spacing(2),
        //background: "orange",
        marginBottom:theme.spacing(2),
    },
    fileInput:{
        marginTop:theme.spacing(1),
        display: "grid",

    }
}))