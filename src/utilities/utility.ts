import { priorityOrder} from './constant';
export const PriorityImage = (priority: number) => {
    if (priority === 1) {
      return '/imgLowPriority.svg';
    } else if (priority === 2) {
      return '/imgMediumPriority.svg';
    } else if (priority === 3) {
      return '/imgHighPriority.svg';
    } else if (priority === 4) {
      return '/urgentPriorityColour.svg';
    } else {
      return '/noPriority.svg';
    }
  };


export const StatusImage = (status: string) => {
  if (status === 'Todo') {
    return '/toDo.svg';
  } else if (status === 'Backlog') {
    return '/Backlog.svg';
  } else if (status === 'In progress') {
    return '/inProgress.svg';
  } else if (status === 'Done') {
    return '/Done.svg';
  } else if(status === 'Cancelled'){
    return '/Cancelled.svg';
  } else{
    return '';
  }
};

export const truncateTextByCharCount = (text: string, charLimit: number)=> {
  if (text.length <= charLimit) {
    return text;
  }
  return text.slice(0, charLimit) + '...';
}

export const priorityTextMap: any= {
  '0': 'No priority',
  '4': 'Urgent',
  '3': 'High',
  '2' : 'Medium',
  '1': 'Low',

}


export const sortTickets = (tickets: any[], orderingOption: string) => {
  if (orderingOption === 'Priority') {
    return tickets.sort((a, b) => {
      const priorityA = priorityOrder.indexOf(a.priority);
      const priorityB = priorityOrder.indexOf(b.priority);
      return priorityA - priorityB;
    });
  } else if (orderingOption === 'Title') {
    return tickets.sort((a, b) => a.title.localeCompare(b.title));
  }
  return tickets;
};

const predefinedColors = [
  '#FF0000', // Red
  '#FFFF00', // Yellow
  '#0000FF', // Blue
  '#00FF00', // Green
  '#000000', // Black
  '#8A2BE2'  // Violet
];

export const getRandomColor = (id: string): string => {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    const char = id.charCodeAt(i);
    hash = (hash << 5) - hash + char;
  }
  const index = Math.abs(hash) % predefinedColors.length;
  
  return predefinedColors[index];
};


