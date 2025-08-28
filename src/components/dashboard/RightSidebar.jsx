import React from 'react';


const RightSidebar = () => {
  const activities = [
    { user: 'You', action: 'fixed a bug', time: 'Just now', avatar: '', color: 'bg-green-100' },
    { user: 'New user', action: 'registered', time: '52 minutes ago', avatar: '', color: 'bg-blue-100' },
    { user: 'You', action: 'fixed a bug', time: '12 hours ago', avatar: '', color: 'bg-green-100' },
  

  ];

  const contacts = [
    { name: 'Natali Craig', avatar: '', status: 'online' },
    { name: 'Drew Cano', avatar: '', status: 'away' },
    { name: 'Andi Lane', avatar: '', status: 'online' },
    { name: 'Koray Okumus', avatar: '', status: 'offline' },
    { name: 'Kate Morrison', avatar: '', status: 'online' },
    { name: 'Melody Macy', avatar: '', status: 'away' }
  ];

  return (
    <div className="w-60 bg-gray-50 border-l border-gray-200 flex flex-col">
           
      <div className="p-4 bg-white border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
         
        </div>
        <div className="space-y-3 max-h-48 overflow-y-auto">
          {activities.slice(0, 4).map((activity, index) => (
            <div key={index} className="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${activity.color}`}>
                {activity.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900">
                  <span className="font-medium">{activity.user}</span> {activity.action}.
                </p>
                <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className="flex-1 p-4 bg-white border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Activities</h3>
        <div className="space-y-3 max-h-64 overflow-y-auto">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${activity.color}`}>
                {activity.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900">
                  <span className="font-medium">{activity.user}</span> {activity.action}.
                </p>
                <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
  
      <div className=" flex-3 p-4 bg-white">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Contacts</h3>
        <div className="space-y-3">
          {contacts.map((contact, index) => (
            <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm">
                  {contact.avatar}
                </div>
                <div className='absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white'></div>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{contact.name}</p>
                <p className="text-xs text-gray-500 capitalize">{contact.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;