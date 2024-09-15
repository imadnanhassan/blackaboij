import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Link } from 'react-router-dom'
// import { useCart } from '../Utilites/CartContext';

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const defaultTheme = createTheme()

export default function FrontendSignUp() {
  // const { tokenSet } = useCart;
  // const navigate = useNavigate()
  // const handleSubmit = async event => {
  //   event.preventDefault()
  //   const data = new FormData(event.currentTarget)

  //   // Prepare user registration data
  //   const userData = {
  //     name: data.get('fullName'),
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   }

  //   try {
  //     // Make a POST request to the backend server
  //     const response = await fetch('http://localhost:9000/v1/auth/register', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(userData),
  //     })

  //     // Handle the response accordingly
  //     if (response.ok) {
  //       console.log(response.ok, response)
  //       const result = await response.json()
  //       localStorage.setItem('token', result.tokens.access.token)
  //       console.log(result)
  //       navigate('/signIn')
  //     } else {
  //       console.error(response)
  //     }
  //   } catch (error) {
  //     console.error('Error:', error)
  //   }
  // }

  // Validation schema
  
  
  const schema = yup.object().shape({
    fullName: yup.string().required('Full Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup
      .string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    terms: yup.bool().oneOf([true], 'You must accept the terms and conditions'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema), 
  })

  const onSubmit = async data => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/v1/front/customer/registration`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        },
      )

      if (!response.ok) {
        throw new Error('Registration failed')
      }

      const result = await response.json()
      console.log('Registration successful:', result)
    } catch (error) {
      console.error('Error:', error.message)
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
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{ mt: 3 }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  {...register('fullName')}
                  autoComplete="given-name"
                  name="fullName"
                  required
                  fullWidth
                  id="fullName"
                  label="Full Name"
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
              </Grid>

              <Grid item xs={12}>
                <TextField
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
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
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  {...register('password')}
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
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
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox {...register('terms')} color="primary" />}
                  label="Accept Terms and Conditions"
                />
                {errors.terms && (
                  <p style={{ color: 'red' }}>{errors.terms.message}</p>
                )}
              </Grid>
            </Grid>
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
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/signIn" className="text-sky-500">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} />  */}
      </Container>
    </ThemeProvider>
  )
}
