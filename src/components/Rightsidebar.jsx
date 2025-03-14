import React from "react";

const RightSidebar = () => {
  return (
    <div className="p-3 bg-light  w-100">
      <h4 className="text-center border-bottom pb-2">Right Sidebar</h4>
      <ul className="list-unstyled">
        <li className="py-3">📢 Notifications</li>
        <li className="py-3">📅 Upcoming Events</li>
        <li className="py-3">⚙️ Settings</li>
        <li className="py-3">📰 Latest News</li>
      </ul>
    </div>
  );
};

export default RightSidebar;
