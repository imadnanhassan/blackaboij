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
import { Link, useNavigate } from 'react-router-dom'
// import { useCart } from '../Utilites/CartContext';

import { useForm } from 'react-hook-form'
import { useRegisterCustomerMutation } from '../../../redux/features/api/Customer/customer'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'
import { useContext } from 'react'
import { CustomerContext } from '../../../Providers/CustomerProvider'
import { FaSpinner } from 'react-icons/fa'

const defaultTheme = createTheme()

export default function FrontendSignUp() {
  const { loading,setCustomer } = useContext(CustomerContext)
  const [userRegistration] = useRegisterCustomerMutation()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({})

  const onSubmit = async data => {
    console.log(data)
    const formData = new FormData()
    formData.append('name', data.fullName)
    formData.append('email', data.email)
    formData.append('password', data.password)
    const response = await userRegistration(formData)
    if (response?.data.status === 200) {
      localStorage.setItem('customerToken', response.data.token)
      setCustomer(response?.data?.customer)
      navigate('/user/dashboard', {
        replace: true,
      })
      toast.success(response.data.message)
    } else if (response?.data.status === 401) {
      response.data.errors.forEach(el => toast.error(el))
    } else if (response?.data.status === 402) {
      Swal.fire('Error', response.data.message, 'error')
    } else {
      Swal.fire('Error', 'Something went wrong. Please try again.', 'error')
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
              {loading ? (
                <>
                  <FaSpinner className="animate-spin" />
                  Submitting...
                </>
              ) : (
                <>Sign Up</>
              )}
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
