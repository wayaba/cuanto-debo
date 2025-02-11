import { useEffect, useState } from 'react'
import { getIndiceUVA } from '@/services/datosAPI'
import { IndiceUVA } from '@/types/datos'
import { formatDate } from '@/lib/utils'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export const UVA = () => {
  const [indiceUVA, setIndiceUVA] = useState<IndiceUVA | undefined>(undefined)
  const [cantidadUVA, setCantidadUVA] = useState<number>(0)
  const [totalAPagar, setTotalAPagar] = useState<number>(0)

  useEffect(() => {
    getIndiceUVA()
      .then((data) => setIndiceUVA(data))
      .catch((error) => console.error('Error fetching data:', error))
  }, [])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value)
    if (!isNaN(value) && value <= 99999999) {
      // Limitar a 8 dígitos
      setCantidadUVA(value)
    }
  }

  const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    event.target.select()
  }

  const handleCalcular = () => {
    if (indiceUVA) {
      setTotalAPagar(cantidadUVA * indiceUVA.valor)
    }
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleCalcular()
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-md flex flex-col items-center justify-center p-4 rounded border">
        <span className="text-2xl font-bold">Índice UVA</span>
        {indiceUVA ? (
          <div className="flex flex-col items-center justify-center w-full h-full p-4">
            <span>Fecha: {formatDate(indiceUVA.fecha)}</span>
            <span className="text-lg font-bold">Valor: ${indiceUVA.valor}</span>
          </div>
        ) : (
          <span className="text-lg">No hay datos disponibles.</span>
        )}
        <span className="m-2 text-2xl font-bold">Cálculo deuda</span>
        {indiceUVA ? (
          <div className="flex w-full justify-center max-w-sm items-center space-x-2">
            <Input
              type="number"
              onKeyUp={handleKeyPress}
              className="w-28"
              placeholder="UVAs"
              onFocus={handleInputFocus}
              value={cantidadUVA}
              max={8}
              onChange={handleInputChange}
            />
            <Button variant="secondary" onClick={handleCalcular}>
              Calcular
            </Button>
          </div>
        ) : (
          <span className="text-lg">No hay datos disponibles para calcular deuda.</span>
        )}
        <div className="flex flex-col justify-center mt-4 gap-2">
          <Badge className="ml-2 text-3xl" variant="destructive">
            ${totalAPagar.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </Badge>
        </div>
      </div>
    </div>
  )
}
