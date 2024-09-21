import { useMemo } from 'react'

// Custom hook for formatting a date
export const useFormattedDate = isoDate => {
  return useMemo(() => {
    if (!isoDate) return ''

    const date = new Date(isoDate)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }, [isoDate])
}
