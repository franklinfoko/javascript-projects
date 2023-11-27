const getSleepHours = (day) => {
  switch(day) {
    case 'monday':
      return 8
    case 'tuesday':
      return 7
    case 'wednesday':
      return 9
    case 'thursday':
      return 6
    case 'friday':
      return 5
    case 'saturday':
      return 10
    case 'sunday':
      return 11
    default:
      console.log('Invalid day input.')
  }
}

const getActualSleepHours = () => {
  let sum = getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')

  return sum
}

const getIdealSleepHours = () => {
  let idealHours = 8

  return idealHours * 7
}

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours()
  let idealSleepHours = getIdealSleepHours()
  
  if(actualSleepHours === idealSleepHours) {
    console.log('The user got the perfect amount of sleep')
  }
  else if (actualSleepHours > idealSleepHours) {
    console.log('The user got more sleep than needed. They got ' + (actualSleepHours - idealSleepHours) + ' hours more sleep.')
  }
  else {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.')
  }

}

console.log(calculateSleepDebt())