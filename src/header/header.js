import React,{useState} from 'react'
import {AppBar,Toolbar,Typography,Box,Button,IconButton, TextField} from '@material-ui/core'
import AddIcon from '@mui/icons-material/Add';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { useNavigate } from 'react-router-dom';
import BasicModal from '../ReuseableComponent';
import CloseIcon from '@mui/icons-material/Close';

const style={
    Iconflex:{
        display:'flex',
        flexDirection:'row',
        width :'200px',
        justifyContent:'space-between'
    },
    flex:{
        display:'flex', 
        flexDirection:'row',
        justifyContent:'space-between'
    },
    field:{
        display:'flex',
        flexDirection:'column',
        gap:'10px',
        marginTop:'10px'
    }
}

function Header() {

    const [isOpen,setIsOpen]= useState(false)

    const navigate = useNavigate()

    const toBalance=()=>{

        navigate('/balance')

    }

    const closeModel=()=>setIsOpen(false)

    const openModel=()=>setIsOpen(true)

    
    return(
        <>
             <AppBar component='nav'  style={{backgroundColor:'ActiveBorder',color:'black'}}>
                  <Toolbar style={style.flex}>
                    <Box style={{'display':'flex'}}>
                        <AccountBalanceIcon/>
                        <Typography>Banking APP</Typography>
                    </Box>
                    <Box style={style.Iconflex}>
                        <IconButton onClick={openModel}>
                            <AddIcon/>
                        </IconButton>
                        <IconButton>
                            <AccountBalanceWalletIcon onClick={toBalance}/>
                        </IconButton>
                    </Box>
                  </Toolbar>
             </AppBar>
             <BasicModal isOpen={isOpen} closeModel={closeModel}>
                 <IconButton onClick={closeModel}>
                        <CloseIcon/>
                 </IconButton>
                 <Box>
                    <Typography variant='h6' style={{textAlign:'center'}}>Create New Account</Typography>
                 </Box>
                 <Box style={style.field}>
                    <TextField type='text' variant='outlined' size='small' fullWidth label='Enter Name'/>
                    <TextField type='email' variant='outlined' size='small' fullWidth label='E-mail'/>
                    <TextField type='number' variant='outlined' size='small' fullWidth label='Mobile NO'/>
                    <TextField type='number' variant='outlined' size='small' fullWidth label="Opening Balance"/>
                 </Box>
                 <Button variant='contained' fullWidth color='primary' style={{marginTop:'15px'}}>Create Account</Button>
             </BasicModal>
        </>
    )

}

export default Header