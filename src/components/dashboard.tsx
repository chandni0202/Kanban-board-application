import { useState, useEffect } from 'react';
import { useData } from '../customHook/useData';
import { PriorityImage, StatusImage, truncateTextByCharCount, 
  priorityTextMap, sortTickets } from '../utilities/utility';
import {orderedStatuses, priorityOrder} from '../utilities/constant';
import Card from '../componentsLib/card';
import Dropdown from '../componentsLib/dropdown/dropdown';
import ColumnHeaderBtn from './subComponents/columnHeaderBtn';
import './dashboard.css';

const Dashboard = () => {
  const { data } = useData();
  const getOrderingStatus = window?.localStorage?.getItem('groupingOption') || 'Status';
  const getGroupingStatus = window?.localStorage?.getItem('orderingOption') || 'Priority';
  const [groupingOption, setGroupingOption] = useState(getOrderingStatus);
  const [orderingOption, setOrderingOption] = useState(getGroupingStatus);

  useEffect(() => {
    window?.localStorage?.setItem('groupingOption', groupingOption);
    window?.localStorage?.setItem('orderingOption', orderingOption);
  }, [groupingOption, orderingOption]);

  const getGroupingKey = (item: any, groupingOption: string) => {
    switch (groupingOption) {
      case 'User':
        return item.userId;
      case 'Priority':
        return item.priority;
      case 'Status':
        return item.status;
      default:
        return item.status;
    }
  };
  const groupedTickets = data?.tickets.reduce((acc: Record<string, any[]>, item: any) => {
    const key = getGroupingKey(item, groupingOption);
    if (!acc[key])acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {} as Record<string, any[]>);

    const statusesMap: Record<string, string[]> = {
      'Status': orderedStatuses,
      'Priority': priorityOrder,
    };
    const statuses = statusesMap[groupingOption] || Object.keys(groupedTickets || {});
    const getHeaderColumn = (key: string) => {
      if (groupingOption === 'User') {
        return data?.users.find((user: any) => user.id === key)?.name;
      } else if (groupingOption === 'Priority') {
        return priorityTextMap[key];
      }
      return key;
    };
    
    const getImageSrc = (key: string) => {
      if (groupingOption === 'Priority') {
        return PriorityImage(Number(key));
      }
      return StatusImage(key);
    };

    return (
      <div className='kanban-container'>
        <Dropdown
          selectedGrouping={groupingOption}
          selectedOrdering={orderingOption}
          onGroupChange={setGroupingOption}
          onOrderChange={setOrderingOption}
        />
        <div className='status-container'>
          {statuses?.map(key => {
            const ticketsInGroup = groupedTickets?.[key] || [];
            const sortedTickets = sortTickets(ticketsInGroup, orderingOption);
            const header = getHeaderColumn(key);
            const sortedTicketsLength = sortedTickets.length;
            return (
              <div key={key} className='column'>
                <div className='header-card'>
                  <div className='header-status'>
                    <img src={getImageSrc(key)} alt="status-img" width='16px' height='16px' />
                    <div className='column-header'>{header}</div>
                    {sortedTicketsLength}
                  </div>
                  {sortedTicketsLength > 0 && <ColumnHeaderBtn/>}
                </div>
                {sortedTickets.map((item: any) => (
                  <Card
                    key={item.id}
                    title={item.id}
                    content={truncateTextByCharCount(item.title, 50)}
                    tag={item.tag[0]}
                    image={groupingOption !== 'Priority' ? PriorityImage(item.priority) : ''}
                    userImg={groupingOption !== 'User' ? '/profile.svg' : ''}
                    titleImg={groupingOption !== 'Status' ? StatusImage(item.status) : ''}
                  />
                ))}
              </div>
            );
          })}
        </div>
      </div>
    );
        }
export default Dashboard;