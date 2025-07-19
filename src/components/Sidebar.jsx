import React from 'react';
import { 
  Home, 
  FileText, 
  UserPlus, 
  Eye, 
  AlertTriangle, 
  ClipboardList, 
  MessageSquare, 
  Plus,
  LogOut
} from 'lucide-react';

const navigationItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: <Home size={20} />,
    isActive: true
  },
  {
    id: 'manage-research',
    label: 'Manage Research Submission',
    icon: <FileText size={20} />
  },
  {
    id: 'assign-reviewer',
    label: 'Assign Reviewer',
    icon: <UserPlus size={20} />
  },
  {
    id: 'review-submission',
    label: 'Review Submission',
    icon: <Eye size={20} />
  },
  {
    id: 'deviation-management',
    label: 'Deviation Management',
    icon: <AlertTriangle size={20} />
  },
  {
    id: 'manage-final-report',
    label: 'Manage Final Report Submission',
    icon: <ClipboardList size={20} />
  },
  {
    id: 'message',
    label: 'Message',
    icon: <MessageSquare size={20} />
  },
  {
    id: 'create-announcement',
    label: 'Create Announcement',
    icon: <Plus size={20} />
  }
];

const Sidebar = () => {
  return (
     <div className="w-64 h-screen bg-gradient-to-b from-pink-800 to-pink-900 flex flex-col">
      {/* Header */}
      <div className="p-4 border-t border-white">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src="https://lh6.googleusercontent.com/hYy0vGMNPaRV9ydh1Vw1MRCY4kkBIyRZTIReMc2gABzjWLqXVxfc9_6VkjKwNLgAgohq3l9MbIMaOGXB_6m6i21btCzLa4Bq5IJWKBlVYPiTjvCAXdBIQ1JJrCDeHbbgvUrigqxKWQ=w16383"
              alt="Uic logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-white text-sm font-semibold">Research Ethics Committee</h2>
            <p className="text-purple-200 text-xs">Navigation menu</p>
          </div>
        </div>
      </div>

      {/* Navigation ni umay */}
      <nav className="flex-1 py-4">
        <ul className="space-y-1 px-3">
          {navigationItems.map((item) => (
            <li key={item.id}>
              <button
                className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-left transition-colors duration-200 ${
                  item.isActive
                    ? 'bg-pink-700 text-white'
                    : 'text-purple-100 hover:bg-pink-900 hover:text-white'
                }`}
              >
                <span className={`${item.isActive ? 'text-white' : 'text-purple-300'}`}>
                  {item.icon}
                </span>
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* profile kuno */}
      <div className="p-4 border-t border-white">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
              alt="user profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <p className="text-white text-sm font-semibold">REC Chairperson</p>
            <p className="text-purple-200 text-xs">Dr. Aldwin James G. Bucio</p>
          </div>
          <button className="text-purple-300 hover:text-white transition-colors">
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;