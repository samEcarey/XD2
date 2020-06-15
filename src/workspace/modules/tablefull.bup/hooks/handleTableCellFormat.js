export function handleTableCellFormat(type, format, presicion, cell) {
  if(type === "currency") {
    cell = Number(cell)
    switch(format) {
      case 'decimal':
        return '$' + cell.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      case 'simple':
          return '$' + cell.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      default:
        return '$' + cell;
    }
  }
  if(type === "number") {
    cell = Number(cell)
    let rescell = []
    let formatcell = cell.toFixed(presicion)
    rescell = formatcell.split('.');
    switch(format) {
      case 'decimal':
        return rescell[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') +'.'+ rescell[1]
      case 'simple':
          return cell.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      default:
        return cell;
    }
  }
  if(type === "percent") {
    cell = Number(cell)
    let rescell = []
    let formatcell = cell.toFixed(presicion)
    rescell = formatcell.split('.');
    switch(format) {
      case 'decimal':
        return rescell[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') +'.'+ rescell[1] + '%'
      case 'simple':
          return cell.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + '%'
      default:
        return cell + '%';
    }
  }
  if(type === "date") {
    let d = new Date(cell);
    let year = ('' + d.getFullYear())
    let month = (1 + d.getMonth())
    let day = d.getDate()
    let hours = d.getHours()
    let minutes = d.getMinutes()
    let seconds = d.getSeconds()
    let ampm = hours >= 12 ? 'pm' : 'am'
    let hourFormatted = hours % 12 || 12 // hour returned in 12 hour format
    var monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    var monthShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    switch(format) {
      case 'M/D/YY':
        return month + '/' + day + '/' + year.substr(2)
      case 'MM/DD/YY': 
        return month.toString().padStart(2, '0') + '/' + day.toString().padStart(2, '0') + '/' + year.substr(2)
      case 'MM/DD/YYYY':
        return month.toString().padStart(2, '0') + '/' + day.toString().padStart(2, '0') + '/' + year
      case 'MMM D, YY':
        return monthShortNames[month-1] + ' ' + day+ ',' +  year.substr(2)
      case 'MMMM D, YYYY':
        return monthNames[month-1] + ' ' + day+ ',' +  year
      case 'MM-DD':
        return month.toString().padStart(2, '0') + '-' + day.toString().padStart(2, '0')
      case 'YY-MM-DD':
        return year.substr(2) + '-' + month.toString().padStart(2, '0') + '-' + day.toString().padStart(2, '0')
      case 'D-MMM-YY':
        return day.toString().padStart(2, '0') + '-' + monthShortNames[month-1] + '-' + year.substr(2)
      case 'MMM-YY':
        return monthShortNames[month-1] + '-' + year.substr(2)
      case 'D-MMM':
        return day + '-' + monthShortNames[month-1]
      case 'MM/DD/YY HH:MM AM/PM':
        return month.toString().padStart(2, '0') + '/' + day.toString().padStart(2, '0') + '/' + year.substr(2) + ' ' + hourFormatted.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ' ' + ampm
      case 'MM/DD/YYYY HH:MM:SS':
        return month.toString().padStart(2, '0') + '/' + day.toString().padStart(2, '0') + '/' + year + ' ' + hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0')
      case 'M/D/YYYY H:MM':
        return month + '/' + day + '/' + year + ' ' + hours + ':' + minutes.toString().padStart(2, '0')
      default:
        return cell;
    }
  }
  if(type === "time") {
    let d = new Date(cell * 1000);
    let hours = d.getHours()
    let minutes = d.getMinutes()
    let seconds = d.getSeconds()
    let ampm = hours >= 12 ? 'pm' : 'am'
    let hourFormatted = hours % 12 || 12 // hour returned in 12 hour format
    switch(format) {
      case 'HH:MM':
        return hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0')
      case 'HH:MM:SS':
        return hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0')
      case 'HH:MM AM/PM':
        return hourFormatted.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ' ' + ampm
      case 'HH:MM:SS AM/PM':
        return hourFormatted.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0') + ' ' + ampm
      case 'H:MM AM/PM':
        return hours + ':' + minutes.toString().padStart(2, '0') + ' ' + ampm
      case 'H:MM':
        return hours + ':' + minutes.toString().padStart(2, '0')
      case 'H:MM:SS':
        return hours + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0')
      default:
        return cell;
    }
  }
  if(type === "boolean") {
    switch(format) {
      case '1':
        return cell === true || cell === 1 ? 1 : 0
      case 'true':
        return cell === true || cell === 1 ? 'TRUE' : 'FALSE'
      default:
        return cell;
    }
  }
  if(type === "text") {
    return cell;
  }
}