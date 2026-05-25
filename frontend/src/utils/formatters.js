export function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(value) {
  if (!value) return "Not available";
  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(new Date(value));
}

export function apiError(error, fallback = "Something went wrong. Please try again.") {
  return error?.response?.data?.detail || error?.message || fallback;
}

export function getLatestAnalysis() {
  const cached = localStorage.getItem("hiresense_latest_analysis");
  return cached ? JSON.parse(cached) : null;
}

export function setLatestAnalysis(analysis) {
  localStorage.setItem("hiresense_latest_analysis", JSON.stringify(analysis));
}
