import { makeStyles } from "@material-ui/core/styles";

export default makeStyles( (theme)=>({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '15px',
        height: '100%',
        position: 'relative',
        marginTop:theme.spacing(2),
      },
      image: {
        height: "200px",
        padding: theme.spacing(0.5)
      },
      content:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems:"center",
      },
      buttons:{
        display: "flex",
        justifyContent:"center",
        margin: theme.spacing(1),
      },
      edit:{
        display: "flex",
        flexDirection:"row-reverse",
        marginRight: theme.spacing(2),
      }
      
}))