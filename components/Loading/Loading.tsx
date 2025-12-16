import './loading.css'

interface LoadingProps {
  message?: string
  size?: 'small' | 'medium' | 'large'
}

export default function Loading({
  message = 'Cargando canal...',
  size = 'medium',
}: LoadingProps) {
  const sizeClasses = {
    small: 'loading-small',
    medium: 'loading-medium',
    large: 'loading-large',
  }

  return (
    <div className={`loading-container ${sizeClasses[size]}`}>
      <div className="loading-spinner">
        <div className="spinner-ring"></div>
        <div className="spinner-dot"></div>
      </div>
      <p className="loading-message">{message}</p>
      <div className="loading-background"></div>
    </div>
  )
}
