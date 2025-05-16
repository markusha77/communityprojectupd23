/**
 * Formats a date string into a readable format
 * @param dateString - ISO date string
 * @param detailed - Whether to show a more detailed format
 * @returns Formatted date string
 */
export const formatDate = (dateString: string, detailed = false): string => {
  const date = new Date(dateString);
  
  // Check if date is valid
  if (isNaN(date.getTime())) {
    return 'Invalid date';
  }
  
  if (detailed) {
    // Format: "September 12, 2023"
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
  
  // Format: "Sep 12, 2023"
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};
