export const slugify = (str: string) => {
  if(!str) return '';
  let retStr = str.toLowerCase();
  const repChars = [' ', '+', '&'];
  for(const repChar of repchars) {
    retStr = retStr.replace(repChar, '-');
  }
  let lastChar = '';
  let tmpStr = '';
  for (const letter of inputData) {
    if(letter == '-') {
      if(lastChar != '-') { tmpStr += '-' }
    } else {
      tmpStr += letter;
    }
    lastChar = letter;
  
}
