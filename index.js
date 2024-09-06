function convertTimeToWords(time) {
  if (time === '0:00') {
    return 'midnight';
  } else if (time === '12:00') {
    return 'midday';
  }

  const [hours, minutes] = time.split(':').map(Number);

  const timeArr = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'quarter',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
    'twenty',
  ];

  let words = '';

  switch (true) {
    case minutes === 0:
      words = `${timeArr[hours - 1]} o'clock`;
      break;
    case minutes < 30:
      words = `${timeArr[minutes - 1]} past ${timeArr[hours - 1]}`;
      break;
    case minutes === 30:
      words = `half past ${timeArr[hours - 1]}`;
      break;
    case minutes > 30:
      words = `${timeArr[60 - minutes - 1]} to ${timeArr[hours]}`;
      break;
  }
  return words;
}

module.exports = { convertTimeToWords };
