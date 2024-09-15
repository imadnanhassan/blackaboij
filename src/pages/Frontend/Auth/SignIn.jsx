/* eslint-disable no-unused-vars */

// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useUserLoginMutation } from '../../../redux/features/api/Customer/customer'
import { toast } from 'react-toastify'

const defaultTheme = createTheme()

export default function FrontendSignIn() {
  //   const navigate = useNavigate()
  // eslint-disable-next-line no-unused-vars
  const [userLogin] = useUserLoginMutation();

  const {handleSubmit, register, reset} = useForm()
  const navigate = useNavigate()
  const handleLogin = async data => {
    console.log(data)
    const formData = new FormData();
    formData.append('email',data.email)
    formData.append('password',data.password)
    formData.append('remember_me',data.remember_me)

    const response = await userLogin(formData);
    console.log(response)
    if(response?.data.status === 200){
      toast.success(response.data.message)
      localStorage.setItem('customerToken',response.data.token)
      navigate('/user/dashboard',{
        replace: true
      })
    }else if(response?.data.status === 401){
      response.data.errors.forEach(el => toast.error(el))
    }else if(response?.data.status === 402){
      Swal.fire('Error',response.data.message,'error')
    }else{
      Swal.fire('Error','Something went wrong. Please try again.','error')
    }

  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '80vh',
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(handleLogin)}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              {...register('email',{
                required: true
              })}
              autoComplete="email"
              autoFocus
              sx={{
                '& input': {},
                '& .MuiInputLabel-root': {
                  color: '#757575',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'black',
                },
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                  {
                    border: '1px solid #757575',
                  },
              }}
              
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              sx={{
                '& input': {},
                '& .MuiInputLabel-root': {
                  color: '#757575',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'black',
                },
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                  {
                    border: '1px solid #757575',
                  },
              }}
              {...register('password',{
                required: true
              })}
            />
            <FormControlLabel
              control={<Checkbox {...register('remember_me')} value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                '&:hover': {
                  backgroundColor: 'black',
                },
                backgroundColor: 'black',
              }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/forgetPassword" className="text-sky-500 underline">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/signUp" className="text-sky-500 underline">
                  Already an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  )
}
