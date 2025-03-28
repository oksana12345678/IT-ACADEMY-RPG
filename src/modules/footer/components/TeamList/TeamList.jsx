import { useTranslation } from 'react-i18next';

const colorMapping = {
  frontend: 'text-[#61DAFB]',
  backend: 'text-[#E8B504]',
  design: 'text-[#E91E63]',
  manager: 'text-[#4CAF50]',
  qa: 'text-[#9C27B0]',
};

const getColorClass = (position) => {
  if (position.toLowerCase().includes('frontend')) return colorMapping.frontend;
  if (position.toLowerCase().includes('backend')) return colorMapping.backend;
  if (
    position.toLowerCase().includes('ux/ui') ||
    position.toLowerCase().includes('дизайн')
  )
    return colorMapping.design;
  if (position.toLowerCase().includes('менеджер')) return colorMapping.manager;
  if (position.toLowerCase().includes('qa')) return colorMapping.qa;
  return 'bg-gray-300';
};

const TeamList = () => {
  const { t } = useTranslation('teamList');

  return (
    <div className="flex w-full h-full xl:py-3 xl:px-15 md:py-8 md:px-8 py-3 justify-center items-center xl:items-start">
      <div className="flex flex-col h-full  w-fit  xl:items-start">
        <h2 className="text-[#FF9900] font-semibold xl:text-3xl md:text-2xl">
          {t('title')}
        </h2>
        <div className="flex flex-col gap-4 xl:flex-row ">
          <ul className="grid gap-y-[24px] gap-x-[40px] grid-cols-1 md:grid-cols-2">
            {t('list', { returnObjects: true }).map((member, index) => (
              <li
                className="flex flex-col md:gap-2 gap-1.5 xl:w-[314px] md:w-[270px]"
                key={index}
              >
                <p
                  className={`xl:text-2xl md:text-xl text-base font-normal ${getColorClass(
                    member.position
                  )}`}
                >
                  {member.name} {member.surname}
                </p>
                <p className="font-light xl:text-xl md:text-lg text-sm">
                  {member.position}
                </p>
              </li>
            ))}
          </ul>
          <div className="md:w-75 md:h-75 w-50 h-50 xl:w-100 xl:h-100 mx-auto">
            <img src="/group.png" alt="team illustration" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamList;
