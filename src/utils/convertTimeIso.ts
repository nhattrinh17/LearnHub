export function convertTimeIso(date: string) {
  const utcDate = new Date(date);
  const dateNow = new Date();
  const totalDays = (dateNow.getTime() - utcDate.getTime()) / (3600 * 1000 * 24);
  let formattedTime = '';
  // Lấy thông tin giờ và phút
  const hours = utcDate.getHours();
  const minutes = utcDate.getMinutes();
  if (totalDays < 1) {
    // Xác định AM hoặc PM
    const amPm = hours >= 12 ? 'PM' : 'AM';

    // Chuyển đổi giờ sang định dạng 12 giờ
    const formattedHours = hours % 12 || 12;

    // Tạo định dạng hh:mm AM/PM
    formattedTime = `${formattedHours}:${minutes < 10 ? '0' : ''}${minutes} ${amPm}`;
  } else if (totalDays >= 1 && totalDays < 6) {
    const dayOfWeek = utcDate.getDay();
    const daysOfWeek = ['CN', 'T.2', 'T.3', 'T.4', 'T.5', 'T.6', 'T.7'];
    formattedTime = `${hours}:${minutes} ${daysOfWeek[dayOfWeek]}`;
  } else if (totalDays >= 6 && totalDays <= 180) {
    formattedTime = `${hours}:${minutes} ${utcDate.getDate()} Tháng ${utcDate.getMonth()}`;
  } else {
    formattedTime = `${hours}:${minutes}  ${utcDate.getDate()} Tháng ${utcDate.getMonth()}, ${utcDate.getFullYear()}`;
  }
  return formattedTime;
}
