import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const inventorySidebar = [
    {
      label: "Dashboard",
      link: "/",
    },
    {
      label: "View Inventory",
      link: "/item",
    },
    {
      label: "Auto Reordering",
      link: "/reorder",
    },
    {
      label: "Track Product",
      link: "/track",
    },
    {
      label: "Supplier Information",
      link: "/supplier",
    },
  ];

  return (
    <aside className="max-w-[14rem] h-full px-5 py-3 hidden md:flex md:flex-col gap-3 justify-start border-r-[1px] border-primary-100 bg-gray-300">
      {inventorySidebar.map(({ label, link }) => (
        <p
          key={link}
          onClick={() => navigate(link)}
          className="cursor-pointer hover:text-blue-600"
        >
          {label}
        </p>
      ))}
    </aside>
  );
};

export default Sidebar;
