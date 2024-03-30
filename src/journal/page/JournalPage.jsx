import { JournalLayout } from "../layout/JournalLayout"
import { NoteView } from "../views"

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <NothingSelectedViews /> */}
      <NoteView />
    </JournalLayout>
  )
}
