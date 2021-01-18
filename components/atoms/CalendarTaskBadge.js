import AppBadge from './AppBadge'

const CalendarTaskBadge = () => {
  return (
    <AppBadge className="relative bg-blue-400 text-white">
      海の日
      <button className="absolute right-2 top-1/2 transform -translate-y-1/2" type="button">×</button>
    </AppBadge>
  )
}

export default CalendarTaskBadge