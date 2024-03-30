import { SaveOutlined } from '@mui/icons-material'
import { Grid, Typography, Button, TextField } from '@mui/material'
import { ImageGallery } from '../components'

export const NoteView = () => {
  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb:1,  }}>
      <Grid item>
        <Typography variant='h5' fontSize={ 36 } fontWeight='light'>28 de Marzo, 2024</Typography>
      </Grid>
      <Grid item>
        <Button color='primary'>
          <SaveOutlined sx={{ fontSize: 30, mr:1 }} />
          Save
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type='text'
          fullWidth
          variant='filled'
          label="Title"
          placeholder='Create a title'
          sx={{ border: 'none', mb: 1}}
        />

        <TextField
          type='text'
          fullWidth
          multiline 
          minRows={ 5 }
          variant='filled'
          placeholder='Described you note'
          sx={{ border: 'none', mb: 1}}
        />
      </Grid>

      <ImageGallery />

    </Grid>
  )
}
