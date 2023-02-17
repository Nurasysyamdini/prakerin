
export default function useDateFormat (date) {
    
    // format date bahasa indonesia
    let months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
    let days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
    let dateFormat = new Date(date)
    let day = days[dateFormat.getDay()]
    let month = months[dateFormat.getMonth()]
    let year = dateFormat.getFullYear()
    return `${day}, ${dateFormat.getDate()} ${month} ${year}`

}