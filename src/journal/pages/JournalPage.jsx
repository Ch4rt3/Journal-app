import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothinSelectedView } from "../view"
import { AddOutlined } from "@mui/icons-material"
import { startNewNote } from "../../store/journal"
import { useDispatch, useSelector } from "react-redux"


export const JournalPage = () => {

  const dispatch = useDispatch();
  const { isSaving, active } = useSelector( state => state.journal )
  

  const onClickNewNote = () => {

    dispatch( startNewNote() );

  }
  
  return (
    <>
      <JournalLayout>


        {/* <Typography >In est sunt in mollit. Veniam voluptate consequat quis velit in sit veniam. Nisi do sunt id consequat labore tempor sunt voluptate aliquip. Anim sunt nisi occaecat ullamco voluptate enim est nostrud nulla sit. Commodo incididunt tempor ut ex. Labore et qui veniam amet sit adipisicing et non nostrud non aliquip sunt anim officia.</Typography > */}

        {
          (!!active)
            ? <NoteView/>
            : <NothinSelectedView />
        }
        
        <IconButton
          onClick={ onClickNewNote }
          size='large'
          disabled = { isSaving }
          sx={{
            color: 'white',
            backgroundColor: 'error.main',
            ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
            position: 'fixed',
            right: 50,
            bottom: 50
          }}
        >
          <AddOutlined sx={{ fontSize: 30 }} />
        </IconButton>

      </JournalLayout>
    </>
  )
}
