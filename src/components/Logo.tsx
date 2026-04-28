export function Logo() {
  return (
    <div className="flex items-center gap-2" aria-label="Логотип инфографики" role="img">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="2" y="2" width="9" height="9" rx="2" fill="#3B82F6" />
        <rect x="13" y="2" width="9" height="9" rx="2" fill="#F59E0B" />
        <rect x="2" y="13" width="9" height="9" rx="2" fill="#F59E0B" />
        <rect x="13" y="13" width="9" height="9" rx="2" fill="#3B82F6" />
      </svg>
      <span className="text-lg font-bold text-foreground">ПрофиУрал</span>
    </div>
  )
}
