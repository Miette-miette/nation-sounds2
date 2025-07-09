//Formatage des dates

export const formatDate = (iso) => {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
};

// Formatage des heures

export const formatTime = (iso) => {
  if (!iso) return "";
  return new Date(iso)
    .toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
    .replace(":", " h ");
};
