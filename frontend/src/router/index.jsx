import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MasterBarang from '../pages/MasterBarang'
import TransaksiBarang from '../pages/TransaksiBarang'

export default function Router() {
  return (
    <Routes>
    <Route path='/' element={<MasterBarang/>}/>
    <Route path='/transaksi' element={<TransaksiBarang/>}/>
    </Routes>
  )
}
