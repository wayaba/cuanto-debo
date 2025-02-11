import { DolarBolsa, IndiceUVA } from '@/types/datos'

export async function getDolarBolsa(): Promise<DolarBolsa> {
  const response = await fetch('https://dolarapi.com/v1/dolares/bolsa')
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  const data: DolarBolsa = await response.json()
  return data
}

export async function getIndiceUVA(): Promise<IndiceUVA | undefined> {
  const response = await fetch('https://api.argentinadatos.com/v1/finanzas/indices/uva')
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  const data: IndiceUVA[] = await response.json()
  return data.at(-1)
}
