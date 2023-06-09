export default function getTime(postDate) {
  const currentDate = new Date()
  var time = Math.round((currentDate.getTime() - Date.parse(postDate)) / 1000)
  var hour = 60 * 60
  var days = 60 * 60 * 24
  var month = 60 * 60 * 24 * 31
  var year = 60 * 60 * 24 * 31 * 12
  if (time < 60) {
    return time + 's'
  } else if (time > 60) {
    if (time / hour > 0.99) {
      if (time / days > 0.99) {
        if (time / month > 0.99) {
          if (time / year > 0.99) {
            return Math.round(time / year > 0.99) + ' year ago'
          }
          return Math.round(time / month) + ' month ago'
        }
        return Math.round(time / days) + ' days ago'
      }
      return Math.round(time / hour) + ' hour ago'
    }
    return Math.round(time / 60) + ' minutes ago'
  }
  return time
}
