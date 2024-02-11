import React, { useEffect, useState } from "react";
import { format } from 'date-fns';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import { Student } from "./Student";
function App(){
  
  return(
    <BrowserRouter>
      <Routes>
        <Route path='students'>
          <Route path=':id' element={<Student/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
 
}
export default App