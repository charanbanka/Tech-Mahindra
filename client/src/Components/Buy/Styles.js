import { makeStyles } from "@material-ui/core/styles";

export default makeStyles( (theme)=>({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems:"center",
        borderRadius: '15px',
        height: '100%',
        marginTop:theme.spacing(20),
      },
      
}))