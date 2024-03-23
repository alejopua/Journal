import { Navigate, Routes, Route } from "react-router-dom"
import { JournalPage } from "../page/JournalPage"


export const JournalRoutes = () => {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<JournalPage />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}
