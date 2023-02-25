const formatTime = (time: number): string => {
  let hours: number = 0;
  let minutes: number = 0;
  let formattedTime: string = "";

  if (time % 60 === 0) {
    hours = time / 60;
  }
  if (time % 60 > 0){
    hours = Math.floor(time / 60);
    minutes = time % 60;
  }

  if (hours === 1) {
    formattedTime += `${hours} hour`;
  }
  if (hours > 1) {
    formattedTime += `${hours} hours`;
  }
  if (hours && minutes) {
    formattedTime += ' ';
  }

  if (minutes === 1) {
    formattedTime += `${minutes } minute`;
  }
  if (minutes > 1) {
    formattedTime += `${minutes} minutes`;
  }

  return formattedTime;
};

export default formatTime;
