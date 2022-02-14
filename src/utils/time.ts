let startTime = 0;

export function millisToString(millis: number, printMillis: boolean): string {
  let seconds = Math.floor(millis / 1000);
  millis = Math.ceil(millis % 1000);
  let minutes = Math.floor(seconds / 60);
  seconds = Math.ceil(seconds % 60);
  let hours = Math.floor(minutes / 60);
  minutes = Math.ceil(minutes % 60);
  let days = Math.floor(hours / 24);
  hours = Math.ceil(hours % 24);

  let output = '';

  let inserted = false;

  if (days > 0) {
    output += days + ' Tag';
    if (days > 1) {
      output += 'e';
    }
    inserted = true;
  }
  if (hours > 0) {
    if (inserted) {
      inserted = false;
      output += ' ';
    }
    output += hours + ' Stunde';
    if (hours > 1) {
      output += 'n';
    }
    inserted = true;
  }
  if (minutes > 0) {
    if (inserted) {
      inserted = false;
      output += ' ';
    }
    output += minutes + ' Minute';
    if (minutes > 1) {
      output += 'n';
    }
    inserted = true;
  }
  if (seconds > 0) {
    if (inserted) {
      inserted = false;
      output += ' ';
    }
    output += seconds + ' Sekunde';
    if (seconds > 1) {
      output += 'n';
    }
    inserted = true;
  }
  if (printMillis) {
    if (millis > 0) {
      if (inserted) {
        inserted = false;
        output += ' ';
      }
      output += millis + ' Millisekunde';
      if (millis > 1) {
        output += 'n';
      }
    }
  }

  return output;
}

export function setStartTime() {
  startTime = Date.now();
}

export function getStartTime(): number {
  return startTime;
}

export function getUptime(): number {
  return Date.now() - startTime;
}