

// Custom hook for formatting a date
export const useFormattedDate = isoDate => {
 const date = new Date(isoDate)
 return date.toLocaleDateString('en-US', {
   year: 'numeric',
   month: 'long',
   day: 'numeric',
 })
}
