import avatar from '../../images/avatar.jpg'

const Team = () => {
  const team = [
    {
      name: 'John Doe',
      role: 'CEO',
    },
    {
      name: 'Jane Smith',
      role: 'CTO',
    },
    {
      name: 'Alice Johnson',
      role: 'CFO',
    },
    {
      name: 'Bob Brown',
      role: 'COO',
    },
    {
      name: 'Charlie Davis',
      role: 'CMO',
    },
  ];

  return (
    <div className="w-full text-center mb-8">
      <h2 className="h2 mb-8">أعضاء الجمعية</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <div key={index} className="flex flex-col items-center border p-4 rounded-2xl">
            <span className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-gray-400 overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src={avatar}
                alt={`${member.name}`}
              />
            </span>
            <h2 className="text-xl font-semibold text-gray-700 mt-4">{member.name}</h2>
            <p className="text-gray-500 text-sm">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
