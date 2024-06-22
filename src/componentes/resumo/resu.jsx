import React from 'react'
import * as C from "./resustyle"
import Resumeitens from '../resumeItens/itens'
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";


const Resume = ({income,expense,total})=>{
  return (
    <C.Container>
      <Resumeitens
        title="Entradas"
        Icon={FaRegArrowAltCircleUp}
        value={income}
      />
      <Resumeitens
        title="Saídas"
        Icon={FaRegArrowAltCircleDown}
        value={expense}
        
      />
      <Resumeitens title="Total" Icon={FaDollarSign} 
      value={total} />
    </C.Container>
  )
}

export default Resume