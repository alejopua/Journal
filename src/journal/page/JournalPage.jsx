import { AddOutlined } from "@mui/icons-material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedViews } from "../views"
import IconButton from '@mui/material/IconButton'

export const JournalPage = () => {
  return (
    <JournalLayout>
      <NothingSelectedViews />
      {/* <NoteView /> */}
      <IconButton 
        size="large" 
        sx={{ 
            color: 'white',
            backgroundColor: 'error.main', 
            ':hover': { backgroundColor: 'error.main', opacity: '0.8'}, 
            position: 'fixed', 
            right: 36, 
            bottom: 35
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  )
}
