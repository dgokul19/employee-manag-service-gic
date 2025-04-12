
export function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
}

export function formatDate(dateStr: string, format: string = 'YYYY-MM-DD'): string {
    if(!dateStr) return '';;
    const pad = (n: number): string => n.toString().padStart(2, '0');
    let date = new Date(dateStr);
    const map: Record<string, string> = {
      YYYY: date.getFullYear().toString(),
      MM: pad(date.getMonth() + 1),
      DD: pad(date.getDate()),
      HH: pad(date.getHours()),
      mm: pad(date.getMinutes()),
      ss: pad(date.getSeconds())
    };
  
    return format.replace(/YYYY|MM|DD|HH|mm|ss/g, token => map[token]);
  }