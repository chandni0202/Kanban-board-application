import React from 'react';
import { DataContext , DataContextType} from '../api/dataContext';

export const useData = (): DataContextType => {
    const context = React.useContext(DataContext);
    if (context === undefined) {
      throw new Error('Add useData in data provider');
    }
    return context;
  };
  