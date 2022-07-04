import React,{Component} from 'react'
import { ButtonGroup,Button,Typography,Box,TextField,IconButton } from '@mui/material'
import BasicModal from '../ReuseableComponent'
import CloseIcon from '@mui/icons-material/Close';


class Balance extends Component{

    constructor(){
        super()
        this.state={
            isOpen:false,
            balancePage:false
        }
    }


    openBalancePage(){

        this.setState({
            ...this.state,
            isOpen:true,
            balancePage:true
        })

    }


    openCheckBalancePage(){

        this.setState({
            ...this.state,
            isOpen:true,
            balancePage:false
        })

    }

    closeModel(){
    
        this.setState({
            ...this.state,
            isOpen:false
        })

    }



    render(){

        return(
            <>
                 <ButtonGroup color='primary' variant='contained'
                 style={{display:'flex',flexDirection:'column',width:'80%',marginLeft:'10%',gap:'5px',marginTop:'20%'}}>
                    <Button onClick={this.openBalancePage.bind(this)}>Update Balance</Button>
                    <Button onClick={this.openCheckBalancePage.bind(this)}>Check Balance</Button>
                 </ButtonGroup>
                 {
                    this.state.balancePage?
                    <BasicModal isOpen={this.state.isOpen} closeModel={this.closeModel.bind(this)}>
                        <IconButton onClick={this.closeModel.bind(this)}>
                           <CloseIcon/>
                        </IconButton>
                        <Box>
                           <Typography variant='h6' style={{textAlign:'center'}}>Transection</Typography>
                        </Box>
                        <Box style={{display:'flex',flexDirection:'column',gap:'10px',marginTop:'10px'}}>
                            <TextField type='number' variant='outlined' size='small' fullWidth label='Enter Account No'/>
                            <TextField type='number' variant='outlined' size='small' fullWidth label='Enter Amount'/>
                        </Box>
                        <ButtonGroup variant='contained' fullWidth style={{display:'flex',flexDirection:'row',gap:'10px',marginTop:'10px'}}>
                            <Button >Withdraw</Button>
                            <Button>Add</Button>
                        </ButtonGroup>
                    </BasicModal>
                    
                    :

                    <BasicModal isOpen={this.state.isOpen} closeModel={this.closeModel.bind(this)}>
                         <IconButton onClick={this.closeModel.bind(this)}>
                           <CloseIcon/>
                        </IconButton>
                        <Box>
                           <Typography variant='h6' style={{textAlign:'center'}}>Check Balance</Typography>
                        </Box>
                        <Box style={{display:'flex',flexDirection:'column',gap:'10px',marginTop:'10px'}}>
                            <TextField type='number' variant='outlined' size='small' fullWidth label='Enter Account No'/>
                        </Box>
                        <Button variant='contained' fullWidth style={{marginTop:'15px'}}>Check balance</Button>
                    </BasicModal>
                 }
            </>
        )

    }

}

export default Balance