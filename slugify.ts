export const slugify = (str: string) => {
  if(!str) return '';
  let repStr = str.toLowerCase();
  
  // Replace whitespaces with dash.
  repStr = repStr.replace(/\s/g, '-');
  
  // Replace the individual characters assumed to be in the input.
  repStr = repStr.replaceAll('ö', 'o');
  repStr = repStr.replaceAll('ä', 'a');
  
  // Replace the rest of non-english non-numeric characters.
  repStr = repStr.replace(/[^a-z^0-9^-]+/g, "-");
  
  // Remove consecutive dashes.
  let lastChar = '';
  let retStr = '';
  for (const letter of repStr) {
    if(letter == '-') {
      if(lastChar != '-') { retStr += '-' }
    } else {
      retStr += letter;
    }
    lastChar = letter;
  }
  
  // Remove trailing dash if exists.
  if(retStr.endsWith('-')) retStr = retStr.slice(0, -1);
  
  return retStr;
}
