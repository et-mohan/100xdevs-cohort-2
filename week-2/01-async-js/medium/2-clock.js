setInterval(function () {
  const currentDate = new Date();
  let hours = currentDate.getHours();
  const minutes = currentDate.getMinutes().toString().padStart(2, "0");
  const seconds = currentDate.getSeconds().toString().padStart(2, "0");

  // Determine whether it's AM or PM
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  ahours = hours % 12 || 12;
  console.log("-----------------");
  console.log(`${hours}:${minutes}:${seconds}`);
  console.log(`${ahours}:${minutes}:${seconds} ${ampm}`);
}, 1000);
