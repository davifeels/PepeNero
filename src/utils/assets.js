// Utility to ensure assets resolve properly on GitHub Pages and local development

export const getAssetUrl = (path) => {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  
  const base = import.meta.env.BASE_URL || "/";
  const cleanBase = base.endsWith("/") ? base : `${base}/`;
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  
  return `${cleanBase}${cleanPath}`;
};
