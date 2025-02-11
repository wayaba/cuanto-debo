import { formatDate } from '@/lib/utils'
import { getDolarBolsa } from '@/services/datosAPI'
import { DolarBolsa } from '@/types/datos'
import { useEffect, useState } from 'react'

export const Dolar = () => {
  const [dolarBolsa, setDolarBolsa] = useState<DolarBolsa | null>(null)

  useEffect(() => {
    getDolarBolsa()
      .then((data) => setDolarBolsa(data))
      .catch((error) => console.error('Error fetching data:', error))
  }, [])

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-md flex flex-col items-center justify-center p-2 rounded border">
        <span className="text-2xl font-bold">Dólar Bolsa</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full mt-2">
          <div className="flex flex-col items-center justify-center w-full h-full p-2">
            <span>Compra</span>
            <span className="text-lg font-bold">${dolarBolsa ? dolarBolsa.compra : ''}</span>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full p-2">
            <span>Venta</span>
            <span className="text-lg font-bold">${dolarBolsa ? dolarBolsa.venta : ''}</span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full p-2">
          <span>Fecha de actualización</span>
          <span className="text-lg font-bold">{dolarBolsa ? formatDate(dolarBolsa.fechaActualizacion) : ''}</span>
        </div>
      </div>
    </div>
  )
}
