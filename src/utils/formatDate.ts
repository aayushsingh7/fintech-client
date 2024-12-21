function formatDate(dateString: string) {
  // Check if input is provided
  if (!dateString) {
    throw new Error("Date string is required");
  }

  try {
    // Parse the date string
    const date = new Date(dateString);

    // Check if date is valid
    if (isNaN(date.getTime())) {
      throw new Error("Invalid date string provided");
    }

    // Array of month names
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Get date components
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    // Return formatted string
    return `${day} ${month} ${year}`;
  } catch (error: any) {
    throw new Error(`Error formatting date: ${error.message}`);
  }
}

export default formatDate;
