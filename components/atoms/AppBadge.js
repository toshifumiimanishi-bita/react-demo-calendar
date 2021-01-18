const AppBadge = ({
  className,
  children,
}) => {
  console.log(className)
  return (
    <div className={`bg-gray-300 rounded-md text-sm font-bold overflow-ellipsis px-4 py-2 ${className}`}>{ children }</div>
  )
}

export default AppBadge