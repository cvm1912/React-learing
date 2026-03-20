import React from 'react'
import Dogcard from './Components/Dogcard'
import Counter from './Components/Counter'

const App = () => {
  return (
    <div>
      <Counter/>
      <Dogcard name="Bruno" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcPczF9OkeSbIdvP0AiM0Zs_aHZbQaXEs2iRGKuZjq15z3W6EN5wNuq7giecR1AMkP6ytmh1cW5ePbMSSdtM7lcng0MBFIVZaD0_cqVg&s=10"/>
      <Dogcard name="Tiger" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvAljt2CRnukkxptiKDkN_-NpT987J7FO_IGrvJ-WBm9V_0h-tw2T4PvmOlvhXdgOfqx4LS0AkZESfNG5zEk84P46YumQoKR8mUCS3ug&s=10"/>
    </div>
  )
}

export default App
